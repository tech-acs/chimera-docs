---
sidebar_position: 3
---

# Creating indicators

Now that you have your questionnaires (data sources) added to the dashboard, you can start creating indicators. Indicator creation involves running a chimera command (interactive) on the command line and will result in the creation of files (component class) and addition of entries in to the database for created indicators, including permissions.

## Make indicator command
Indicators are created only by running the chimera:make-indicator command.

The command is interactive and allows you to control various aspects of the generated file. 

You can choose to have some working sample code included in the generated file so that you can immediately start seeing realistic looking in your dashboard. 

You can also choose to download and use indicator templates that have already been partially built out by us (and hopefully other contributors).

```
php artisan chimera:make-indicator
```

## Indicator templates
Indicator templates are partial implementations of common indicators such as population pyramid, household size, sex ratio, etc.

You can find more information about implemented indicators from the [chimera-indicator-templates](https://github.com/tech-acs/chimera-indicator-templates) github repository.

You can make use of them by first downloading them into your dashboard so that they become available for selection when you are running the chimera:make-indicator command

```
php artisan chimera:download-indicator-templates
```

Once you have generated your indicator file, you can then edit it in your IDE of choice. Coding indicators is a rather simple affair.
The following are the three methods that you usually need to implement to have a functioning indicator. As they are all implemented in the base class, you can choose to override them and provide implementations for one or all of them.

```
getData(array $filter): Collection

getTraces(Collection $data, array $filter): array

getLayout(array $filter): array
```

getData() is expected to have your database query and must return an Eloquent Collection

getTraces() uses the data returned by getData() and formulates the traces you intend to have in your indicator.

getLayout() just like the other methods, getLayout() returns the default layout provided which you can receive, modify and return.

## Deleting indicators
Deleting indicators (including permissions and database entry) can be acomplished by using the generic chimera:delete command

```
php artisan chimera:delete
```

## Editing and publishing indicators
Editing and publishing indicators can be accomplished via the 'Manage' menu.

There, you can edit indicator titles, descriptions, contextual help text and also provide multilingual translations for applicable fields.

You can also add the indicator to one or more of the pages you have already created. 

The default state of indicators when they are created on the command line is to be in 'draft' mode. You can publish them so that they can become visible on the pages they are added to by using the status toggle button.
