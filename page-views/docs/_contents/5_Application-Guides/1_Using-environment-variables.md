---
title: "Add environment variable for application"
description: "Using yLambda to add environment variable used in application"
---

Many application using application setting to configure the application for each environment. Example, in development environment, developer don't want to track theirs user's behaviour by set the parameter `TRACKING_OPT_IN` to true.


# Working with environment variables
An application could be deployed to many environment so when working with variable you need to specify which environment you're working on by option `--env` and environment name.

To list all the environment use this command:

```console
$ ylambda env ls
Development (current)
Staging
```

Only environment which you have permissions will display.

To switch environment, use this command
```console
$ ylambda env use Staging
Development
Staging (current)
```

## Listing variables
All variable will be show in plain text except for secrets which will be also a environment variable but the value will be redacted.

```console
$ ylambda vars ls
[Staging]
REACT_APP_PORT=80
REACT_APP_CLIENTID=cefbb0c2697344108ed190314fa6ddec
REACT_APP_CLIENTSECRET=<REDACTED>
```

### Add variable
To add environment variable, use this command

```console
$ ylambda vars add FEATURES_AUTHS_ENABLE=false
[Staging] FEATURES_AUTHS_ENABLE.......added
```

> Notes: The existing variable will be override by the new value

### Remove variable
To remove environment variable, use this command

```console
$ ylambda vars remove FEATURES_AUTHS_ENABLE=false
[Staging] FEATURES_AUTHS_ENABLE.......removed
```



