/*var assert = require('chai').assert;
var render = require('../src/lib/render.js');*/

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('should', function () {
            assert.equal(4,4, 'ok');
        });
        it('should', function () {
            assert.equal(render(), 455);
        })
    });
});