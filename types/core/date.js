"use strict";
exports.__esModule = true;
exports.d_format_YMD = exports.d_format = exports.d_time = void 0;
function d_time() {
    return +Date.now();
}
exports.d_time = d_time;
function d_format(value) {
    if (!value) {
        value = d_time();
    }
    var date = new Date(value);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}
exports.d_format = d_format;
function d_format_YMD(value) {
    return d_format(value).substring(0, 10);
}
exports.d_format_YMD = d_format_YMD;
