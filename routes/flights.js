var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controller/flights')

//all paths start with flights


//GET /post to create index (all posts)
router.get('/', flightsCtrl.index)

//GET /posts/new to create new posts 
router.get('/new', flightsCtrl.new)


//GET 	/posts/:id   --> to show deatils page
router.get('/:id', flightsCtrl.show)

//POST /posts to create a new post
router.post('/', flightsCtrl.create) 


module.exports = router;
