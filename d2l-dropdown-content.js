/**
`d2l-dropdown-content`
Polymer-based web component for dropdown generic content.

@demo demo/dropdown.html Generic Content
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-dropdown-content-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import ResizeObserver from 'resize-observer-polyfill/dist/ResizeObserver.es.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-content">
	<template strip-whitespace="">
		<style include="d2l-dropdown-content-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
			:host {}
		</style>
		<div class="d2l-dropdown-content-position">
			<div class="d2l-dropdown-content-width">
				<div class="d2l-dropdown-content-top"></div>
				<div class="d2l-dropdown-content-container">
					<div class="d2l-dropdown-content-inner">
					<template is="dom-if" if="[[renderContent]]">
						<slot></slot>
					</template>
					</div>
				</div>
				<div class="d2l-dropdown-content-bottom"></div>
			</div>
		</div>
		<div class="d2l-dropdown-content-pointer">
			<div></div>
		</div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-content',

	behaviors: [
		D2L.PolymerBehaviors.DropdownContentBehavior
	],

	ready: function() {
		this._handleResize = this._handleResize.bind(this);
	},

	attached: function() {
		var content = dom(this.root).querySelector('.d2l-dropdown-content-inner');
		this._resizeObserver = new ResizeObserver(this._handleResize);
		this._resizeObserver.observe(content);

	},

	detached: function() {
		var content = dom(this.root).querySelector('.d2l-dropdown-content-inner');
		if (this._resizeObserver) this._resizeObserver.unobserve(content);
	},

	_handleResize: function(e) {
		if (!this.opened || e.length === 0) return;
		var rect = e[0].contentRect;
		if (!this.noPadding) {
			rect = {height: rect.height + 40, width: rect.width + 40};
		}
		this.__position(false, rect);
	}

});
