"use strict";

const sleep = function(ms) {
	ms = ms && parseInt(ms) || 0;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},ms);
	});
};

function HelloWorld() {
	console.log("hello");
	sleep(1000).then(()=>{
		console.log("world");
	});
};

HelloWorld();
