'use strict';
const express = require('express');
const app = express();
const chat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', chat.router);

app.listen(app.get('port'), function(){
	console.log("Port ", 3000, ' is running');
});

