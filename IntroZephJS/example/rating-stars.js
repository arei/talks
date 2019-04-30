
/*
	Generated ZephS component: rating-stars

	ZephJS is copyright 2019, The Awesome Engineering Company
	and is released under the MIT licesne.
 */

import {ZephComponents,html,css,asset,attribute,bind,onEventAt} from "./Zeph.js";

ZephComponents.define("rating-stars",()=>{
	html("./rating-stars.html");
	css("./rating-stars.css");

	attribute("label","");
	attribute("value","0");

	bind("@label",".label","$");

	asset(".stars > .star > .filled","./rating-stars.filled.png")
	asset(".stars > .star > .empty","./rating-stars.empty.png")

	onEventAt(".stars > .star","click",(event,selected,element,content)=>{
		let parent = selected.parentElement;
		let index = [...parent.children].indexOf(selected);
		let value = "" + (index + 1);

		console.log("click",value,element.getAttribute("value"))
		if (element.getAttribute("value")===value) value = "0";

		element.setAttribute("value",value);
	});

});
