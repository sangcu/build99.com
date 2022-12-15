---
title: "yLambda high level architecture"
description: "A high level architecture of a modular monolithic"
date: "2022-12-12"
introduction: "A quick look into high level architecture of yLambda"
---

## Deployment Model

yLambda build on top of Kubernetes so that the deployment model influent the architecture. Let take a look at a high level view of the deployment model

 ![yLambda high level architecture](/images/blogs/assets/high-level-architecture.png)


### API
Play a core part of the system, API is hosted in kubernetes and configure to deploy each modular isolated. The architecture of API is modular monolothic where each modular could be deployed to run standalone. Each module in API will be connect to detail implementation of CI/CD pipeline, Monitoring, et.cetera

### CLI

This is the terminal UI where developer could use command line to interact with the API. Its cross-platform and built by Rust. The communication channel in short term will be protected by mTLS and in long term its will use other authentication mechanism together with role-based authorization.

Now, we have deployment model where we visualize how yLambda will be deploy in Kubernetes, the next step in product development is identify what need to build first? there many features in yLambda but as a small team, we need to know which is the fist and the most value to our users. See [Small bet](Small-bets)