---
title: "Small bet"
description: "How do we define what feature need to build first"
date: "2023-01-14"
introduction: "A product management process to evaluate features need to build"
---

We have a big vision for yLambda, a whole platform for engineers to quickly up and deploy the applications. However to be getting a start we have to find a small thing and invest in that.

As it core, yLambda will save time for engineers to deploy the application and observe that application in any environment. The critical part here is that it helps:  
* Deploy applications
* Observe  

Those things must happen quickly and easily for engineers to do.
Our investment will focus on those three parts as the starting point.

## The CLI
### Detector
To deploy an application, CLI tool should have the ability to detect what kind of application they need to deploy and find out what needs to be deployed

### Generator
The manifest is what brings the application into a concrete Kubernetes environment so CLI will automatically generate valid manifests.

### Deployer
The final steps are to get those manifests, and container images and apply them to Kubernetes.

So this is basically a building block for CLI that we will work on as the small bet for the yLambda platform. We hope to share more on this progress and the lessons we learn from it with the community.
