var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controller/flights')

//all paths start with flights

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//GET /post to create index (all posts)
router.get('/', flightsCtrl.index)

//GET /posts/new to create new posts 
router.get('/new', flightsCtrl.new)

//POST /posts to create a new post
router.post('/', flightsCtrl.create) 


module.exports = router;
