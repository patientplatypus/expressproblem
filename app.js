
"use strict";

console.log('in app.js - SANITY CHECK');

var Sandbox     = require('./lib/Sandbox');
var log         = require('winston');
let fs          = require('fs');
let express     = require('express');
let bodyParser  = require('body-parser');
// let handler     = require('./handler');
let Handle      = require('./Handle');
var cors        = require('cors')

console.log('SANITY CHECK INSIDE APP.JS');

log.level = 'debug';

let app = express();
console.log('value of __dirname', __dirname);
app.use(express.static(__dirname + '/www'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());

// const poolSize = 5
// let mySandbox = new Sandbox({poolSize})

app.use('/handle', Handle);


app.listen(3000, "0.0.0.0", () => {
    log.info(`API Listening on port 3000`);
  });
// log.info("Initializing Sandbox")
//
// mySandbox.createPool( (err) => {
//   if (err) {
//     log.error("Failed to start docker pool");
//     log.error(err);
//     return
//   }
//
//   log.info("Sandbox initialized");
//
//   app.listen(3000, "0.0.0.0", () => {
//     log.info(`API Listening on port 3000`);
//   });
// })
