"use strict";

/**
 * MySQL setup
 */
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'iamroot',
  database: 'OnePunch'
});

try {
  connection.connect();
} catch (e) {
  console.log('donkeh');
  console.log(e);
}
/**
 * Express server setup
 */


var express = require('express');

var bodyParser = require('body-parser');

var api = express();
api.listen(3000, function () {
  console.log('[[ Welcome to the One Punch API ]]\n');
});
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());
/**
 * API functions
 */

api.post('/add', function (req, res) {
  connection.query(query, values, function (error, results) {
    var msg = msg = fields.name + ' added to DB';
    var status = 'Ok';

    if (error) {
      msg = '[Error] while adding character to DB: ' + error;
      status = 'Error';
    }

    console.log(msg);
    return res.json({
      status: status,
      msg: msg
    });
  });
});
api.get('/get', function (req, res) {
  console.log('[GET] name=' + req.query.name);
  connection.query('SELECT * FROM characters WHERE name=?', [req.query.name], function (error, results) {
    if (error) return res.json({
      error: error
    });
    res.send(results);
  });
});