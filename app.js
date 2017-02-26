'use strict';

const express = require('express');
const ejs = require('ejs');
const app = express();
const router = require('./routes');
app.use('/api', router);
app.listen(3000);
