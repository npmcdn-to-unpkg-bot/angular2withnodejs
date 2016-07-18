var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.render('index');
   
});


router.get('/message', function(req, res, next) {
  var responseString='Nitin';
  res.send(responseString);
});

router.post('/message', function(req, res, next) {
  
  console.log("nitin post "+req.body.id+" "+req.body.name);
  res.send(req.body.name);
});





module.exports = router;
