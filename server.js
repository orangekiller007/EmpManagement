const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/employee';

MongoClient.connect(url, function(err, db) {
    var db1 = db.db('employee');

 var cur=db1.collection('master').find();
 cur.each(function(err,doc){console.log(doc)});

 //db.close();

}); 