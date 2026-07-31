provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "jofmar-me" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_public_access_block" "jofmar-me" {
  bucket = aws_s3_bucket.jofmar-me.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "jofmar-me" {
  bucket = aws_s3_bucket.jofmar-me.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Principal = "*"
        Action = [
          "s3:GetObject",
        ]
        Effect = "Allow"
        Resource = [
          "arn:aws:s3:::${var.bucket_name}",
          "arn:aws:s3:::${var.bucket_name}/*"
        ]
      },
    ]
  })

  depends_on = [ aws_s3_bucket_public_access_block.jofmar-me ]
}

resource "aws_s3_bucket_website_configuration" "jofmar-me" {
    bucket = aws_s3_bucket.jofmar-me.id
    
    index_document {
        suffix = "index.html"
    }
    
    error_document {
        key = "404.html"
    }
  
}