"use strict";
var fs = require('fs');
var index_1 = require('./index');
var data = fs.readFileSync('./data/samplerecipe.txt', 'utf-8');
console.log(index_1.ingparser.parse(data));
