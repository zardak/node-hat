var exports = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits <= 0) return '0';
    
    for (var step = base * 2; step < 32; step *= 2);
    
    var bins = exports.generateBits(bits);
    var res = '';
    for (var i = 0; i < base; i += step) {
        var b = bins.slice(i, i + step);
        var n = Math.ceil(Math.log(Math.pow(2, b.length)) / Math.log(base));
        var s = parseInt(b, 2).toString(base);
        res = Array(n - s.length + 1).join('0') + s + res;
    }
    
    return res;
};

exports.generateBits = function (bits) {
    var bin = '';
    for (var i = 0; i < bits; i += 32) {
        var b = Math.min(32, bits - i);
        var n = Math.random() * Math.pow(2,b);
        var s = Math.floor(n).toString(2);
        var m = Math.min(32, bits - i);
        bin += Array(m + 1 - s.length).join('0') + s;
    }
    return bin;
};
