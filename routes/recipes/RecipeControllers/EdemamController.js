var router = require('express').Router();

router.use('/baseEdemamCall', function(req, res, next){
	callEdemamAPI([''],[''],res);
});

router.get('/*', function(req, res, next){
	res.json('no edemam APIs found');
});

module.exports = router;
module.exports.successMessage = 'Successfully connected EdemamPulls.js';

const https = require('https');

//API IDs and Keys
const Edemam = {"ID":"0c0a20a2", "Key":"c9f376d5a90645516dfdc096b140b815"};



//this will be the default function that we will call the EdemamAPI
//requiredFoods should be an array of strings that you want to include in the Edemam call
//excludedFoods should be an array of strings for foods that you want excluded from the Edemam call
module.exports.testEdemamAPI = function testEdemamAPI(originalRes){
	data = "";
	https.get('https://api.edamam.com/search?q=chicken&app_id='+Edemam.ID+'&app_key='+Edemam.Key+'&from=0&to=1', (res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers: ', res.headers);


			//appends the buffering data responses to an overall data object
			res.on('data', (d) =>{
				data += d;
			});

			//once the response is done buffering; respond with the aggregated data object
			res.on('end', function(){
				originalRes.json(JSON.parse(data).hits);
			})

		}).on('error',(e) => {
			console.error(e);
			return e;
	});
}
