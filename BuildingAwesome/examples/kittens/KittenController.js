"use strict";

const Path = require("path");
const FS = require("fs");

const AwesomeServer = require("@awesomeeng/awesome-server");
const Log = require("@awesomeeng/awesome-log");

class KittenController extends AwesomeServer.AbstractController {
	get(path,request,response) {
		if (path==="") return getKittenIds(path,request,response);
		else return getSpecificKitten(path,request,response);
	}
}

const getKittenIds = function getKittenIds(path,request,response) {
	Log.debug("Received request to return Kitten Ids");

	return new Promise((resolve,reject)=>{
		try {
			path = Path.resolve("./images")
			FS.readdir(path,async (err,files)=>{
				if (err) return await response.writeError(500,err);

				files = files.filter((filename)=>{
					return filename.endsWith(".jpg");
				});
				files = files.map((filename)=>{
					return Path.basename(filename,".jpg");
				});
				await response.writeJSON(files);

				resolve();
			});
		}
		catch (ex) {
			return reject(ex);
		}
	});
};

const getSpecificKitten = function getKitten(id,request,response) {
	Log.debug("Received request to return specific Kitten "+id+".");
	return response.serve(200,"image/jpeg",Path.resolve("./images/"+id+".jpg"));
};

module.exports = KittenController;
