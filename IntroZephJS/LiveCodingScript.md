## SETUP

First, we setup our project
which we will call rating-stars.

```
npm init
```

## INSTALL

Next, we install ZephJS globally.
This gives us access to
the ZephJS command line tool
which will help work with Zeph...

```
npm install -g zephjs
```

## SCAFFOLD

Once ZephJS is installed
we can use the ZephJS CLI
(called "zeph")
to scaffold our component:

```
zeph new rating-stars
```

This will create
a new scaffolded version
of our rating-stars component
in the current directory.
It also will ensure
that we have ZephJS itself
and a basic index.html file.

Lets look at what was created...

 - **zeph.full.js** is the full
 unminified version of ZephJS,
 useful for debugging and reference.

 - **zeph.min.js** is the minified
 version of ZephJS,
 weighing in at under 21k.

 - **index.html** will be created
 if no index.html exists
 and serves as an example
 of how to include a zephjs component.

 - **rating-stars.js** will serve
 as our component definition.

 - **rating-stars.html** provides
 the HTML internal content
 of our component.

 - **rating-stars.css** provides
 the CSS styling
 of our component
 and the internal content.

## RUN

Now that we have
our scaffolded component created,
we can go ahead and try it out.

ZephJS provides us a command
to easily serve and test our components:

```
zeph serve
```

This will start
a HTTP server
on port 4000,
which we can hit
in our browser
to take a look at our page.

Currently
there is nothing to actually look at
on the page,
but with our inspector
we can see our <rating-stars> element
and its internal content and styles.

## EDIT INDEX.HTML

So lets go add something to see.

First, we are going to build
out our index.html.
Let us say we are going to rate
the characters from Bob's Burgers:

 - Bob Belcher
 - Linda Belcher
 - Tina Belcher
 - Gene Belcher
 - Louise Belcher

So let us build out our index HTML
to allow each to be rated
and add a basic heading.

Each of our rating-stars elements
is going to have a separate label and value.
The value will indicate a positive whole number
from 0 to 5
to indicate what the rating currently is.
We will also leave a few values
off entirely to show how default values work

## RUN

Once added,
we can refresh our page and see,
well nothing,
because our rating-stars component has no content,
but if we use the inspector
we can see the html
for each of our rating-stars
and make sure all is well.

## EDIT RATING-STARS.JS

Let us define some basics
of our component
so we can start seeing something.

Our rating-stars.js file
is where we define our component,
so let us start there.

By default rating-stars.js
contains two definition methods:
html() and css().

The html() call tells
us where we get our components
internal content from.

The css() call tells
us where we get the styling information
for our component.

Both of these calls
are provided by our scaffolding
and can of course be removed or changed.
While you can provide
the HTML or CSS directly in these calls,
ZephJS, however,
recommends using external files
for HTML and CSS
just to separate everything cleanly.

In addition we to html() and css()
we also want to define a couple of attributes
on our rating-stars component:
label and value.

We do this with the attrbiute()
definition method,
which we will add now...

```
attribute("label","");
attribute("value","0");
```

Our attribute calls
tell our component
that it has the given attributes
with the default values.
If the attribute
is not provided by the usage of our component,
the default value is inserted.

## EDIT RATING-STARS.HTML

Next, we want to add some internal content
to our component,
so let us edit rating-stars.html.
In here we define the HTML
that makes up the inner working
of our component.

In our case
we want to define a place for our stars,
and a place for our label.

```
<div class="stars">
</div>
<div class="label">
</div>
```

## RUN

If we save now
and refresh our browser,
well, we get nothing still.
That's because although we defined our HTML,
we did not actually add any content,
just markup tags.

However, if we look with the inspector
we can see that the internal HTML
of each element is now populated.

## EDIT RATING-STARS.JS

So let us add some content
to our components
so we can start seeing something.

In the case of our example,
we want to take
the VALUE of our label ATTRIBUTE
and show it
as the content of our .label DIV.

This presents us with a chance to use a binding.
As discussed before a binding
is use to propagate some value
from one part of our custom element
or internal content of our custom element.
to another part of our custom element
or internal content of our custom element.

So let us add a binding:

