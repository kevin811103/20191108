
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 6158;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host     : '35.67.195.119',
    user     : 'eric',
    password : '1234',
    database : 'askmequestion'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var routes = require('./app/routes/approutes'); //importing route
// routes(app); //register the route