'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/users/signin', controllers.users.signIn);

module.exports = router;