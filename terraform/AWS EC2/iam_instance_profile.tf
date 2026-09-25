resource "aws_iam_instance_profile" "dg_hub" {
  name = "dg-hub-ec2-profile"
  role = aws_iam_role.dg_hub.name

  tags = {
    Name = "dg-hub-ec2-profile"
  }
}