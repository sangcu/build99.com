---
title: "Launch a application"
description: "Create, build and deploy app"
---

# Create an application
An application in yLambda include:
* A git repository
* A CI/CD pipeline
* A toml configuration file name `ylambda.toml`

To create an application, run the command:  

```bash
$ ylambda app create simple-api --lang c#
git repository........created
ci/cd templates.......created
ylambda.toml..........created
```

Now, you can commit changes to git repository as normal workflow:

```bash
$ git commit -m "initial create simple-api"
$ git push
```

By default, any commit to `main` branch will be deploy to kubernetes

You can check the build result of current branch with command:

```bash
$ ylambda app simple-api build
succeeded..........15s
coverage: 75%
```