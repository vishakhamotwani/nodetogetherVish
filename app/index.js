var express = require('express');
var app = express();

var motivations = require('motivations');

const pickOne = require('pick-one');


app.get("/", function(request, response) {
	response.send(pickOne(motivations));
});

module.exports = app;