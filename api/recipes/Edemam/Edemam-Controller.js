const https = require('https');

//API IDs and Keys
const Edemam = {"ID":"0c0a20a2", "Key":"c9f376d5a90645516dfdc096b140b815"};

module.exports.testEdemamAPI = function testEdemamAPI(originalRes){
	data = "";
	https.get('https://api.edamam.com/search?q=beef,potato&app_id='+Edemam.ID+'&app_key='+Edemam.Key+'&from=0&to=1', (res) => {
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

formatEdemamInputs = function(excludedFoods, includedFoods, numResults){
  var startingRequest = 'https://api.edamam.com/search?';
}

getEdemamCreds = function(){
  return ('app_id='+Edemam.ID+'&app_key='+Edemam.Key);
}
