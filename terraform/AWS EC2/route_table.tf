resource "aws_route_table" "dg_hub" {
  vpc_id = aws_vpc.dg_hub.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.dg_hub.id
  }

  tags = {
    Name = "dg-hub-route-table"
  }
}