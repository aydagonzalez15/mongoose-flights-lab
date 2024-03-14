
var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controller/tickets')


//GET	/posts/:id/comments	Read all comments for a post	No payload

//GET		/posts/:id/comments/new	Return view (form) to add a new post	new	No
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// router.post('/tickets', ticketsCtrl.create )

// POST	/posts/:id/comments	Create a comment for a post (1:M)	Needs Payload
router. post('/flights/:id/tickets', ticketsCtrl.create)

module.exports = router;


