---
title: "Monitor Application"
description: "Developer monitoring application and self-service"
---

# Monitoring

With ylambda CLI installed, developer can quickly monitor application by using command:

```console
$ ylambda app simple-api health --time 2h
rps : 100
errors : 4
p90 : 58ms
p95 : 83ms
p99 : 123ms
```

Developer could see the details of errors by using the command

```console
$ ylambda * --kind error
```

the `*` meaning that it will use the last configure from your terminal, in this case, app is `simple-api`, action is `health` and time is `2h`, with the errors in suffix of the command, it will automatically sent the command `ylambda app simple-api health --time 2h --kind error`. The logs in response to the command:

```console
$ ylambda * --kind error
command: ylambda app simple-api health --time 2h --kind error
[05/11/22 21:11:43]
Unhandled Exception:
System.IndexOutOfRangeException:
Index was outside the bounds of the array.
at SimpleApi.Main()

```
Reference to ylambda reference [ylambda reference](ylambda-cli-reference) for more information about monitor your application



