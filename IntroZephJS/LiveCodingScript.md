
## CREATE DIRECTORY

> **setup a new project**

```
mkdir workspace
cd workspace
npm init -y
```

## INSTALL

> **Install zephjs**

```
npm install -g zephjs
```

## SCAFFOLD

> **Talk about zeph CLI**

> **Scaffold a new component**

```
zeph new rating-stars
```

> **What got created**

## RUN

> **Talk about "zeph serve"**

> **Run **

```
zeph serve
```

> **Browser**

## EDIT INDEX.HTML

> **Talk about index.html**

> **Going to Rate Bob's Burgers Character**

> **Add Heading**

> **Replicate `<rating-stars>`**

```
<h2>Rate the Bob's Burgers Characters!</h2>
<rating-stars label="Bob Belcher" value="3"></rating-stars>
<rating-stars label="Linda Belcher" value="0"></rating-stars>
<rating-stars label="Tina Belcher" value="4"></rating-stars>
<rating-stars label="Gene Belcher"></rating-stars>
<rating-stars label="Lousie Belcher"></rating-stars>
```

## REFRESH

> **Nothing to See Still**

> **Inspector!**

## EDIT RATING-STARS.JS

> **Talk about html()**

> **Talk about css()**

> **Add attributes**

```
attribute("label","");
attribute("value","0");
```

## EDIT RATING-STARS.HTML

> **Add some internal content to our component**

```
<div class="stars">
</div>
<div class="label">
</div>
```

## REFRESH

> **Browser**

> **Still Nothing because we didnt put any content in yet**

> **Inspector**

## EDIT RATING-STARS.JS

> **We want the ATTRIBUTE "label" to be the content of our DIV .label tag.**

> **Bindings!**

```
bind("@label",".label","$");
```

## REFRESH

> **Finally some content**

> **Inspect and change one attribute label to show updating**

## STARS

> **Time to add our Stars!**

> **Copy assets instead of making them**

```
copy ../example/*.png
```

## EDIT RATING-STARS.HTML

> **Add Stars to HTML**

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

## EDIT RATING-STARS.JS

> **Notice no SRC attributes!**

> **asset() to the rescue!**

```
asset(".stars > .star > .filled","./rating-stars.filled.png")
asset(".stars > .star > .empty","./rating-stars.empty.png")
```

> **Notice only two asset() calls... Multiple implications**

## REFRESH

> **Browser - Stars, but not style**

## EDIT RATING-STARS.CSS

> **Cut and Paste CSS to save time**

```
:host {
	display: flex;
	margin-bottom: 10px;
}

.stars {
	flex: 0 0 auto;
	display: flex;
}

.label {
	flex: 1 0 auto;
	margin-left: 15px;
}

.stars > * {
	margin-right: 5px;
	display: block;
	cursor: pointer;
}

.stars > .star > .empty {
	flex: 0 0 auto;
	display: inherit;
}

.stars > .star > .filled {
	flex: 0 0 auto;
	display: none;
}

:host([value="1"]) .stars > .star:nth-child(1) > .filled,
:host([value="2"]) .stars > .star:nth-child(1) > .filled,
:host([value="3"]) .stars > .star:nth-child(1) > .filled,
:host([value="4"]) .stars > .star:nth-child(1) > .filled,
:host([value="5"]) .stars > .star:nth-child(1) > .filled,
:host([value="2"]) .stars > .star:nth-child(2) > .filled,
:host([value="3"]) .stars > .star:nth-child(2) > .filled,
:host([value="4"]) .stars > .star:nth-child(2) > .filled,
:host([value="5"]) .stars > .star:nth-child(2) > .filled,
:host([value="3"]) .stars > .star:nth-child(3) > .filled,
:host([value="4"]) .stars > .star:nth-child(3) > .filled,
:host([value="5"]) .stars > .star:nth-child(3) > .filled,
:host([value="4"]) .stars > .star:nth-child(4) > .filled,
:host([value="5"]) .stars > .star:nth-child(4) > .filled,
:host([value="5"]) .stars > .star:nth-child(5) > .filled {
	display: block;
}

:host([value="1"]) .stars > .star:nth-child(1) > .empty,
:host([value="2"]) .stars > .star:nth-child(1) > .empty,
:host([value="3"]) .stars > .star:nth-child(1) > .empty,
:host([value="4"]) .stars > .star:nth-child(1) > .empty,
:host([value="5"]) .stars > .star:nth-child(1) > .empty,
:host([value="2"]) .stars > .star:nth-child(2) > .empty,
:host([value="3"]) .stars > .star:nth-child(2) > .empty,
:host([value="4"]) .stars > .star:nth-child(2) > .empty,
:host([value="5"]) .stars > .star:nth-child(2) > .empty,
:host([value="3"]) .stars > .star:nth-child(3) > .empty,
:host([value="4"]) .stars > .star:nth-child(3) > .empty,
:host([value="5"]) .stars > .star:nth-child(3) > .empty,
:host([value="4"]) .stars > .star:nth-child(4) > .empty,
:host([value="5"]) .stars > .star:nth-child(4) > .empty,
:host([value="5"]) .stars > .star:nth-child(5) > .empty {
	display: none;
}
```

> **Talk about :host and :host()**

## REFRESH

> **Styling!**

## EDIT RATING-STARS.JS

> **Add Interaction for Clicking**

> **Click a star, that because new rating**

> **Click again, no rating**

> **Just basic JavaScript/DOM stuff. Nothing magical here.**

```
onEventAt(".stars > .star","click",(event,selected,element,content)=>{
	let parent = selected.parentElement;
	let index = [...parent.children].indexOf(selected);
	let value = "" + (index + 1);

	if (element.getAttribute("value")===value) value = "0";

	element.setAttribute("value",value);
});
```

## REFRESH

> **Everything works.**

> **More we could do...**
> - Disable attribute
> - Required attribute
> - value property
> - etc

## BUNDLE

> **Demonstrate Bundler**

```
zeph bundle rating-stars.js rs.js
```

> **Inspect rs.js**

## BACK TO SLIDES
