resource "aws_internet_gateway" "dg_hub" {
  vpc_id = aws_vpc.dg_hub.id


  tags = {
    Name = "dg-hub-igw"
  }

}