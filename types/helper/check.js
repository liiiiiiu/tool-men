"use strict";
exports.__esModule = true;
var Check = /** @class */ (function () {
    function Check() {
        this.objProto = Object.prototype;
        this.fnToString = this.objProto.toString;
    }
    Check.prototype.getTag = function (value) {
        if (value == null) {
            return value === undefined ? '[object Undefined]' : '[object Null]';
        }
        return this.fnToString.call(value);
    };
    Check.prototype.str = function (value) {
        return typeof value === 'string' || (typeof value === 'object' && !this.nul(value) && this.getTag(value) === '[object String]');
    };
    Check.prototype.num = function (value) {
        return typeof value === 'number' || (typeof value === 'object' && !this.nul(value) && this.getTag(value) === '[object Number]');
    };
    Check.prototype.bool = function (value) {
        return value === true || value === false || (typeof value === 'object' && !this.nul(value) && this.getTag(value) === '[object Boolean]');
    };
    Check.prototype.arr = function (value) {
        return Array.isArray(value);
    };
    Check.prototype.arrLike = function (value) {
        return !this.nul(value) && !this.fun(value) && this.len(value.length);
    };
    Check.prototype.obj = function (value) {
        return typeof value === 'object';
    };
    Check.prototype.plainObj = function (value) {
        return typeof value === 'object' && !this.nul(value) && this.getTag(value) === '[object Object]';
    };
    Check.prototype.objLike = function (value) {
        return typeof value === 'object' && !this.nul(value);
    };
    Check.prototype.symbol = function (value) {
        return typeof value === 'symbol';
    };
    Check.prototype.fun = function (value) {
        return typeof value === 'function';
    };
    Check.prototype.nan = function (value) {
        return value !== value;
    };
    Check.prototype.undef = function (value) {
        return typeof value === 'undefined';
    };
    Check.prototype.nul = function (value) {
        return value === null;
    };
    Check.prototype.len = function (value) {
        return typeof value === 'number' && value > -1 && value % 1 === 0 && value < Number.MAX_SAFE_INTEGER;
    };
    Check.prototype.args = function (value) {
        return this.objLike(value) && this.getTag(value) === '[object Arguments]';
    };
    Check.prototype.err = function (value) {
        if (!this.objLike(value)) {
            return false;
        }
        var tag = this.getTag(value);
        return tag == '[object Error]' || tag == '[object DOMException]' || (typeof value.message === 'string' && typeof value.name === 'string' && !this.plainObj(value));
    };
    return Check;
}());
exports["default"] = Check;
