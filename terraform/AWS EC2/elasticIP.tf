resource "aws_eip" "dg_hub" {
  domain = "vpc"

  tags = {
    Name = "dg-hub-eip"
  }
}