var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  console.log("estoy entrando por GET ALL PRODUCTS!");
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log("estoy entrando por GET SINGLE PRODUCT BY ID!");
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {  
  console.log(req.body); 
  console.log("estoy entrando por SAVE PRODUCT!"); 
  Product.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  console.log("estoy entrando por UPDATE PRODUCT!");
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  console.log(req.body);
  console.log("estoy entrando por DELETE PRODUCT!");
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
