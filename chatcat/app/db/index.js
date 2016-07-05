'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Log error if there is any
Mongoose.connection.on('error', function(error){
	console.log('MongoDB Error: ', error);
});

module.exports = {
	Mongoose
}