"use strict";

const Log = require("@awesomeeng/awesome-log");

// Setup AwesomeLog.
Log.init();

// Start AwesomeLog.
Log.start();

// Log something out.
Log.info("Hello there world.");

// require some other file
require("./AwesomeLog2.js");

// Stop AwesomeLog once we are done.
Log.stop();
