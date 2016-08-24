var express = require('express');
var app = express();


app.get("/", function(request, response) {
	response.send("I was waiting for you!");
});

module.exports = app;