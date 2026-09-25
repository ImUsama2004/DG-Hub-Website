resource "aws_iam_role_policy_attachment" "dg_hub_ssm" {
  role       = aws_iam_role.dg_hub.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}