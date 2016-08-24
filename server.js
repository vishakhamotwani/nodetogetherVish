var express = require('express');
var app = express();

var rules = require('./app');
app.use(rules);

var port = "8080";
var host = "0.0.0.0";

app.listen(port, host);

console.log("What do you think happened?");
