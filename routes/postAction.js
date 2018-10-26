var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var app = express();
// Add this line below
//app.use(bodyParser.urlencoded({ extended: false }))

//app.use(bodyParser.json());

app.post('/', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var content = req.body.content;
    res.render('index/index', { siteTitle : 'Admin', title : title, description : description, content : content });
});

module.exports = app;