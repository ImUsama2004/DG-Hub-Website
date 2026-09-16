terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "docker-desktop"
}

resource "kubernetes_deployment" "dg_hub" {
  metadata {
    name = "dg-hub"
  }

  spec {
    replicas = var.replicas

    selector {
      match_labels = {
        app = "dg-hub"
      }
    }

    template {
      metadata {
        labels = {
          app = "dg-hub"
        }
      }

      spec {
        automount_service_account_token = false
        enable_service_links            = false

        container {
          name  = "dg-hub"
          image = "muhammadusamasaeed/dg-hub:${var.image_tag}"

          port {
            container_port = 80
          }

          liveness_probe {
            http_get {
              path   = "/"
              port   = "80"
              scheme = "HTTP"
            }

            failure_threshold     = 3
            initial_delay_seconds = 10
            period_seconds        = 20
            success_threshold     = 1
            timeout_seconds       = 1
          }

          readiness_probe {
            http_get {
              path   = "/"
              port   = "80"
              scheme = "HTTP"
            }

            failure_threshold     = 3
            initial_delay_seconds = 5
            period_seconds        = 10
            success_threshold     = 1
            timeout_seconds       = 1
          }
        }
      }
    }
  }
}