variable "aws_region" {
  description = "AWS region where the DG-Hub infrastructure will be created"
  type        = string
  default     = "ap-southeast-2"
}

variable "ami_id" {
  description = "AMI ID used for the DG-Hub EC2 instance"
  type        = string
}

variable "instance_type" {
  description = "EC2 instance type for the DG-Hub server"
  type        = string
  default     = "t3.micro"
}

variable "instance_name" {
  description = "Name tag assigned to the DG-Hub EC2 instance"
  type        = string
  default     = "dg-hub-server"
}

variable "security_group_name" {
  description = "Name of the security group for the DG-Hub EC2 instance"
  type        = string
  default     = "dg-hub-sg"
}

variable "ssh_allowed_ip" {
  description = "Public IP address allowed to connect to the EC2 instance through SSH"
  type        = string
}