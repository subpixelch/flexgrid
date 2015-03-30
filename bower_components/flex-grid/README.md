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
- Easy CSS masonry
- Consistently sized nested gutters without any additional context needing to be passed (i.e. `block(1/4)` works the same if it's a top level element or nested)


### Installation

- Just `@import` FlexGrid at the top of your stylesheet.


### Usage

FlexGrid operates primarily on 2 mixins: `box()` and `block()`.

Think of `box()` like the container element in other grid systems - except it can work vertically as well as horizontally.

Think of `block()` like the columns in other grid systems - except it can work vertically as well as horizontally.

```html
<section>
  <figure>...</figure>
  <figure>...</figure>
  <figure>...</figure>
</section>
```

```stylus
section
  box()

figure
  block(1/3)
```

Now let's make those elements display vertically instead of horizontally.

```stylus
section
  box(column)

figure
  block(1/3, column)
```

Maybe you'd like to have one element larger than the others?

```html
<section>
  <figure>...</figure>
  <figure>...</figure>
</section>
```

```stylus
section
  box()

figure
  &:first-child
    block(2/3)
  &:last-child
    block(1/3)
```

By default FlexGrid displays elements in a traditional grid. This means elements won't expand to fill their container. To change this behavior, simply use the `stretch()` mixin.

```html
<section>
  <figure>...</figure>
  <figure>...</figure>
</section>
```

```stylus
section
  box()

figure
  block(1/3)
  &:first-child
    stretch()
```

`stretch()` can also be configured to create CSS [masonry](http://masonry.desandro.com/) easily.

```html
<section>
  <img src="http://placehold.it/700x150&text=1">
  <img src="http://placehold.it/400x150&text=2">
  <img src="http://placehold.it/200x150&text=3">
  <img src="http://placehold.it/375x150&text=4">
  ...
</section>
```

```stylus
section
  box()

img
  block(1/3)
  &:first-child
    stretch(masonry)
```

Finally, you may want to have a gutter for a specific grid. Just pass the `$gut` parameter your gutter size for both the `box()` and the `block()`.

```stylus
section
  box($gut: 60px)

figure
  block(1/3, $gut: 60px)
```


### Settings

- `$gutter` - The default gutter size between all grid elements.


> **Note** The grid, like Flexbox, takes some getting used to, but once you get the hang of it, it adds a lot of power to Flexbox by letting you size and space things according to a real grid other than just with proportions. Feel free to mix real Flexbox rules into your stylesheets as FlexGrid doesn't impede on Flexbox in any way.


### Browser Support

- We are using both [Flexbox](http://caniuse.com/#feat=flexbox) (IE10) and [calc()](http://caniuse.com/#feat=calc) (IE9). So IE10+ with poor support in older Android devices.
