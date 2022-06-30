"use strict";
exports.__esModule = true;
exports.gen_uuid = void 0;
function gen_uuid() {
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
        var start_1 = Math.floor(Math.random() * 0x10);
        s[i] = hexDigits.substring(start_1, start_1 + 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    var start = (+s[19] & 0x3) | 0x8;
    s[19] = hexDigits.substring(start, start + 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';
    var uuid = s.join('');
    return uuid;
}
exports.gen_uuid = gen_uuid;
