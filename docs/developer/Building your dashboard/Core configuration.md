---
sidebar_position: 2
slug: ../building-your-dashboard/core-configuration
---

# Core configuration

Now that you have scaffolded a new dashboard, it is time to start filling it out with indicators and all the other things that make it a useful dashboard.

The first thing you need to put in place are your core settings and configurations. 

These are:

- Questionnaires/source databases setting
- Area hierarchy configuration
- Areas importation
- Reference values importation

## Questionnaires/source databases

We refer to a data source as a questionnaire. While this might not always correspond to your situation, its origins are based in how CSPro operates. Your dashboard can indeed connect to and work with multiple data sources (databases) and your census/survey does not need to be using CSPro. Our dashboard works with any kind of data in any kind of database as long as Laravel has a driver for it.

As you should already be logged in using a 'Manager/Administrator' type account, you can directly head to the 'Management' menu (see screenshot below) in your dashboard and start adding questionnaires.

![Management menu](/img/developer/building-your-dashboard/management-menu.png)

To create a questionnaire, you need to provide two sets of information. The first one deals with the census/survey exercise and the second one pertains to the database where the respective data is stored.

![Management menu](/img/developer/building-your-dashboard/create-questionnaire.png)

## Area hierarchy

What we refer to as area hierarchy is the administrative division (administrative unit, country subdivision, administrative region, subnational entity, etc.) you choose to employ in your census/survey exercise.

These are usually the mandate of one branch of the government and are either adopted as is or modified by National Statistical Offices (NSOs) to fit their particular need.

*The common names for the principal (largest) administrative divisions are: states (i.e. "subnational states", rather than sovereign states), provinces, lands, oblasts, governorates, cantons, prefectures, counties, regions, departments, and emirates. These, in turn, are often subdivided into smaller administrative units known by names such as circuits, counties, comarcas, raions, județe, or districts, which are further subdivided into the municipalities, communes or communities constituting the smallest units of subdivision.* 

> Source Wikipedia article: [Administrative division](https://en.wikipedia.org/wiki/Administrative_division)

You need to be in *development mode* to be able to create your area hierarchy.

Go to the 'Area Hierarchy' menu item under the management dropdown menu.

You should see an 'Add' button as long as you are in development mode, otherwise, you will only see a list of area names you have already added or an empty table.

Please note that the order of appearance of the area entries is important. It signifies hierarchy.

![Management menu](/img/developer/building-your-dashboard/area-hierarchy.png)

## Area importation

Once you define your area hierarchy, the next step is to actually import your areas into the system so that it can be used for filtering down various indicators and can also be used in maps.

## Reference value importation

What we generally refer to as reference values are concepts such as 'expected values' and 'target values'. These are used for comparing your actual data against so that you have some frame of reference to better understand the data/indicator your are viewing.