---
sidebar_position: 4
slug: ../deployment-guide/running-queue-workers
---

# Running queue workers

On the production server, you will need to run multiple queue workers which are needed to process the various queued jobs that the dashboard will generate.

For this, you will need to use a process monitor such as Supervisor.

The kit contains supervisor configuration template files which you can readily use.

Basically, you first have to make sure supervisor is installed and running. Then you will need to have to configuration files in place.

- supervisor.conf

    supervisor.conf should be copied to /etc/supervisor/ and can be used without any modification

- dashboard-workers.conf

    dashboard-workers.conf should be copied to /etc/supervisor/conf.d/ but will need to be edited by you to reflect the specifics of your production environment.

    In the file, you will find three lines that have been commented out (#), remove the comment and update the lines to reflect the correct paths and the user that is being used to run the dashboard on your system. 

To complete the configuration, please follow the instructions provided in the [relevant section](https://laravel.com/docs/9.x/queues#supervisor-configuration) of the Laravel documentation.