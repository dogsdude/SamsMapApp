<!--Sam Lindsey, August 26th 2020, Project for Iterative LLC -->

var express = require('express');
var router = express.Router();
var distance = require('google-distance');
var mongo = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/travelDistances';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'MapApp'});
});

//Calls table to just fill data normally
router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        var cursor = db.collection('mapApp').find();
        cursor.forEach(function (doc, err) {
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

//Calls to push data into table
router.post('/insert', function (req, res, next) {
    var item = {
        origin: req.body.origin,
        destination: req.body.destination,
        distance: req.body.distance,
        duration: req.body.duration
    };
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection('mapApp').insertOne(item, function (err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    res.redirect('/');
});


module.exports = router;
