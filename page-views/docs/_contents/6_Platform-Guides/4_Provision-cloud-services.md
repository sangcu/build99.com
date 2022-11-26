---
title: "Provision a cloud service"
description: "Add cloud service into your environment"
---

# What is cloud service?
A cloud service in terms of yLambda context is a managed service provided by a cloud provider like AWS, GCP, Azure. yLambda doesn't control those services instead cloud providers will manage them.

When a cloud service requests from ylambda, under the hood, there is a repository created for that service and an infrastructure as code will be created in that repository and run deployment as a CI step. Any changes to cloud service will be output by code and put in the code repository for deployment.

# Supported Cloud Provider
Cloud service is not available yet. We're actively developing this feature.






