terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.47.0"
    }
  }
# backend "s3" {
#   bucket = "ibm-zeke-training"
#   key    = "terraform-backendfile.tfstate"
#    region = "ap-south-1"
#  }
}

provider "aws" {
  region = "ap-south-1"
}


# Create the bucket

resource "aws_s3_bucket" "tf_code" {
  bucket        = var.project_name
  acl           = "private"
  force_destroy = true

  tags = {
    Name = "tf_bucket"
  }
}
