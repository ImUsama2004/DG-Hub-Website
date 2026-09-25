resource "aws_instance" "dg_hub" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  subnet_id     = aws_subnet.dg_hub.id

  associate_public_ip_address = true

  iam_instance_profile = aws_iam_instance_profile.dg_hub.name

  vpc_security_group_ids = [aws_security_group.dg_hub.id]

  tags = {
    Name = var.instance_name
  }
}