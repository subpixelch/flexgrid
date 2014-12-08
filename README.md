# flexgrid

FlexBox grid system for Stylus.


### Features that set this grid apart
- Pass ratios (fractions or decimals) to assign sizing (e.g. `block(1/4)` would create blocks that are 1/4 the size of their container with a gutter between them)
- Works with [Masonry](http://isotope.metafizzy.co/) and other jQuery plugins like it
- Consistently sized nested gutters without any additional context needing to be passed (i.e. `block(1/4)` works the same if it's a top level element or nested)
- Vertical source ordering with FlexBox


### Installation
Just `@import` [flexgrid.styl](flexgrid.styl) at the top of your Stylus stylesheet.

##### Stylus CLI
- `npm i -g flexgrid`
- `stylus -u flexgrid -w style.styl`
- Put `@import 'flexgrid'` at the top of `style.styl`

##### Bower
- `bower i flex-grid`
- Put `@import 'project/path/bower_components/flexgrid/flexgrid'` at the top of your Stylus file.


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


### Source Ordering
Since we're using FlexBox you can simply swap the order of elements with the `order` rule.

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

This is a pretty great FlexBox feature since there's no way to do vertical source ordering any other way.
