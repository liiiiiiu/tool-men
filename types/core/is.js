"use strict";
exports.__esModule = true;
exports.is_url = exports.is_email = exports.is_local_mobilephone = exports.is_leap_year = exports.is_error = exports.is_arguments = exports.is_length = exports.is_null = exports.is_undefined = exports.is_NaN = exports.is_function = exports.is_symbol = exports.is_object_like = exports.is_plain_object = exports.is_object = exports.is_array_like = exports.is_array = exports.is_boolean = exports.is_positive_float = exports.is_float = exports.is_positive_integer = exports.is_integer = exports.is_number = exports.is_string = void 0;
var check_1 = require("../helper/check");
var check = new check_1["default"]();
var rint = /^-?\d+$/;
var rposInt = /^\d+$/;
var rdecimal = /^\d{1,10}([.]\d{2}){1}$/;
var rposDecimal = /^\d+(\.\d{0,2})?$/;
var rmobilephone = /^1[3456789][0-9]{9}$/;
var remial = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
var rurl = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/;
function is_string(value) {
    return check.str(value);
}
exports.is_string = is_string;
function is_number(value) {
    return check.num(value);
}
exports.is_number = is_number;
function is_integer(value) {
    return check.num(value) && rint.test(value + '');
}
exports.is_integer = is_integer;
function is_positive_integer(value) {
    return check.num(value) && rposInt.test(value + '');
}
exports.is_positive_integer = is_positive_integer;
function is_float(value) {
    return check.num(value) && rdecimal.test(value + '');
}
exports.is_float = is_float;
function is_positive_float(value) {
    return check.num(value) && rposDecimal.test(value + '');
}
exports.is_positive_float = is_positive_float;
function is_boolean(value) {
    return check.bool(value);
}
exports.is_boolean = is_boolean;
function is_array(value) {
    return check.arr(value);
}
exports.is_array = is_array;
function is_array_like(value) {
    return check.arrLike(value);
}
exports.is_array_like = is_array_like;
function is_object(value) {
    return check.obj(value);
}
exports.is_object = is_object;
function is_plain_object(value) {
    return check.plainObj(value);
}
exports.is_plain_object = is_plain_object;
function is_object_like(value) {
    return check.objLike(value);
}
exports.is_object_like = is_object_like;
function is_symbol(value) {
    return check.symbol(value);
}
exports.is_symbol = is_symbol;
function is_function(value) {
    return check.fun(value);
}
exports.is_function = is_function;
function is_NaN(value) {
    return check.nan(value);
}
exports.is_NaN = is_NaN;
function is_undefined(value) {
    return check.undef(value);
}
exports.is_undefined = is_undefined;
function is_null(value) {
    return check.nul(value);
}
exports.is_null = is_null;
function is_length(value) {
    return check.len(value);
}
exports.is_length = is_length;
function is_arguments(value) {
    return check.args(value);
}
exports.is_arguments = is_arguments;
function is_error(value) {
    return check.err(value);
}
exports.is_error = is_error;
function is_leap_year(value) {
    if (!check.num(value)) {
        return false;
    }
    return ((value % 4 === 0) && (value % 100 !== 0)) || (value % 400 === 0);
}
exports.is_leap_year = is_leap_year;
// only for local
function is_local_mobilephone(value) {
    return rmobilephone.test(value + '');
}
exports.is_local_mobilephone = is_local_mobilephone;
function is_email(value) {
    if (!check.str(value)) {
        return false;
    }
    return remial.test(value + '');
}
exports.is_email = is_email;
function is_url(value) {
    if (!check.str(value)) {
        return false;
    }
    return rurl.test(value + '');
}
exports.is_url = is_url;
