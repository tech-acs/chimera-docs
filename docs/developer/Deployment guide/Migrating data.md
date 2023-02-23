---
sidebar_position: 3
slug: ../deployment-guide/migrating-data
---

# Migrating data

When you are developing your dashboard by using tools such as the various make commands, data will be inserted into the postgres database.
When you are ready for deployment, you can use the data-export and data-import commands to migrate the data from your development machine
to the production server.

```
php artisan chimera:data-export
```

Running the above command will generate a file named *data-export.sql*. It contains the relevant parts of your postgres database (some tables only).
You can check this file into git so that it becomes available on your production server.

And on your production server, you can run the following command to import the data you have exported on your development server. If it encounters data 
that has already been inserted, it will be ignored.

```
php artisan chimera:data-import
```

:::info

In order to use these two commands, you will need to have the *PostgreSQL Client* installed on the system (not PostgreSQL server itself, just the client)

chimera:data-export makes use of **pg_dump** and chimera:data-import uses **psql**

On Ubuntu, you would install PostgresQL Client like so,

```
sudo apt install postgresql-client
```

:::