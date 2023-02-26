---
title: "Working with secret in yLambda"
description: "Guide to manage secret used in application"
---

Secret or sensitive data is the value that must be protected in Vault which is encrypted at rest. Application will connect to Vault using implicit role and permissions by ylambda during application creation. In under the hood, ylambda using Hashicorp's Vault. Further information about architecture and threat modeling could be review at [https://developer.hashicorp.com/vault/docs](https://developer.hashicorp.com/vault/docs)

# Working with secrets
An application could be deployed to many environment so when working with secrets you need to specify which environment you're working on by option `--env` and environment name. Reference to [Working-with-environment-variables](Add-environment-variables) for working with environment

## Listing secrets
To view all secrets use this command

```console
$ ylambda secret ls
[Staging]
REACT_APP_CLIENTSECRET=<REDACTED>
```
By default, its only show secret name and redacted the secret value, to display the value in plain text, you have to use additional option `--decrypt` as below

```console
$ ylambda secret ls --decrypt
[Staging]
REACT_APP_CLIENTSECRET=q1ncKxG28LzTZy9WuqHrwZ0hgdpn7mqk61qrNNAUfMOWyZtmIxeUaSTnzH1ivT58yPetbXKQub06kR0PwHHH
```

### Add secret
To add secret variable, use this command

```console
$ ylambda secret add MY_SECRET
Enter secret (Hidden): 
[Staging] MY_SECRET.........added
```

> Notes: The secret will be hided even if you typing into the standard input.

### Remove secret
To remove secret variable, use this command

```console
$ ylambda secret remove MY_SECRET
[Staging] MY_SECRET.......removed
```



