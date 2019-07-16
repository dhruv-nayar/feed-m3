let router = require('express').Router();


//link to the recipes sub-folder
router.use('/recipes/*', require('./recipes/RecipesIndex.js'));

 router.get('/*', function(req, res){
   res.json('No api endpoint in this subdomain of the routes folder');
 });



module.exports = router;
