'use strict';
const router = require('express').Router();

let _registerRoute = function(route, method){
	for(let key in route){
		if(typeof route[key] === 'object' && route[key] !== null && !(route[key] instanceof Array)){
			_registerRoute(route[key], key);
		}

		else{
			if(method === 'get'){
				router.get(key, route[key]);
			}

			else if(method === 'post'){
				router.post(key, route[key]);
			}

			else{
				router.use(route['NA']);
			}
		}
	}
};

let route = function(route){
	_registerRoute(route);
	return router;
};

module.exports = {
	route: route
};