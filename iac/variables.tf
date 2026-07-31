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