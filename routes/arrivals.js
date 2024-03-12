var express = require('express');
var router = express.Router();
var arrivalsCtrl = require('../controller/arrivals')

/// POST /posts/:id/comments
router.post('/flights/:id/arrivals', arrivalsCtrl.create)


module.exports = router;
