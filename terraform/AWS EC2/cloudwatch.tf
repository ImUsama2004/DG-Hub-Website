resource "aws_cloudwatch_metric_alarm" "dg_hub_cpu" {
  alarm_name          = "dg-hub-high-cpu"
  alarm_description   = "Alarm when DG-Hub EC2 CPU utilization is too high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 300
  statistic           = "Average"
  threshold           = 70

  dimensions = {
    InstanceId = aws_instance.dg_hub.id
  }

  treat_missing_data = "notBreaching"

  alarm_actions = [
    aws_sns_topic.dg_hub_alerts.arn
  ]

  tags = {
    Name = "dg-hub-high-cpu-alarm"
  }
}