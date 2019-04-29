"use strict";

const config = require("@awesomeeng/awesome-config");

// Initialize our configuration.
config().init();

// Add zero or more configuration objects or files:
config().add("./AwesomeConfig1.json");
config().add({
	user: {
		name: "Bob"
	}
});

// Once all our config is added, we start AwesomeConfig.
config().start();

// Once started we can access the properties of our config from the config object:
console .log("Hello there "+config.user.name);
console .log("Greetings from "+config.user.location);
