DG-Hub
AWS DevOps Project — Infrastructure as Code, Containerized CI/CD, and
Automated EC2 Deployment
Muhammad Usama
September 2026
Project Overview
DG-Hub is a frontend web application used as the subject of a production-style DevOps
implementation. The project demonstrates a complete deployment lifecycle — from source code to
a running container on AWS EC2 — using infrastructure as code, containerization, automated CI/CD,
AWS Systems Manager–based deployment, and application monitoring.
The project implements an automated DevOps workflow using the following components:
Category Technology
Frontend DG-Hub
Containerization Docker
Container Registry Docker Hub
Infrastructure as Code Terraform
Cloud Platform AWS
Compute Amazon EC2
Container Runtime Docker Engine
Deployment Management AWS Systems Manager (SSM)
CI/CD GitHub Actions
Monitoring Amazon CloudWatch
Notifications Amazon SNS
Access Management AWS IAM
Networking
Amazon VPC, Subnet, Internet Gateway, Route
Table, Security Group
Static Public Address Elastic IP
The deployment process is fully automated after code is pushed to the main branch.
Architecture
High-Level Architecture
┌──────────────────────┐
│ Developer │
│ git push → main │
└──────────┬────────────┘
│
▼
┌──────────────────────┐
│ GitHub Actions │
│ CI: Build & Test │
└──────────┬────────────┘
│
▼
┌──────────────────────┐
│ Docker Hub │
│ DG-Hub Image :SHA │
└──────────┬────────────┘
│
▼
┌──────────────────────┐
│ GitHub Actions │
│ CD: Deploy via │
│ AWS SSM │
└──────────┬────────────┘
│
▼
┌─────────────────────────────────────────┐
│ AWS │
│ │
│ ┌─────────────────────────────────┐ │
│ │ VPC │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ Subnet │ │ │
│ │ │ ┌─────────────────┐ │ │ │
│ │ │ │ EC2 │ │ │ │
│ │ │ │ Docker │ │ │ │
│ │ │ │ │ │ │ │ │
│ │ │ │ ▼ │ │ │ │
│ │ │ │ DG-Hub :80 │ │ │ │
│ │ │ └─────────────────┘ │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
│ │
│ Elastic IP → EC2 │
└────────────────────┬─────────────────────┘
│
▼
Internet
│
▼
DG-Hub Website
CI/CD Pipeline
The project uses GitHub Actions to automate the complete deployment process, from source
checkout through to a verified, running container on EC2.
Pipeline Flow
Developer
│ git push
▼
GitHub Repository
▼
GitHub Actions
├── Checkout
├── Setup Node.js 20
├── npm ci
├── npm run build
├── Docker build
├── Docker Hub login
└── Docker push
▼
Docker Hub
▼
Deploy Job
▼
AWS SSM
▼
EC2
├── docker pull
├── stop old container
├── remove old container
├── start new container
├── verify container
├── verify HTTP response
└── remove old images
Docker
Each GitHub commit produces a unique Docker image tag based on the Git commit SHA:
muhammadusamasaeed/dg-hub:<commit-sha>
Using commit SHA tags instead of latest provides immutable and traceable deployments. For
example:
Commit
6262a78f...
│
▼
Docker Image
muhammadusamasaeed/dg-hub:6262a78f...
This makes it possible to identify exactly which source-code revision is running on EC2.
AWS Infrastructure
The AWS infrastructure is provisioned using Terraform.
VPC
CIDR: 10.0.0.0/16
Tag: dg-hub-vpc
Subnet
CIDR: 10.0.1.0/24
Availability Zone: ap-southeast-2b
The subnet is associated with the custom route table.
Internet Gateway
The Internet Gateway provides internet connectivity for resources in the VPC through the
configured route table.
Route Table
The route table contains the following route:
0.0.0.0/0 → Internet Gateway
This allows internet-bound traffic from the subnet.
Elastic IP
An Elastic IP is associated with the EC2 instance so the application has a stable public IPv4 address.
Security Group
The EC2 Security Group allows:
Direction Protocol Port Source
Inbound TCP 80 0.0.0.0/0
Outbound All All 0.0.0.0/0
SSH
Port 22 is intentionally not exposed. Instead of SSH, the project uses AWS Systems Manager
Session Manager for administrative access, removing the need to expose an SSH endpoint to the
internet.
IAM & AWS Systems Manager
The EC2 instance uses an IAM role through an instance profile.
EC2 IAM Flow
EC2
▼
IAM Instance Profile
▼
dg-hub-ec2-role
▼
AmazonSSMManagedInstanceCore
▼
AWS Systems Manager
The AmazonSSMManagedInstanceCore AWS-managed policy allows the EC2 instance to communicate
with Systems Manager. The EC2 instance appears as a managed node in Systems Manager and can
be accessed through Session Manager without SSH.
Deployment Through AWS SSM
GitHub Actions does not connect to the server using SSH. Instead:
GitHub Actions
▼
AWS IAM credentials
▼
AWS Systems Manager
▼
EC2
The deployment job sends commands to the EC2 instance using AWS-RunShellScript and performs
the following operations:
1. Pull the new Docker image.
2. Stop the existing DG-Hub container.
3. Remove the old container.
4. Start the new container.
5. Configure restart: unless-stopped .
6. Verify that the container is running.
7. Verify that the application responds on HTTP port 80.
8. Remove unused older DG-Hub Docker images.
9. Report deployment success or failure back to GitHub Actions.
Deployment Health Checks
The deployment pipeline does not simply start the container and assume it worked — it verifies
both container and application health.
Container health: The workflow checks that the dg-hub container is running.
HTTP health: The workflow sends curl -f http://localhost . A successful HTTP response confirms
that the application is responding inside the EC2 instance.
The deployment therefore follows this decision flow:
Deploy
▼
Container Running?
├── No → Deployment Failed
▼
HTTP Response?
├── No → Deployment Failed
▼
Cleanup
▼
Deployment Successful
Docker Image Cleanup
Every deployment creates a new image because the image is tagged with the Git commit SHA.
Without cleanup, old images would accumulate on the EC2 instance.
Current Running Image
│ keep
▼
DG-Hub Container
Old Images
│ remove
▼
Docker Storage
Only the currently running DG-Hub image is retained, preventing unnecessary disk usage over
time.
Monitoring
Amazon CloudWatch monitors the EC2 instance’s CPU utilization.
CPU Alarm
Setting Value
Alarm name dg-hub-high-cpu
Metric CPUUtilization
Threshold 70%
Statistic Average
Period 5 minutes
Evaluation periods 2
The alarm requires two consecutive five-minute evaluation periods above the configured threshold
before triggering.
Notifications
CloudWatch sends alarm notifications to an Amazon SNS topic.
EC2
▼
CloudWatch
│ CPU alarm
▼
SNS Topic
▼
Email Notification
SNS topic: dg-hub-alerts
The SNS email subscription has been confirmed and tested.
Terraform Structure
The AWS infrastructure is intentionally organized into separate Terraform files:
terraform/
└── AWS EC2/
├── provider.tf
├── variable.tf
├── terraform.tfvars
│
├── main.tf
├── VPC.tf
├── subnet.tf
├── internet_gateway.tf
├── route_table.tf
├── route_table_association.tf
│
├── security_group.tf
│
├── elasticIP.tf
├── elastic_IP_association.tf
│
├── Iam_role.tf
├── iam_policy.tf
├── iam_instance_profile.tf
├── github_actions_policy.tf
│
├── cloudwatch.tf
├── sns.tf
│
├── output.tf
└── .terraform.lock.hcl
Terraform File Responsibilities
File Responsibility
provider.tf AWS provider configuration
variable.tf Terraform input variables
terraform.tfvars Environment-specific values
main.tf EC2 instance
VPC.tf VPC
subnet.tf Subnet
internet_gateway.tf Internet Gateway
route_table.tf Routing
route_table_association.tf Subnet/route association
security_group.tf Network access rules
elasticIP.tf Elastic IP
elastic_IP_association.tf EIP-to-EC2 association
Iam_role.tf EC2 IAM role
iam_policy.tf SSM policy attachment
iam_instance_profile.tf EC2 instance profile
github_actions_policy.tf GitHub Actions SSM permissions
cloudwatch.tf CPU monitoring
sns.tf Alert notifications
output.tf Terraform outputs
Terraform Usage
Navigate to the AWS Terraform directory:
Initialize Terraform:
Format configuration:
Validate configuration:
Preview infrastructure changes:
cd "D:\Usama\dg-hub\dg-hub\terraform\AWS EC2"
terraform init
terraform fmt
terraform validate
Apply infrastructure:
Display outputs:
Infrastructure Verification
After deployment, infrastructure can be verified using:
The expected result when infrastructure is synchronized is:
No changes. Your infrastructure matches the configuration.
This confirms that the Terraform configuration matches the infrastructure recorded in the Terraform
state.
CI/CD Verification
A successful deployment should demonstrate the following sequence:
Git push
↓
GitHub Actions starts
↓
Dependencies installed
↓
Application builds successfully
↓
Docker image built
↓
Image pushed to Docker Hub
↓
AWS credentials configured
↓
SSM command sent
↓
EC2 pulls image
↓
Old container removed
↓
New container started
↓
Container health check passes
↓
HTTP health check passes
↓
Old images cleaned
↓
GitHub Actions succeeds
terraform plan
terraform apply
terraform output
terraform plan
DevOps Concepts Demonstrated
This project demonstrates practical experience with:
Infrastructure as Code — Terraform manages AWS resources instead of manually creating
infrastructure.
Cloud Networking — VPC, Subnet, Route Table, Internet Gateway, Security Group, and Elastic IP.
Containerization — DG-Hub is packaged as a Docker container.
CI/CD — GitHub Actions automatically builds, packages, publishes, and deploys the application.
Immutable Image Versioning — Docker images use Git commit SHA tags instead of relying on
latest .
Cloud-Based Deployment — AWS Systems Manager is used to execute deployment commands
remotely.
Secure Server Access — SSH is not exposed; administrative access is provided through AWS
Systems Manager.
Monitoring — CloudWatch monitors EC2 CPU utilization.
Alerting — SNS sends CloudWatch alerts through email.
Operational Maintenance — The deployment pipeline automatically cleans up unused Docker
images.
Infrastructure Validation — Terraform plan is used to detect infrastructure drift or pending
changes.
Design Decisions
Why EC2?
EC2 provides a practical environment for learning Linux server administration, Docker, networking,
IAM, SSM, monitoring, and CI/CD deployment.
Why Terraform?
Terraform makes the AWS infrastructure reproducible and version-controlled. Instead of manually
recreating the chain of VPC → Subnet → IGW → Route Table → Security Group → EC2 , Terraform defines
the infrastructure as code.
Why SSM instead of SSH?
The deployment does not require opening port 22. GitHub Actions communicates with AWS
Systems Manager, and SSM communicates with the EC2 instance — reducing the need for direct
SSH exposure.
Why commit SHA Docker tags?
A SHA tag provides a direct relationship between the Git commit, the Docker image, and the EC2
deployment, improving traceability compared with a mutable latest tag.
Secrets Management
Sensitive configuration is not committed to Git. The repository ignores Terraform variable files
( *.tfvars ).
GitHub Actions credentials are stored as GitHub repository secrets. The workflow uses
AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY , along with Docker Hub credentials. Secret values
are never stored directly in the workflow file.
GitHub Actions AWS Permissions
The dedicated IAM user dg-hub-github-actions is used by GitHub Actions. Its permissions are
limited to the SSM actions required by the deployment workflow:
ssm:SendCommand
ssm:GetCommandInvocation
The deployment does not require full AWS administrator permissions.
Repository Structure
DG-Hub/
├── .github/
│ └── workflows/
│ └── AWS_CI_CD.yml
│
├── src/
├── public/
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
│
└── terraform/
└── AWS EC2/
├── provider.tf
├── variable.tf
├── main.tf
├── VPC.tf
├── subnet.tf
├── internet_gateway.tf
├── route_table.tf
├── route_table_association.tf
├── security_group.tf
├── elasticIP.tf
├── elastic_IP_association.tf
├── Iam_role.tf
├── iam_policy.tf
├── iam_instance_profile.tf
├── github_actions_policy.tf
├── cloudwatch.tf
├── sns.tf
└── output.tf
Current Scope
This project intentionally uses a single EC2 instance and a single Docker container. It is designed as
a strong DevOps learning and portfolio project rather than a highly available production platform.
The current architecture does not include:
Application Load Balancer
Auto Scaling Group
RDS
Kubernetes on AWS
Multi-AZ application servers
Blue/Green deployment
Infrastructure modules
These can be introduced as future iterations.
Possible Future Improvements
Potential next versions could introduce:
Terraform modules
Application Load Balancer
Auto Scaling
HTTPS with ACM
Route 53 DNS
CloudWatch dashboards
Additional application metrics
Centralized logging
Blue/Green deployments
AWS ECS
AWS EKS
Remote Terraform state using S3
Terraform state locking
Environment separation
Automated rollback
Project Outcome
DG-Hub demonstrates a complete DevOps lifecycle:
Source Code → GitHub → GitHub Actions → Application Build
→ Docker Image → Docker Hub → AWS Systems Manager
→ EC2 → Docker Container → DG-Hub
→ CloudWatch → SNS Notifications
The infrastructure is managed through Terraform, application deployment is automated through
GitHub Actions, server access is handled through AWS Systems Manager, and the EC2 workload is
monitored through CloudWatch.
Author
Muhammad Usama
DevOps learning project focused on: AWS, Terraform, Docker, Kubernetes, GitHub Actions, CI/CD,
and Infrastructure as Code.
Summary
DG-Hub is a frontend application used to demonstrate a complete, automated DevOps workflow on
AWS. The project combines Terraform, AWS, Docker, GitHub Actions, SSM, CloudWatch,
and SNS into one end-to-end deployment pipeline.
The final result is an infrastructure-as-code based deployment where a change pushed to the main
branch can automatically become a new, versioned Docker deployment running on AWS EC2.