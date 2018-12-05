"use strict";

function square(x) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(x*x);
		},250);
	});
}

function map(a) {
	return a.map((x,i)=>{
		return square(x);
	});
}

function mapWithAwait(a) {
	return a.map(async (x,i)=>{
		return await square(x);
	});
}

function mapPromiseAll(a) {
	return Promise.all(a.map((x,i)=>{
		return square(x);
	}));
}

async function testIt() {
	console.log("map",map([0,1,2,3,4,5,6,7,8,9]));
	console.log("mapWithAwait",mapWithAwait([0,1,2,3,4,5,6,7,8,9]));
	console.log("mapPromiseAll",await mapPromiseAll([0,1,2,3,4,5,6,7,8,9]));
}

testIt();
