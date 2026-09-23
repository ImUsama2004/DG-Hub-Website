resource "aws_vpc" "dg_hub" {
  cidr_block = "10.0.0.0/16"

  tags = {
    name = "dg-hub-vpc"
  }
}