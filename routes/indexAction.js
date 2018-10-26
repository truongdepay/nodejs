var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index/index', { siteTitle: 'Demo Express', title : '', description: '', content : '' });
});

module.exports = router;