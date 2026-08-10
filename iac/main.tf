provider "aws" {
  region = var.aws_region
}

# ACM certificates for CloudFront must be requested in us-east-1
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

resource "aws_s3_bucket" "jofmar-me" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "jofmar-me" {
  bucket = aws_s3_bucket.jofmar-me.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "jofmar-me" {
  bucket = aws_s3_bucket.jofmar-me.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipal"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "arn:aws:s3:::${var.bucket_name}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.jofmar-me.arn
          }
        }
      },
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.jofmar-me]
}

resource "aws_cloudfront_origin_access_control" "jofmar-me" {
  name                              = "${var.bucket_name}-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "url_rewrite" {
  name    = "${var.bucket_name}-url-rewrite"
  runtime = "cloudfront-js-2.0"
  comment = "Append index.html for directory-style requests"
  publish = true
  code    = file("${path.module}/cloudfront/url-rewrite.js")
}

resource "aws_acm_certificate" "jofmar-me" {
  provider          = aws.us_east_1
  domain_name       = "www.${var.domain_name}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# DNS is managed externally (IONOS). The apex domain redirects to www via
# IONOS domain forwarding, so only www needs a record here. Create the CNAME
# record printed in the acm_validation_records output, then apply again.
resource "aws_acm_certificate_validation" "jofmar-me" {
  provider        = aws.us_east_1
  certificate_arn = aws_acm_certificate.jofmar-me.arn
  validation_record_fqdns = [
    for dvo in aws_acm_certificate.jofmar-me.domain_validation_options : dvo.resource_record_name
  ]
}

resource "aws_cloudfront_distribution" "jofmar-me" {
  enabled             = true
  default_root_object = "index.html"
  aliases             = ["www.${var.domain_name}"]
  price_class         = var.cloudfront_price_class

  origin {
    domain_name              = aws_s3_bucket.jofmar-me.bucket_regional_domain_name
    origin_id                = "s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.jofmar-me.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-origin"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite.arn
    }
  }

  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/404.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.jofmar-me.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
