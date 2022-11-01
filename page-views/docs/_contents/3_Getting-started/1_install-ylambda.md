---
title: "Install yLambda stack"
description: "Install ylambda stack into your kubernetes clusters"
---

# Pre-conditionshien    

* Kubernetes cluster v1.23
* ylambda CLI
* ylambda will connect to your kubernetes cluster so the network connection and authentication must be granted

# Install ylambda CLI

## Linux

```bash
curl -L https://raw.githubusercontent.com/ylambda-com/ylambda-cli/latest/install.sh | sh
```

## Window

```bash
curl -L https://raw.githubusercontent.com/ylambda-com/ylambda-cli/latest/install.ps1 | sh
```  
* Please set the script policy to allow the powershell runs script. [docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.2)

# Final check
To ensure ylambda installed. Open new terminal and run the command:
```bash
$ ylambda info
ylambda-cli version 0.14-alpha (latest version: 0.14-alpha)
OS: Window
```

You should see the verion and the OS type.

> If you're developer who only use yLambda as self-service to launch and deploy the applications, read [Application guides](application-guides).  

> For platform engineer, please connect kubernetes and install yLambda stack in [Connect Kubernetes](connect-kubernetes).
