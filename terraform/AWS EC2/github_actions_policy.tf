resource "aws_iam_user_policy" "dg_hub_github_actions" {
  user = "dg-hub-github-actions"

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "ssm:SendCommand"
        ]

        Resource = [
          "arn:aws:ec2:ap-southeast-2:782893933254:instance/i-0986186c0d9594de1",
          "arn:aws:ssm:ap-southeast-2::document/AWS-RunShellScript"
        ]
      },
      {
        Effect = "Allow"

        Action = [
          "ssm:GetCommandInvocation"
        ]

        Resource = "*"
      }
    ]
  })
}