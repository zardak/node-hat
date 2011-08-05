var kid = require('../');
var assert = require('assert');

function digits (bits, base) {
    return Math.ceil(
        Math.log(parseInt(Array(bits + 1).join('1'), 2)
    ) / Math.log(base));
}

exports.lengths = function () {
    for (var i = 0; i < 10; i++) {
        assert.equal(kid(4).length, 1);
    }
    
    for (var i = 0; i < 10; i++) {
        assert.equal(kid(3).length, 1);
    }
    
    (function () {
        var d = digits(32, 16);
        for (var i = 0; i < 10; i++) {
            assert.equal(kid(32, 16).length, d);
            assert.equal(kid(33, 16).length, d + 1);
        }
    })();
};

exports.range = function () {
    for (var base = 2; base < 32; base++) {
        for (var bits = 0; bits < 256; bits++) {
            for (var k = 0; k < 10; k++) {
                var id = parseInt(kid(bits, base), base);
                assert.ok(id >= 0);
                assert.ok(id < Math.pow(2, bits));
            }
        }
    }
};
