'use strict';
const h = require('../helpers');

module.exports = function(){
	let route = {
		'get':{
			'/': function(request, response, next){
					response.render('login');
				},

			'/rooms': function(request, response, next){
					response.render('rooms');
				},

			'/chat': function(request, response, next){
					response.render('chatroom');
				}
		},

		'post':{

		},

		'NA':function(request, response, next){
			response.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	};

	return h.route(route);
};