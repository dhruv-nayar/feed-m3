const express = require('express');
var router = express.Router();
var path = require('path');
var scriptName = path.basename(__filename);

module.exports = router;

router.get('/getList', (req,res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});


//returns a sample inventory list for UI testing purposes
router.get('/getTestInventory', function(req, res){
  //item name, age (days), category, storage type (fridge, freezer, pantry etc)
  var genericList = [
       {'name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry'}
    ];

  res.json(genericList);
});

//post items into inventory; sends a success or failure confirmation
router.post('/postTestInventory', function(req, res){
  res.json('success!');
});

const {Client} = require('pg');
// const pool = new Pool({
//   database: 'api'
// });



if(__dirname.includes("Desktop")){
	console.log('running locally');
	client = new Client({
	  database: process.env.DATABASE
	});
}

if(!client)
	client = new Client({
	connectionString: process.env.DATABASE_URL
	// || 'd94f4516d8u5mu'
	});

console.log(require.main.filename);

client.connect();
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'dhruvnayar',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// });

router.get('/testPostgres', function(req, res){

  client.query('SELECT * FROM Users').then(function(response){
    //console.log(response.rows);
    res.json(response.rows);
  }).catch(function(error){
    res.json(error);
  });
});

// client.connect();
// client.query('SELECT * FROM Users').then(function(response){
//   console.log(response.rows);
//   client.end();
//   //res.json(response.rows);
// }).catch(function(error){
//   client.end();
//   throw error;
// });



// (response, error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   });


// const { Client } = require('pg');
//
//
// const client = new Client();
//
// //establish database connection
// client.connect()
// .then(() => console.log('connected'))
//   .catch(err => console.error('connection error', err.stack))
//
// //query the database
// client.query('SELECT * FROM Users;')
// .then((res) => console.log(res))
//   .catch(err => console.error('connection error', err.stack))
//
// //close database connection
// client.end();

// client.connect().catch(function(err){
//   throw (err)
// });;
//
// client.query('SELECT t* FROM Users;').then(function(res){
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
// }).catch(function(err){
//   throw (err)
// });
//
// client.end();



// , (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// }).catch(function(error){
//   throw (error)
// });
