"use strict";
exports.__esModule = true;
exports.to_local_pinyin = exports.to_null = exports.to_undefined = exports.to_symbol = exports.to_array = exports.to_boolean = exports.to_local_cent = exports.to_float = exports.to_integer = exports.to_number = exports.to_string = void 0;
var big_js_1 = require("big.js");
var check_1 = require("../helper/check");
var origin_1 = require("../helper/origin");
var chinese2py_1 = require("../helper/chinese2py");
var check = new check_1["default"]();
function to_string(value) {
    if (check.symbol(value)) {
        value = value.description || '';
    }
    return (value + '').toString() + '';
}
exports.to_string = to_string;
function to_number(value) {
    var newValue = +(0, origin_1["default"])(value);
    return !check.nan(newValue) ? newValue : 0;
}
exports.to_number = to_number;
function to_integer(value, round) {
    if (round === void 0) { round = false; }
    var newValue = to_number(value);
    return !round ? parseInt(newValue + '') : Math.round(newValue);
}
exports.to_integer = to_integer;
function to_float(value, decimal, round) {
    if (decimal === void 0) { decimal = 2; }
    if (round === void 0) { round = false; }
    var newValue = to_number(value);
    if (round) {
        return (+newValue).toFixed(decimal);
    }
    if (decimal > 2)
        decimal = 2;
    if (decimal < 1)
        decimal = 1;
    var strValue = newValue + '';
    var index = strValue.indexOf('.');
    if (index > -1) {
        strValue = strValue.substring(0, decimal + index + 1);
    }
    else {
        strValue += (decimal === 2 ? '.00' : '.0');
    }
    return strValue;
}
exports.to_float = to_float;
// only for local
// usual, store `price` field (use `cent`) to database
function to_local_cent(value, round) {
    if (round === void 0) { round = false; }
    var newValue = +to_float(value, 2, round) || 0;
    return parseInt((0, big_js_1["default"])(newValue).times(100) + '') || 0;
}
exports.to_local_cent = to_local_cent;
function to_boolean(value) {
    return !!value;
}
exports.to_boolean = to_boolean;
function to_array(value) {
    if (check.arr(value)) {
        return value;
    }
    if (check.str(value) && value.indexOf(',') > -1) {
        return value.split(',');
    }
    return [value];
}
exports.to_array = to_array;
function to_symbol(value) {
    var newValue = '';
    if (!check.str(value) || !check.num(value)) {
        newValue = to_string(value);
    }
    return Symbol(newValue || (value + ''));
}
exports.to_symbol = to_symbol;
function to_undefined() {
    return undefined;
}
exports.to_undefined = to_undefined;
function to_null() {
    return null;
}
exports.to_null = to_null;
// only for local
function to_local_pinyin(value) {
    var newValue = to_string(value);
    return (0, chinese2py_1["default"])(newValue) || [];
}
exports.to_local_pinyin = to_local_pinyin;
