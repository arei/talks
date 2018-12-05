"use strict";

const throwSomething = function() {
	return new Promise((resolve,reject)=>{
		reject(new Error("something"));
	});
};

async function TestIt() {
	await throwSomething(1000);
};

TestIt();
