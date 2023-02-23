---
sidebar_position: 5
slug: ../building-your-dashboard/creating-indicators
---

# Creating indicators

Now that you have your core configuration in place, you can start creating indicators. Indicator creation involves running a chimera command (interactive) on the command line and will result in the creation of files (component class) and addition of entries in to the database for created indicators, including permissions.

The created indicator file will contain the basics of an indicator and it extends the base Chart class but will still require you two write some PHP code to implement your indicator fully.

## Make indicator command
The one and only way to create indicators is by running the `chimera:make-indicator` command.

The command is interactive and allows you to control various aspects of the generated file.

You can choose to have some working sample code included in the generated file so that you can immediately start seeing realistic looking indicators in your dashboard. 

You can also choose to download and use indicator templates that have already been partially built out by us (and hopefully other contributors).

```
php artisan chimera:make-indicator
```

:::caution
Please pay special attention when you provide a name for your indicator. It is what will became both the class and file name for you indicator and will create directories if you specify it.
Please read the instructions and examples on the command line very carefully.
:::

For example, the following will result in the creation of a folder called Enumeration in the <span className='text--danger text--light'>app/Http/Livewire</span> directory and a file named *HouseholdsEnumerated.php* inside the Enumeration directory.

![Make indicator command example](/img/developer/building-your-dashboard/make-indicator-command.png)

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
Deleting indicators (including permissions and database entry) can be accomplished by using the generic chimera:delete command

```
php artisan chimera:delete
```

## Editing and publishing indicators
Editing and publishing indicators can be accomplished via the 'Manage' menu.

There, you can edit indicator titles, descriptions, contextual help text and also provide multilingual translations for applicable fields.

You can also add the indicator to one or more of the pages you have already created. 

The default state of indicators when they are created on the command line is to be in 'draft' mode. You can publish them so that they can become visible on the pages they are added to by using the status toggle button.

## Implementing generated indicators
There are three possible versions your generated indicator file might be in.

- **Empty**

If you choose not to use indicator templates and also opt out of the inclusion of sample code during the generation, you will end up with the following file. 

```php
<?php

namespace App\Http\Livewire\Households;

use App\Http\Livewire\Chart;

class BirthRate extends Chart
{

}

```
If you publish it and see the results on the destination page, you will see an empty graph that displays a standard text stating the lack of data for the indicator.

- **With sample code**

If you choose to include sample code during the generation of the indicator, the resulting file will have three methods implemented (overriding the base class implementations) inside the class. 

If you previewed it, you would see something like the following

![Preview of indicator with sample code](/img/developer/building-your-dashboard/preview-of-indicator-with-sample-code.png)

- **From a template**

If you select an existing template during the generation of the indicator, the resulting file will have a "standard" implementation of the said indicator. In this scenario, you just need to replace the getData() method with your own implementation so that you are displaying actual data from your own questionnaire (data source).

![Preview of indicator with sample code](/img/developer/building-your-dashboard/preview-of-indicator-from-template.png)