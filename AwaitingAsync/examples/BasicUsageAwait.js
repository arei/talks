"use strict";

const sleep = function(ms) {
	ms = ms && parseInt(ms) || 0;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},ms);
	});
};

async function HelloWorld() {
	console.log("hello");
	await sleep(1000);
	console.log("world");
};

HelloWorld();
