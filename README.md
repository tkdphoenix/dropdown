**Looking for SASS-based `vui-dropdown`?** It's [over here](https://github.com/Brightspace/valence-ui-dropdown/tree/sass).

# d2l-dropdown
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for dropdown/flyouts.

## Installation

`d2l-dropdown` can be installed from [Bower][bower-url]:
```shell
bower install d2l-dropdown
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-dropdown.html`:

### Dropdown

`d2l-dropdown` is a generic web component container that is positioned on the page and can be opened and closed.

#### HTML

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-dropdown/d2l-dropdown.html">
</head>
```

Include the `d2l-dropdown` element on your page, and provide a `target-id` where the dropdown should open:

```html
<body>
	...
	<button id="my-opener">Open it!</button>
	<d2l-dropdown id="dropdown" [no-auto-close] [no-auto-focus] [no-pointer] [target-id="my-opener"]>
		your content
	</d2l-dropdown>
</body>
```

#### Methods

```javascript
// open with open method (target to position dropdown; opener to set focus when closing via [Esc])
dropdown.open(target, opener);

// open with attribute (requires setting target-id attribute)
dropdown.setAttribute('opened');

// close with close method
dropdown.close();

// close with attribute
dropdown.removeAttribute('opened');
```

#### Events

The `d2l-dropdown` component fires events when opened or closed.

```javascript
// triggered when dropdown opened
view.addEventListener('open', () => { ... });

// triggered when dropdown closed
view.addEventListener('close', () => { ... });
```

### Dropdown-Menu

`d2l-dropdown-menu` component simplifies focus management and styling when using `d2l-dropdown` with `d2l-menu` as content.  It is opened and closed with the same methods as `d2l-dropdown`, and supports the same options.

#### HTML

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-dropdown/d2l-dropdown-menu.html">
</head>
```

```html
<d2l-dropdown-menu id="dropdown" style="max-width: 40rem; width: 300px;">
	<d2l-menu label="...">
		...
	</d2l-menu>
</d2l-dropdown-menu>
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-dropdown
[bower-image]: https://img.shields.io/bower/v/d2l-dropdown.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-dropdown-ui
[ci-image]: https://travis-ci.org/Brightspace/d2l-dropdown-ui.svg?branch=master
