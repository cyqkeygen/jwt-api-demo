'use strict';

function signIn(req, res, next) {
    res.json({
        message: 'user sign in page'
    })
}

function signOut(req, res, next) {

}

function resetPassword(req, res, next) {

}

function refreshToken(req, res, next) {

}

module.exports = {
    signIn,
    signOut,
    resetPassword,
    refreshToken
}