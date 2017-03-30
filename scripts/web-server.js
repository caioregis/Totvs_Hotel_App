var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var hotels = require('./managementController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));
app.use('/node_modules', express.static( rootPath + '/node_modules'));

app.get('/data/hotels', hotels.getAll);
app.post('/data/hotels/:id', hotels.save);

app.listen(3000, function () {
  console.log('TOTVS app ligado na porta 3000!');
});