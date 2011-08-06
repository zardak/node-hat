var hat = require('../');
var assert = require('assert');

exports.rack = function () {
    var rack = hat.rack(4);
    var seen = {};
    for (var i = 0; i < 8; i++) {
        var id = rack();
        assert.ok(!seen[id], 'seen this id');
        seen[id] = true;
        
        assert.ok(id.match(/^[0-9a-f]$/));
    }
    
    assert.throws(function () {
        for (var i = 0; i < 10; i++) rack()
    });
};

exports.expandBy = function () {
    var rack = hat.rack(4, 16, 4);
    var seen = {};
    
    for (var i = 0; i < 8; i++) {
        var id = rack();
        assert.ok(!seen[id], 'seen this id');
        seen[id] = true;
        assert.ok(id.match(/^[0-9a-f]$/));
    }
    
    for (var i = 0; i < 8; i++) {
        var id = rack();
        assert.ok(!seen[id], 'seen this id');
        seen[id] = true;
        assert.ok(id.match(/^[0-9a-f]{1,2}$/));
    }
    
    for (var i = 0; i < 8; i++) {
        var id = rack();
        assert.ok(!seen[id], 'seen this id');
        seen[id] = true;
        assert.ok(id.match(/^[0-9a-f]{2}$/));
    }
};
