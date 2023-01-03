---
sidebar_position: 4
---

# Running queue workers

On the production server, you will need to run multiple queue workers which are needed to process the various queued jobs that the dashboard will generate.

For this, you will need to use a process monitor such as Supervisor.

Please refer to the [relevant section](https://laravel.com/docs/9.x/queues#supervisor-configuration) of the Laravel documentation on how to configure it.