"use strict";

const sleep = function(ms,done) {
	ms = ms && parseInt(ms) || 0;
	setTimeout(()=>{
		done();
	},ms);
};

function HelloWorld() {
	console.log("hello");
	sleep(1000,()=>{
		console.log("world");
	});
};

HelloWorld();
