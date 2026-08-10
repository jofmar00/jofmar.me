output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name. Point a CNAME for www at this."
  value       = aws_cloudfront_distribution.jofmar-me.domain_name
}

output "acm_validation_records" {
  description = "DNS records to create manually at IONOS to validate the ACM certificate"
  value = [
    for dvo in aws_acm_certificate.jofmar-me.domain_validation_options : {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  ]
}