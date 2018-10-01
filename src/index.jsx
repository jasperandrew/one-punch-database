/**
 * MySQL setup
 */
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'iamroot',
    database: 'OnePunch'
});

try {
    connection.connect();
} catch(e) {
    console.log('donkeh');
    console.log(e);
}

/**
 * Express server setup
 */
const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.listen(3000, () => {
    console.log('[[ Welcome to the One Punch API ]]\n');
});

api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

/**
 * API functions
 */
// api.post('/add', (req, res) => {
//     connection.query(query, values, (error, results) => {
//         var msg = msg = fields.name + ' added to DB';
//         var status = 'Ok';
//         if(error){
//             msg = '[Error] while adding character to DB: ' + error;
//             status = 'Error';
//         }
//         console.log(msg);
//         return res.json({ status: status, msg: msg });
//     });
// });

api.get('/get', (req, res) => {
    console.log('[GET] name=' + req.query.name);
    connection.query('SELECT * FROM characters WHERE name=?', [req.query.name], (error, results) => {
        if(error) return res.json({ error: error });
        res.send(results);
    });
});