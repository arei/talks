"use strict";

function Promise(f) {
	let resolved = false;
	let rejected = false;
	let value = undefined;
	let thens = [];
	let catchs = [];

	this.then = function(f) {
		if (resolved) {
			setImmediate(f,value);
			return;
		}
		f && f instanceof Function ? thens.push(f) : null;
	}

	this.catch = function(f) {
		if (rejected) {
			setImmediate(f,value);
			return;
		}
		f && f instanceof Function ? catchs.push(f) : null;
	}

	let resolve = function(val) {
		value = val;
		resolved = true;

		thens.forEach(function(f){
			setImmediate(f,value);
		});
		thens = null;
	};

	let reject = function(err) {
		value = err;
		rejected = true;

		catchs.forEach(function(f){
			setImmediate(f,value);
		});
		catchs = null;
	};

	f(resolve,reject);
};

let p = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve("hello world!");
	},5000);
});
p.then(function(value){
	console.log(value);
});
