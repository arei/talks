
/*
	Generated ZephS component: rating-stars

	ZephJS is copyright 2019, The Awesome Engineering Company
	and is released under the MIT licesne.
 */

import {ZephComponents,html,css,attribute,asset} from "./zeph.min.js";

ZephComponents.define("rating-stars",()=>{
	html("./rating-stars.html");
	css("./rating-stars.css");

	attribute("label","");
	attribute("value","0");

	asset(".stars > .star > .filled","./rating-stars.filled.png")
	asset(".stars > .star > .empty","./rating-stars.empty.png")

	// Place your compnent defintion calls here. See the ZephJS documentation for more information.
});