```
bind("@label",".label","$");
```

## RUN

Now if we refresh
We have labels..

We can also show here
that if we go in with the inspector
and change the "label" attribute
the change is propagated
to the .label DIV element.

bindings are awesome!

## STARS

Next, we want to add some stars.
In the interest of saving time
let me just copy the image files
from somewhere else.

```
copy ../example/*.png
```

The gave us an empty star image
and a filled star image.

Over in our rating-stars.html file
we need to add IMG tags for each.

```
<div class="star">
	<img class="filled" />
	<img class="empty" />
</div>
<div class="star">
	<img class="filled" />
	<img class="empty" />
</div>
<div class="star">
	<img class="filled" />
	<img class="empty" />
</div>
<div class="star">
	<img class="filled" />
	<img class="empty" />
</div>
<div class="star">
	<img class="filled" />
	<img class="empty" />
</div>
```

If you are paying attention
you will notice
that we did not include
a SRC attribute in our IMG tags.

This is because
I am going to show off
another feature of ZephJS.

One of the definition methods
I skipped mentioning
is the asset() method.

asset() lets you associate
an element with some external content.

ZephJS will load the asset
and replace the SRC attribute
of the associated element with
the asset data.

So let's add an asset call:

```
asset(".stars > .star > .filled","./rating-stars.filled.png")
asset(".stars > .star > .empty","./rating-stars.empty.png")
```

Something to notice here:

Although we actually have
ten IMG tags in our HTML
I only added two asset calls
one for each type (emtpy or filled).
This is because
if when matching an CSS Query Selector
such as the first argument of asset()
if this produces multiple hits,
each hit is used.
This is applies to asset()
but also to bind() / bindAt()
and onEvent() / onEventAt()

## RUN

A quick refresh
and we now have stars.

But of course,
we have too many stars.

So let us go add some
CSS to make all this
look correctly.

## EDIT RATING-STARS.CSS

Instead of typing all this CSS in
I'm just going to cut and paste it
to save some time.

The fundamental idea
is to layout the component
and hide the empty stars
when filled
and the filled stars
when empty.

You will notice that the CSS
we use make usage
of the :host psuedo-selector.

The :host psuedo-selector allows CSS
to target the hosting custom element
Otherwise the CSS only
applies to the internal content.

And this is one of the great things
about web components.
none of the CSS we use
will leak out of the web component.
So our component
can use really simple class name
and selectors
without any concern of affecting
any external elements.

## RUN

A quick refresh
and now we have stars.

Our final piece of the puzzle,
we need the stars
to react to click events.
So if I click star
number 2,
the rating value
gets changed to 2,
and everything updates.

## EDIT RATING-STARS.JS

So back to rating-stars.js
We are going to add
an event handler.

We want to handle
The click event
on each star.

To do so we are going to use
our onEventAt()
definition method.

onEventAt lets us target a specific
internal content element
and listen for a specific eventType,
in this case the "click" event.

When the click event happens,
the listener will execute.

The listener gets four arguments:
 - The event itself
 - The element the event occured on ("the selected element")
 - The custom element itself
 - And the DocumentFragment of the internal content.

Inside our listener
we can compute which star
number is being clicked
with a little simple DOM
magic.

Once we know the value,
we simply update the value attribute
and our CSS takes care of the rest.

## BUNDLE

One last feature
I'd like to mention
before wrapping up
Is bundling.

Web Components are onlyreally useful
if they can be distributed.

So ZephJS provides a means
to bundle your component
into a single file.

The bundler,
which is based on Rollup,
Will traverse your definitions
find any html() or css() calls
and inline the content.
Any asset() calls are
also inlined.
Finally the bundler
wraps it all together with
a fresh minmized copy
of ZephJS
producing a single JS file
which contains everything
need for the component.

So let us run it once.

```
zeph bundle rating-stars.js rs.js
```

We can now examine the produced `rs.js`
At the top we have ZephJS minified.
Skipping down we can see our component
Notice that the HTML is inlined
and the CSS is inlined
and our image assets is inlined

Everything about our component is bundled
into one clean block of code
for distribution.

## BACK TO SLIDES
