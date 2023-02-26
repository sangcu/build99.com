---
title: "Working with database"
description: "Setup database and connect to database from application"
---

This document assumes that the database server has been added to the environment. If you want to add a database server to this environment please see the detail at [Provision](provision-cloud-services) cloud services](provision-cloud-services)

# Create a database
Once the database server has been added to the environment, you can create a database

```console
$ ylambda databases PostgreSQL create transfer_v1
[Staging] Database(transfer_v2)...............created
```
In this example, the database server is `PostgreSQL` and the database name to create is `transfer_v2`. To view a list of databases available, use this command  

```console
$ ylambda databases ls
[Staging]
[1] PostgreSQL - transfer_v1
[2] PostgreSQL - transfer_v2
[3] MSSQL - dynamic_crm_dev
[4] MySQL - analytic_db
```
# Using databases in application

In common scenarios, you want to use credentials from your application. 

Ex: using database username and password to connect to database from application.

To do that, first, we need to see all the configurations available for a database

```console
$ ylambda databases transfer_v1
[Staging]
hostname
dbname
username
password
```

In this example, There are variables: `hostname`, `dbname`, `username`, `password`.

If you want to use it in your application, for example: `hostname``, then use this command

```console
$ ylambda vars ref databases.transfer_v1.hostname DB_HOST
[Staging] DB_HOST.......added
```

# Download a backup of the database
There is a common use case where the developer want to download a backup of the database in a particular environment so that they can replicate it in his local environment. yLambda support this feature by using the command

```console
$ ylambda databases transfer_v1 download
[Staging] Backup.....................done
File name: transfer_v1(2).dump
```

The above command will run the backup for the `transfer_v1` database and then download and save it to file `transfer_v1(2).dump`. You can restore this file in the next step.

# Restore a database from a backup file  

It's possible to restore a database from a local file to a database on the server. Given we want to restore file `transfer_latest.dump` to database `transfer_v1` in the `Development` environment, just make sure you're in the staging environment by using the command

```console
$ ylambda env ls
Development (current)
Staging
```

In this example, you're in `Development` environment. Let's run the command to restore

```console
$ ylambda databases transfer_v1 restore transfer_latest.dump
[Development] Restoring(transfer_latest.dump).....................done
```

That's it!