
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 6158;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host     : '34.67.195.119',
    user     : 'eric',
    password : '1234',
    database : 'askmequestion'
});
 
// var connection = mysql.createConnection({ 
//     sockePath : '/cloudsql/ultra-concord-258108:us-central1:reporter-trackere', user : 'eric', 
// password : '1234', database : 'askmequestion' });

// connect to database
// connection.connect();
ms.connect();
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var routes = require('./app/routes/approutes'); //importing route
// routes(app); //register the route