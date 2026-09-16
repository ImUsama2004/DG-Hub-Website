resource "kubernetes_service" "dg_hub" {
  metadata {
    name = "dg-hub-service"
  }

  spec {
    selector = {
      app = "dg-hub"
    }

    port {
      port        = 80
      target_port = 80
      protocol    = "TCP"
    }

    type = "LoadBalancer"
  }
  wait_for_load_balancer = true
}