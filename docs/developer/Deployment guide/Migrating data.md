---
sidebar_position: 3
---

# Migrating data

When you are developing your dashboard by using tools such as the various make commands, data will be inserted into the postgres database.
When you are ready for deployment, you can use the data-export and data-import commands to migrate the data from your development machine
to the production server.

```
php artisan chimera:data-export
```

Running the above command will generate two files.

The first one, named *data-export.sql* is the file that contains the relevant parts of your postgres database.
You should check this file into git so that it becomes available on your production server.

The second file is named *.data-export-stamp* and is used to keep track the export status of your data.
This file allows you to do multiple exports over time and only newer data will be included in subsequent exports.

This file should not be checked into your git repository.

And on your production server, you can run the following command to import the data you have exported on your development server

```
php artisan chimera:data-import
```