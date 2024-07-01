---
sidebar_position: 5
slug: ../getting-started/configuration
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
- MAIL_FROM_NAME=""

### Dashboard features
The following are other environment variables you can set to affect various aspects of the dashboard. You can also set this and the next item from the management menu on the web UI.
- APP_OWNER_NAME=ECA

  set this to the organization that owns the dashboard. Used in the footer displayed across all pages (default ECA)

- APP_OWNER_URL=#

  set this to the URL (website) of the organization that owns the dashboard. Used in the footer displayed across all pages (default #)

- CACHE_TTL_SECONDS=1800

  set this to the number of seconds that you want database query results to be cached (default 60 * 30; thirty minutes)
 
- APP_TIMEZONE=UTC

    set this to the timezone of where the census/survey exercise is taking place (default UTC). You should only use valid timezones as per the php docs [here](https://www.php.net/manual/en/timezones.php)

- SECURE=false
    
    set this to true or false depending on whether you have https enabled on your dashboard web server (default false)

- INDICATORS_PER_PAGE=2

    set this to an even integer number which controls the number of indicators shown per page (default 2)

- EMAILING_ENABLED

    set this to true if you intend to send emails through the system (default false)

- ENFORCE_2FA=false
    
    set this to true to require users to enable and use two-factor authentication (default false) 

- INVITATION_TTL_HOURS=72
    
    set this to the number of hours you want user registration links to be valid for (default 72)

- REQUIRE_ACCOUNT_APPROVAL=false

    set this to true to require that all accounts get approval from dashboard manager before they can be used (default false)

- RECORDS_PER_PAGE=20
    
    set this to an integer number which controls the number of rows shown in various tables of the dashboard (default 20)

- MAP_CENTER_LAT=9.005401
    
    set this to the latitude of the map which is first panned into view when map is loaded (default 9.005401)

- MAP_CENTER_LON=38.763611
    
    set this to the longitude of the map which is first panned into view when map is loaded (default 38.763611)

- MAP_STARTING_ZOOM=7

  set this to the desired starting map zoom level. When navigating to the map page, this will be starting zoom level (default 7)

- MAP_MIN_ZOOM=6

  set this to control the maximum level of zooming out the user can achieve (default 6)

- LONG_QUERY_TIME=10

  the app will time and record how long each query of the dashboard artefacts takes above the set minimum (default 10 seconds)

- FEATURED_INDICATORS_PER_DATA_SOURCE=2

  on the home page, for each of the data sources, you can select and feature a number of indicators. You can set how many using this variable (default 2)