resource "aws_sns_topic" "dg_hub_alerts" {
  name = "dg-hub-alerts"

  tags = {
    Name = "dg-hub-alerts"
  }
}

resource "aws_sns_topic_subscription" "dg_hub_email" {
  topic_arn = aws_sns_topic.dg_hub_alerts.arn
  protocol  = "email"
  endpoint  = "em.usama2004@gmail.com"
}