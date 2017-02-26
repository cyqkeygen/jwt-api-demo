'use strict';

function test(req, res, next) {
    res.json({
        test: 123
    });
}

function signIn(req, res, next) {

}

function signOut(req, res, next) {

}

function resetPassword(req, res, next) {

}

module.exports = {
    test,
    signIn,
    signOut,
    resetPassword
}