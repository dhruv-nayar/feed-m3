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

router.get('/getTestInventory', function(req, res){
  //item name, age (days), category, storage type (fridge, freezer, pantry etc)
  var genericList = [
       {'name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge'},
      {'name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry'}
    ];

  res.json(genericList);
});

// const express = require('express');
// var router = express.Router();
// var path = require('path');
// var scriptName = path.basename(__filename);
//
//
//
// router.get('/getTestInventory', function(req, res){
//
//   //item name, age (days), category, storage type (fridge, freezer, pantry etc)
//   var genericList = [
//        {'name':'eggs', 'age':'14', 'category':'produce', 'storage':'fridge'},
//       {'name':'broccoli', 'age':'14', 'category':'produce', 'storage':'fridge'},
//       {'name':'cheese', 'age':'14', 'category':'produce', 'storage':'pantry'}
//     ];
//
//   res.json(genericList);
// });
//
// module.exports = router();
