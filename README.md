# FlexGrid

A unique Flexbox grid system for SCSS and Stylus.


### Features

- Pass ratios (fractions or decimals) to assign sizing (e.g. `block(1/4)` would create blocks that are 1/4 the size of their container with a gutter between them)
- Works with [Isotope](http://isotope.metafizzy.co/) and other jQuery plugins like it
- Consistently sized nested gutters without any additional context needing to be passed (i.e. `block(1/4)` works the same if it's a top level element or nested)
- Vertical source ordering with Flexbox


### Installation

- Just `@import` FlexGrid at the top of your stylesheet.


### Usage

Rows are the only tricky bit. Anytime you want to create a grid, you need to create 2 wrapping elements and slap a `row()` onto the inner container.

```html
<section>
  <div>
    ...
  </div>
</section>
```

```stylus
section
  > div
    row()
```

Now plop some blocks in there...

```html
<section>
  <div>

    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>

  </div>
</section>
```

```stylus
section
  overflow-x: hidden
  > div
    row()
  .block
    block(1/3)
```

Plop as many blocks as you want. They'll wrap down to the next line nicely.

**A note on overflow:** You might get some overflow as a result of the negative margins. You can get rid of this with `overflow-x: hidden` applied to wrapping containers.


### Nesting

Anytime you want to nest, you'll need to add another one of those row divs in there and apply `row()` to it.

```html
<section>
  <div class="row">

    <div class="block">
      <div class="row">

        <div class="block"></div>
        <div class="block"></div>

      </div>
    </div>
    <div class="block"></div>

  </div>
</section>
```

```stylus
section
  .row
    row()
  .block
    block(1/2)
```


### Spanning

If you don't want gutters between your elements, just mark the second parameter (`gut`) as `0` for both your `row` and your `block` mixins.

```html
<section>
  <div>

    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>

  </div>
</section>
```

```stylus
section
  > div
    row(gut: 0)
  .block
    block(1/3, gut: 0)
```


### flex()

These act the same way as `block()` but just have a different type of output behavior. Simply change `block()` to `flex()` and it will automatically span the remaining columns to fit 100% of the container's width. [See it in action here](http://codepen.io/Flip4Bytes/pen/gbrJaz)

```html
<section>
  <div>

    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>

  </div>
</section>
```

```stylus
section
  > div
    row(gut)
  .block
    flex(1/3)
```

In this example, it would create two rows with all blocks spanning 1/3 each. Now unlike `row()` (which would would create a second row with two columns filling 1/3 each and a third column that is empty), `flex()` takes the remaining columns and flexes them to fill up the entire width of the space.

e.g. if two columns are left over in a new row, it will make them each 50% instead of just keeping them both at 33%.


### Source Ordering

Since we're using Flexbox you can simply swap the order of elements with the `order` rule.

```html
<section>
  <div>

    <aside>Sidebar</aside>
    <article>Content</article>

  </div>
</section>
```

```stylus
section
  > div
    row(gut)
  aside
    block(1/2)
    order: 2
  article
    block(1/2)
    order: 1
```

This is a pretty great Flexbox feature since there's no other way to do vertical source ordering.


### Browser Support

- We are using both [Flexbox](http://caniuse.com/#feat=flexbox) (IE10) and [calc()](http://caniuse.com/#feat=calc) (IE9). So IE10+ with poor support in older Android devices.
