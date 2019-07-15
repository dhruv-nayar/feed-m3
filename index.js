const express = require('express');
const path = require('path');
const https = require('https');

const app = express();


//API IDs and Keys
const Edemam = {"ID":"0c0a20a2", "Key":"c9f376d5a90645516dfdc096b140b815"};

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
	var list = ["urbano", "outfittero", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

app.get('/api/baseEdemamCall', (req,res) => {
	callEdemamAPI(["chicken"],["salt"], res);
});


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);


//this will be the default function that we will call the EdemamAPI
//requiredFoods should be an array of strings that you want to include in the Edemam call
//excludedFoods should be an array of strings for foods that you want excluded from the Edemam call
function callEdemamAPI(requiredFoods, excludedFoods, originalRes){
	data = "";
	https.get('https://api.edamam.com/search?q=chicken&app_id='+Edemam.ID+'&app_key='+Edemam.Key+'&from=0&to=1', (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers: ', res.headers);

			res.on('data', (d) =>{
				data += d;
			});

			res.on('end', function(){
				originalRes.json(JSON.parse(data).hits);
			})

		}).on('error',(e) => {
			console.error(e);
			return e;
	});
}
