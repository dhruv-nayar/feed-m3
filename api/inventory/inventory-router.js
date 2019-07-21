const express = require('express');
var router = express.Router();
var path = require('path');
var scriptName = path.basename(__filename);
const OktaJwtVerifier = require('@okta/jwt-verifier');


const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-510263.okta.com/oauth2/default',
  clientId: '0oay8z7zujX06wgZR356',
  assertClaims: {
    aud: 'api://default',
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

router.get('/getTestInventory', function(req, res){

  //item name, age (days), category, storage type (fridge, freezer, pantry etc)
  var genericList = [
       {'name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry'}
    ];

  res.json(genericList);
});

module.exports = router();
