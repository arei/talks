"use strict";

const config = require("@awesomeeng/awesome-config");

// Initialize our configuration.
config().init();

// Add zero or more configuration objects or files:
config().add("./AwesomeConfig3.json");

// Once all our config is added, we start AwesomeConfig.
config().start();

// Once started we can access the properties of our config from the config object:
console .log(JSON.stringify(config,null,2));
