var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'BOT-E SYST3M | BASE', content: 'BOT PROVIDER ON ANY PLATFORM' });
});

module.exports = router;