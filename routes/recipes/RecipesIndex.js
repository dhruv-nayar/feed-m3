let router = require('express').Router();
var EdemamController = require('./RecipeControllers/EdemamController.js');
//link to the Edemam subrouter
//router.use('/Edemam/*', Edemam);
console.log(EdemamController.successMessage);



router.use('/EdemamTest', function(req, res){
    EdemamController.testEdemamAPI(res);
});

 router.get("/*", function(req, res){
     res.json('no specific Edemam Controller functionality identified');
 });

module.exports = router;
