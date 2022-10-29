---
title: "Connect yLambda to Kubernetes"
description: "A guide for ylambda administrator to connect ylambda to kubernetes kubernetes and ready for development team to deploy applications"
---

# Connect Kubernetes

Connect ylambda to kubernetes is one-time work and required administrator role be granted.  

Preconditions:  
* A kubernetes cluster with CoreDNS installed
* `kubectl` could connect to the kubernetes api with administrator role granted.

# Connect using ylambda cli

To start connect to kubernetes, run the command below:
```
$ ylambda connect k8s
```
You will be asked to select the cluster to if there are multiple cluster available in your `.kubeconfig`

# Default install components
By default, ylambda will install those tools to your kubernetes in namespace `ylambda-stack`:

* ylambda API
* Tekton
* Prometheus (a peristent volume will be created during the installation)
* Nats

> Warning: Those tools required at least 4GB memory and 2 CPU

# Healths
Verify the installation by run the command

```
$ ylambda health
ylambda-api......ready
tekton...........ready
prometheus.......ready
nats.............ready  

```
Now you can authenticate with ylambda api by command  

```
$ ylambda auth
ylambda api......connected
mTLS certificate stored in /etc/ylambda/ylambda.key
```







