'use stict';

const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', function(req, res, next) {
    res.send('hello world');
});

server.listen(3000);