output "ec2_instance_id" {
  description = "ID of the DG-Hub EC2 instance"
  value       = aws_instance.dg_hub.id
}

output "ec2_public_ip" {
  description = "Public IP address of the DG-Hub EC2 instance"
  value       = aws_instance.dg_hub.public_ip
}

output "ec2_public_dns" {
  description = "Public DNS name of the DG-Hub EC2 instance"
  value       = aws_instance.dg_hub.public_dns
}

output "security_group_id" {
  description = "ID of the DG-Hub security group"
  value       = aws_security_group.dg_hub.id
}