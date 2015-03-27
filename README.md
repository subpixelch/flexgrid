<p align="center">
  <img src="http://corysimmons.github.io/flexgrid/img/flexgrid-logo.svg">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/flexgrid.svg">
  <img src="https://img.shields.io/bower/v/flex-grid.svg">
  <img src="http://img.shields.io/npm/dm/flexgrid.svg">
</p>

A unique Flexbox grid system for SCSS and Stylus that allows you to create horizontal or vertical Flexbox grids on-the-fly.


### Features

- Ability to create vertical grids
- Pass ratios (fractions or decimals) to assign sizing (e.g. `block(1/4)` would create blocks that are 1/4 the size of their container with a gutter between them)
- Works with [Isotope](http://isotope.metafizzy.co/) and other jQuery plugins like it
- Consistently sized nested gutters without any additional context needing to be passed (i.e. `block(1/4)` works the same if it's a top level element or nested)


### Installation

- Just `@import` FlexGrid at the top of your stylesheet.


### Usage

FlexGrid operates with one primary mixin: `box()`. `box()` accepts a few arguments, but the main 3 you need to worry about are `$ratio` (fraction), `$dir` (direction), and `$flex`.

The markup for each box is `box > wrap > items`. Here's an example that will make the `figure` elements `1/3` of their container.

```html
<section>
  <div>
    <figure>...</figure>
    <figure>...</figure>
    <figure>...</figure>
  </div>
</section>
```

```stylus
section
  box(1/3)
```

Now let's make those elements display vertically instead of horizontally.

```stylus
section
  box(1/3, $dir: column)
```

By default FlexGrid displays elements in a traditional grid. This means elements won't expand to fill their container. To change this behavior, simply pass `true` to the `$flex` parameter.

```stylus
section
  box(1/3, $dir: column, $flex: true)
```

If you're using the default grid, elements will stack to the side of (or below) other elements when you run out of room on a row (or column). Sometimes this creates a scrollbar that will offset grids aligned to this grid. To add a placeholder scrollbar and make your grids align again, pass `true` to `$scroll` for the grid without a scrollbar.

```stylus
section
  box(1/3, $dir: column, $flex: true, $scroll: true)
```

Finally, you may want to have a gutter for a specific grid. Just pass the `$gut` parameter your gutter size.

```stylus
section
  box(1/3, $dir: column, $flex: true, $scroll: true, $gut: 60px)
```

To make an element within a `box` flex, use the `flex()` mixin which accepts a direction (`row` or `column`).

```html
<section>
  <div>
    <figure>...</figure>
    <figure>...</figure>
  </div>
</section>
```

```stylus
section
  box(1/3)
  figure
    &:nth-child(1)
      flex()
```


### Settings

- `$gutter` - The gutter size between grid elements.


> **Note** The grid, like Flexbox, takes some getting used to, but once you get the hang of it, it adds a lot of power to Flexbox by letting you size and space things according to a grid you have in mind.


### Browser Support

- We are using both [Flexbox](http://caniuse.com/#feat=flexbox) (IE10) and [calc()](http://caniuse.com/#feat=calc) (IE9). So IE10+ with poor support in older Android devices.
