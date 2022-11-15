---
title: "Deploying a branch to development environment"
description: "Deploy new environment, deploy application"
---

Developer could deploy a feature branch into development environment to integrate testing with other services.  

By default, any changes into main branch will be deploy into `Development` environment. A feature branch will not deploy to any environment unless explicit deploy by using the command

First, check git status if you're on feature branch.

```console
$ git status
On branch feat/integrate_payment
Your branch is up to date with 'origin/feat/integrate_payment'.

```

To deploy this branch into `development` environment, using this command

```console
$ ylambda deploy
On branch feat/integrate_payment
version: 0.1.feat-2b486ace
Build...............done
Create manifest.....done
Deploying...........done
Health..............200 OK
Deployed: https://transferx.dev.ylambda.com/api/0.1.feat-2b486ace
```

There are ground rules need to understand when deploy an feature branch into development environment:

* Using the same infrastructure with main branch in the `development`environment. That mean, example, if you connecting to a message broker and consumed from the queue, then the other deployment instance could not received that messages anymore
* Deploy an branch is not a main branch only short-live and either will terminated automatically in 24 hours or when the branch has been deleted (merged into main or manual deleted)







