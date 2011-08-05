module.exports = function (bits, base) {
    if (!base) base = 16;
    var xs = [];
    
    for (var i = 0; i < bits; i += 32) {
        var b = Math.min(32, bits - xs.length * 32);
        var n = Math.random() * Math.pow(2,b);
        var s = Math.floor(n).toString(base);
        xs.push(s);
    }
    
    var res = xs.join('');
    var digits = Math.ceil(Math.log(Math.pow(2,bits)) / Math.log(base));
    var extra = digits - res.length;
    return Array(extra + 1).join('0') + res;
};
