resource "aws_subnet" "dg_hub" {
  vpc_id            = aws_vpc.dg_hub.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "ap-southeast-2b"

  tags = {
    Name = "dg-hub-subnet"
  }
}
