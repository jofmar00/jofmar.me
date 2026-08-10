variable "aws_region" {
  type        = string
  description = "AWS region to deploy resources"
  default     = "eu-west-1"
}

variable "bucket_name" {
  type        = string
  description = "Name of the S3 bucket"
  default     = "jofmar-me"
}

variable "domain_name" {
  type        = string
  description = "Root domain name for the site"
  default     = "jofmar.me"
}

variable "cloudfront_price_class" {
  type        = string
  description = "CloudFront price class. PriceClass_100 (US/Canada/Europe only) is the cheapest option."
  default     = "PriceClass_100"
}