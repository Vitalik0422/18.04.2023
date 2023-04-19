const express = require('express');
const ejs = require('ejs')
const server = express();
const productRoute = require('./routes/product')

server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname +'/public'))
server.use(express.static(__dirname +'/js'))

server.use('/', productRoute);

server.listen(3003)