'use stict';

// add dependencies
const http = require('http');
const express = require('express');

const app = express();

// set routes
const router = require('./routes');
app.use('/api', router);

const server = http.createServer(app);

server.listen(3000);