---
sidebar_position: 7
slug: ../building-your-dashboard/creating-reports
---

# Creating reports
Reports are compiled tabular datasets presented as CSV or Excel file formats. They are automatically generated based on a set schedule and can also be automatically emailed to designated users of the dashboard.

## Make report command
The one and only way to create reports is by running the `chimera:make-report` command.

## Implementing reports
Obviously, you will have to write some code in your generated report file so that it queries and returns the data that needs to be present in the generated report file.

You need to implement the getData() method and make sure it returns a Collection. The keys of the collection will become the column headers of the report spreadsheet and the values will become the rows.