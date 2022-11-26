---
title: "Working with database"
description: "Setup database and connect to database from application"
---

This document assuming that database has been added into environment. If you want to add database into this environment please see detail at [Provision cloud services](provision-cloud-services)

# Using database in application

Once database has been added the environment, you can working with database by using command

```console
$ ylambda databases
[Staging]
[1] PostgreSQL - transfer_v1
[2] PostgreSQL - transfer_v2
[3] MSSQL - dynamic_crm_dev
[4] MySQL - analytic_db
```

In common scenarios, you want to use credential from your application. 

Ex: using database username and password to connect to database from application.

To do that, first we need to see all the configuration availaible for a database

```console
$ ylambda databases transfer_v1
[Staging]
hostname
dbname
username
password
```

In this example, There are variables: `hostname`, `dbname`, `username`, `password`.

If you want to use it in your application, example: `hostname`, then use this command

```console
$ ylambda vars ref databases.transfer_v1.hostname DB_HOST
[Staging] DB_HOST.......added
```

# Download a backup of the database
There is common use case where developer want to download a backup of database in a particular environment so that they can replicate in his local environment. yLambda support this feature by using command

```console
$ ylambda databases transfer_v1 download
[Staging] Backup.....................done
File name: transfer_v1(2).dump
```

Above command will run the backup for the `transfer_v1` database and then download to local machine and save to `transfer_v1(2).dump`. You can restore this file

# Restore database from a backup file
It's possible to restore a database from a local file to a database on server. Given we want to restore file `transfer_latest.dump` to database `transfer_v1` in Development environment, just make sure you're in staging environment by using command

```console
$ ylambda env ls
Development (current)
Staging
```

In this example, you're in Development environment. Let run the command to restore

```console
$ ylambda databases transfer_v1 restore transfer_latest.dump
[Development] Restoring(transfer_latest.dump).....................done
```

That's it!