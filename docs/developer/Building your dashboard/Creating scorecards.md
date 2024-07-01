---
sidebar_position: 3
slug: ../building-your-dashboard/creating-scorecards
---

# Creating scorecards
Scorecards are meant to display very high level data that pertains to either an important indicator or a performance metric. They are helpful to management in decision making and problem solving.

## Make scorecard command
The one and only way to create scorecards is by running the `chimera:make-scorecard` command.

Scorecards usually display just two things: title and value but can also include a delta display (to show percentage of change from a reference value) and a link button to jump to an indicator, if it exists.

![Scorecards](/img/developer/building-your-dashboard/scorecards.png)

## Implementing scorecards
Obviously, you will have to write some code in your generated scorecard file so that it distills and returns a value you intend.

You have a high degree of freedom on how you choose to code your scorecard as long as, at the end, you set the appropriate public class properties with their desired values. You have to return a Laravel Collection from the getData public method containing two elements. The first one being the value to display and the second being the change in value (delta) compared to some reference. If you do not intend to use the delta, you can return null. The last line of your getData() method could look like the following:

```php
return collect([$displayValue, $delta]);
```

- $this->title

    title is by default inherited from what you had provided when you created the scorecard. You can also edit this from the management menu.

- $this->bgColor

    the scorecard background color is dictated by the currently chosen theme but you are free to override and set your own desired color using HTML color constants or hex color values.

- $this->diff

    by default, this is set to 0 but you can set it to any integer (signed) value to depict the delta between the main value and some reference value.

- $this->unit

    by default, this is set to % and is shown as a unit for your delta (diff). You can override it to be any other unit or you can also set it to be an empty string.

- $this->value

    by default, this is set to the string value 'NA' but you are expected to set it to the value you want displayed on the scorecard. You will probably have to run some database queries to calculate that value.
