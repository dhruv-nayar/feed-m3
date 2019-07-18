const express = require('express');
var router = express.Router();
var path = require('path');
var scriptName = path.basename(__filename);

module.exports = router;

var EdemamAPI = require('./Edemam/Edemam-Controller');

router.get('/test', function(req,res,next){
  res.json('Success! Reached '+scriptName);
});

router.get('/testEdemamAPI', function(req,res,next){
  EdemamAPI.testEdemamAPI(res);
});
