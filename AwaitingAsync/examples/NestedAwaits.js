"use strict";

const sleep = function(ms) {
	ms = ms && parseInt(ms) || 0;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},ms);
	});
}

async function HelloWorld() {
	console.log("hello");
	await sleep(1000);
	console.log("world");
};

async function TestIt() {
	console.log(1);
	await HelloWorld();
	console.log(2);
}

TestIt();
