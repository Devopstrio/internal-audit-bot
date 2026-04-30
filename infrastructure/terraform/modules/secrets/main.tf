resource "aws_secretsmanager_secret" "cloud_credentials" {
  name        = "audit-bot/cloud-provider-tokens"
  description = "API tokens for AWS, Azure, and GCP evidence collection."
}

resource "aws_secretsmanager_secret_version" "token_version" {
  secret_id     = aws_secretsmanager_secret.cloud_credentials.id
  secret_string = jsonencode({
    aws_access_key    = var.aws_access_key
    aws_secret_key    = var.aws_secret_key
    azure_client_id   = var.azure_client_id
    azure_client_sec  = var.azure_client_sec
    okta_api_token    = var.okta_api_token
  })
}
