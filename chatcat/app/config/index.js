'use strict';

if(process.env.NODE_ENV === 'production'){
	//
	module.exports = {
		host: process.env.host || "",
		dbURI: process.env.dbURI || "",
		sessionSecret: process.env.sessionSecret || ""
	}
}
else{
   //offer development setting and data
   module.exports = require('./development.json');
}