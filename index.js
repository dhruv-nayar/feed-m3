const express = require('express');
const path = require('path');


const app = express();
let router = express.Router();




// Serve the static files from the React app
app.use('/api', require('./routes'));
app.get('*', (req,res) =>{
 	res.sendFile(path.join(__dirname+'/client/public/index.html'));
 });
// An api endpoint that returns a short list of items
// router.get('/getList', (req,res) => {
// 	var list = ["urbano", "outfittero", "item3"];
// 	res.json(list);
// 	console.log('Sent list of items');
// });
//
// router.get('/baseEdemamCall', (req,res) => {
// 	callEdemamAPI(["chicken"],["salt"], res);
// });
//
//
// // Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
// 	res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
