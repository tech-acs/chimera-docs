---
sidebar_position: 3
slug: /core-concepts
---

# Core concepts


## Sources
What we usually refer to as a source in the context of a dashboard is the data source, which usually originates from a census or survey questionnaire. In case of CSPro, each CAPI app or questionnaire will have its own database where the responses (cases) received from the field are stored. 

We also use the source concept to store other related metadata such as the exercise start and end dates, exercise name etc. It is a crucial and core concept in our dashboard implementation. It is also sometimes referred to as a questionnaire. In general, please consider source and questionnaire as interchangeable terms.

![Questionnaires](/img/developer/questionnaires.png)

## Summary cards
Summary cards are what we use to display the high level status of a questionnaire or field data collection exercise (census/survey). They are displayed on the home page and show various high level stats such as total number of cases collected, the exercise start and end dates etc.

Each summary card can also contain various scorecards that display stats from within the data itself and you can have multiple summary cards on the home page.

![Summary cards](/img/developer/summary-card.png)

## Indicators
Indicators usually are data elements that represent statistical data for a specified time, place, and other characteristics. They are mostly depicted graphically in the form of common chart types such as bar, line, pie and others.

They also include metadata for the indicator such as a brief description, title and and extended text that is meant to aid in understanding what is depicted by the indicator.

![Indicators](/img/developer/indicators.png)

## Pages
A page is simply a grouping of indicators into a single web page that is accessed via the top navigation bar. The same indicator can be present in multiple pages and users can be granted access to pages or even to individual indicators.

## Map Indicators
Map indicators are simply map based representations of indicators. Data is displayed on top of maps. Values can be shown by hovering on each boundary and the boundary fill color also indicates the bin into which the value falls. 

A legend provides clarity for the data bins.

![Map Indicators](https://via.placeholder.com/728x90.png?text=Map+Indicator)

## Reports
Reports are compiled tabular datasets presented as CSV or Excel file formats. They are automatically generated based on a set schedule and can also be automatically emailed to designated users of the dashboard.

![Reports](/img/developer/reports.png)