resource "aws_eip_association" "dg_hub" {
  instance_id   = aws_instance.dg_hub.id
  allocation_id = aws_eip.dg_hub.id
}