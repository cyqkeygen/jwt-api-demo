'use strict';

function authenticate(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {

    } else {
        res.status(401).json({
            code: 401,
            result: 'failure',
            message: 'No token provided'
        })
    }
}