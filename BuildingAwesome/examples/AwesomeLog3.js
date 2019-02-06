"use strict";

const Log = require("@awesomeeng/awesome-log");

// Setup AwesomeLog.
Log.init({
	levels: "access,error,warn,info,debug,silly"
});

// Start AwesomeLog.
Log.start();

// Log something out.
Log.silly("This is an ex-parrot.");

// require some other file
require("./AwesomeLog2.js");

// Stop AwesomeLog once we are done.
Log.stop();
