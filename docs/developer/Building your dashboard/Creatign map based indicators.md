---
sidebar_position: 8
slug: ../building-your-dashboard/creating-map-based-indicators
---

# Creating map based indicators

# Creating map indicators
Map indicators can be created in the same manner as chart indicators. Once you create, implement and publish them, they will be available on the Map page. The data will be displayed on top of a spatial map.

## Make-map-indicator command
The one and only way to create map-indicators is by running the `chimera:make-map-indicator` command. The command will use the included stub and create the MapIndicator class file in the *app/MapIndicators* folder.

## Implementing map-indicators
Obviously, you will have to write some code in your generated map-indicator file so that it queries and returns the data that needs to be present on the map.

You need to implement the getData() method and make sure it returns a Collection. You need to have at least these two keys on your collection.

- area_code
- value

Furthermore, if you include the following two, additional functionality will be unlocked accordingly.

- display_value
- info

The text contained in the *display_value* column will replace the one from value on the map tooltip. And if *info* is present, its contents will be rendered in an information box, on the bottom right of the map when the owning area is clicked.

The area_code column/key is used to match the corresponding area on the map. The value column is what is displayed for each area when you hover over it and finally, the info column should should hold the text that
is displayed (in an info box to the side) when its respective area is clicked on the map.

If for whatever reason, you need to use other names for these three columns, you certainly can. Just override the default values assigned to the public properties on your MapIndicator class. The properties and their default values are:

```php
public string $valueField = 'value';
public string $displayValueField = 'display_value';
public string $areaCodeField = 'area_code';
public string $infoTextField = 'info';
```

You should also set the following two values on your class as per your discretion.

```php
public array $bins = [0, 30, 70, 100];
const SELECTED_COLOR_CHART = 'rag';
```

In the example code above, your areas on the map will be colored according to the bins you have provided. Areas having value below 30 will be colored red, values between 30 and 70 will be colored amber and finally values above 70 will be colored green.

You have 8 color palettes to choose from. The first 7 palettes each have 10 colors arranged from the lightest variation to the darkest corresponding to the lowest to highest values defined in your bin of values.

If you have less number of bins than colors in your selected palette, then it will use as many as needed starting with the lightest color. You can not have more bins than colors though. 

You can also modify the built in color palettes if you need to by overriding the given constants.

alizarin

![alizarin](/img/developer/building-your-dashboard/color-palettes/alizarin.png)

wisteria

![wisteria](/img/developer/building-your-dashboard/color-palettes/wisteria.png)

peter-river

![peter-river](/img/developer/building-your-dashboard/color-palettes/peter-river.png)

nephritis

![nephritis](/img/developer/building-your-dashboard/color-palettes/nephritis.png)

sunflower

![sunflower](/img/developer/building-your-dashboard/color-palettes/sunflower.png)

pumpkin

![pumpkin](/img/developer/building-your-dashboard/color-palettes/pumpkin.png)

silver

![silver](/img/developer/building-your-dashboard/color-palettes/silver.png)

rag

![rag](/img/developer/building-your-dashboard/color-palettes/rag.png)

The intended use of these palettes is for you to decide on the appropriate bins and even if you have target values to compare to, you should do that in your getData method and return the 'ranked' values via the value column so that your areas can be colored accordingly.