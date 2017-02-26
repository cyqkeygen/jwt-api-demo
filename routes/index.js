'use strict';

const express = require('express');
const router = express.Router();

// include controllers actions
const controllers = require('../controllers');

// routes
router.get('/users/signin', controllers.users.signIn);
router.get('/users/signOut', controllers.users.signOut);
router.get('/users/resetpassword', controllers.users.resetPassword);

module.exports = router;

