---
sidebar_position: 5
---

# Configuration

## Environment variables
There are a few environment variables that you can set/change to control various aspects of the dashboard.

### Database and queue
Primarily, you will already have set the database connection variables
- DB_CONNECTION=pgsql
- DB_HOST=your database host name or ip address
- DB_PORT=your database port (5432 is the default)
- DB_DATABASE=your database name
- DB_USERNAME=your database username
- DB_PASSWORD=your database password

In addition, you should also set the following variables

- APP_NAME="Your preferred dashboard name/title"
- QUEUE_CONNECTION=redis

### Mail
You also need to set up the mail server details if you have access to the Internet from the dashboard and also intend to send emails (such as registration invitations, etc.)
- MAIL_MAILER=smtp
- MAIL_HOST=mailhog
- MAIL_PORT=1025
- MAIL_USERNAME=null
- MAIL_PASSWORD=null
- MAIL_ENCRYPTION=null
- MAIL_FROM_ADDRESS="hello@example.com"
- MAIL_FROM_NAME="${APP_NAME}"

### Dashboard features
The following are other environment variables you can set to affect various aspects of the dashboard. 
- SECURE=false
    
    set this to true or false depending on whether you have https enabled on your dashboard web server (default false)

- INDICATORS_PER_PAGE=2

    set this to an integer number which controls the number of indicators shown per page (default 2)

- EMAILING_ENABLED

    set this to true if you intend to send emails through the system (default false)

- ENFORCE_2FA=false
    
    set this to true to require users to enable and use two factor authentication (default false) 

- INVITATION_TTL_HOURS=72
    
    set this to the number of hours you want user registration links to be valid for (default 72)

- RECORDS_PER_PAGE=20
    
    set this to an integer number which controls the number of rows shown in various tables of the dashboard (default 20)

- MAP_CENTER_LAT=9.005401
    
    set this to the latitude of the map which is first panned into view when map is loaded (default 9.005401)

- MAP_CENTER_LON=38.763611
    
    set this to the longitude of the map which is first panned into view when map is loaded (default 38.763611)

- CACHE_ENABLED=false
    
    set this to true or false to enable data caching (default false)