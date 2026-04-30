resource "aws_eks_cluster" "audit_runtime" {
  name     = "audit-bot-compute-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = var.private_subnets
  }
}

resource "aws_eks_node_group" "audit_workers" {
  cluster_name    = aws_eks_cluster.audit_runtime.name
  node_group_name = "audit-bot-nodes"
  node_role_arn   = aws_iam_role.node_role.arn
  subnets         = var.private_subnets

  scaling_config {
    desired_size = 2
    max_size     = 8
    min_size     = 2
  }
}
