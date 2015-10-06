var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var jsonquery = require('json-query');
var memes = require('../public/images/meme');


var fileLocation = path.join(__dirname, '../public/images/meme.json');

console.log(fileLocation);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meme Generator' });
});

router.get('/memes', function(request, response) {
    response.render('memes',{placedMemes: memes});
});

router.get('/getMemes', function(request, response){
   response.json(memes);
});

module.exports = router;


