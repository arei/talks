"use strict";

// require AwesomeServer
const AwesomeServer = require("@awesomeeng/awesome-server");

// Instantiate a server
let server = new AwesomeServer();

// add an http server
server.addHTTPServer({
	hostname: "localhost",
	port: 8080
});

// Add some routes
server.route("GET","/test",(path,request,response)=>{
	return response.writeHTML("Hello World!");
});

// Start the server
server.start();
