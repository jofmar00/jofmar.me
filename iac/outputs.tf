output "bucket_endpoint" {
  description = "Bucket endpoint"
  value       = "http://${aws_s3_bucket_website_configuration.jofmar-me.website_endpoint}"
}