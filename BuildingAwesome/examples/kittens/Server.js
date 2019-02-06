"use strict";

const AwesomeServer = require("@awesomeeng/awesome-server");
const Log = require("@awesomeeng/awesome-log");
const config = require("@awesomeeng/awesome-config");

(async ()=>{
	// startup logging
	Log.init();
	await Log.start();
	Log.debug("Log started.");

	// startup config
	config().init();
	config().add("./config.json");
	await config().start();
	Log.debug("Config started.");

	// startup server
	let server = new AwesomeServer();
	server.addHTTPServer({
		hostname: config.server.hostname,
		port: config.server.port
	});
	server.route("*","*",(path,request,response)=>{
		Log.access("Request from "+request.origin+" to "+request.url.href+".");
	});
	server.route("*","/kittens|/kittens/*","./KittenController.js");
	await server.start();
	Log.debug("Server started.");

	// Log out our success
	Log.debug("Kittens running at "+config.server.url);
})();
