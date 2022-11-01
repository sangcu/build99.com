---
title: "Connect Github with your yLambda platform"
description: "Configure yLambda to use Github as code repository"
---

> yLambda integrate with Github to store code, infrastructure as code. There is a primary ylambda-iac repository used for store configuration and all settings in ylambda cluster. This repository only grant permission for owner at connect time to Git. Please use the official administrator account instead your own account.

# Connect to Github organization

To connect to Github, use command:

```bash
$ ylambda connect git
Please login into browser
```

A browser will launch to guide you connect to your github organization, you have to logged with the account which granted permission to create repository in the organization. Otherwise, the yLambda cannot connect to Github.

After successfull login, you will see the output in the terminal

```bash
$ ylambda connect git
Please login into browser......connected
```

Now, let verify the integration

```bash
$ ylambda health
pv...............ready
postgres.........ready
ylambda-api......ready
tekton...........ready
prometheus.......ready
nats.............ready
git..............ready       <-- git ready here

```
You can see a new git repository created in your organization by command

```bash
$ ylambda git ls
ylambda-iac       <-- ylambda use this repo to store configurations
hello-app
```

