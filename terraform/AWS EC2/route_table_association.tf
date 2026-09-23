resource "aws_route_table_association" "dg_hub" {
  subnet_id      = aws_subnet.dg_hub.id
  route_table_id = aws_route_table.dg_hub.id
}