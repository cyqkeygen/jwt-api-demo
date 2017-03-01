'use strict';

const chai = require('chai');
const expect = chai.expect
const lib = require('../lib');

describe('module', function() {
    describe('limit', function () {
        it('limit should success', function () {
            expect(lib.limit(10)).to.equal(10);
        });
    });
});
