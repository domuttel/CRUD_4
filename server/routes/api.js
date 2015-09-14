var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');
// router.get('/', function(req, res, next) {

// });

//GET all Llamas
router.get('/llamas', function(req, res, next) {
  Llama.find(function(err, llamas){
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llamas);
    }
  });
});

//GET a Llama
router.get('/llamas/:id', function(req, res, next) {
  Llama.findById(req.params.id, function(err, llamas){
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llamas);
    }
  });
});

//POST Llamas
router.post('/llamas', function(req, res, next) {
  var newLlama = new Llama ({
    name: req.body.name,
    age: req.body.age,
    spitter: req.body.spitter
  });
  newLlama.save(function(err, llama){
    if (err) {
      res.json({"message": err});
    } else {
      res.json(llama);
    }
  });
});

//PUT (edit) Llama
router.put('/llama/:id', function(req, res, next){
  Llama.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, llama){
    if (err) {
      res.json({'message': err});
    } else {
      res.json(llama);
    }
  });
});

//DELETE Llama
router.delete('/llama/:id', function(req, res, next) {
  Llama.findByIdAndRemove(req.params.id, function(err, llama){
    if (err) {
      res.json({'message': err});
    } else {
      res.json(llama);
    }
  });
});


module.exports = router;
