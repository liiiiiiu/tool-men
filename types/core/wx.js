"use strict";
// only for weapp
exports.__esModule = true;
exports.wx_file_info_sync = exports.wx_image_info_sync = exports.wx_window_pixel_ratio = exports.wx_window_height = exports.wx_window_width = exports.wx_promisify = exports.wx_dataset = exports.wx_clone_deep = void 0;
function wx_clone_deep(value) {
    return JSON.parse(JSON.stringify(value));
}
exports.wx_clone_deep = wx_clone_deep;
function wx_dataset(value) {
    var _a, _b;
    return (_b = (_a = value === null || value === void 0 ? void 0 : value.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset) !== null && _b !== void 0 ? _b : null;
}
exports.wx_dataset = wx_dataset;
function wx_promisify(fn) {
    return function (obj) {
        var args = [], len = arguments.length - 1;
        while (len-- > 0) {
            args[len] = arguments[len + 1];
        }
        if (obj === undefined)
            obj = {};
        return new Promise(function (resolve, reject) {
            obj.success = function (res) {
                resolve(res);
            };
            obj.fail = function (err) {
                reject(err);
            };
            fn.apply(null, [obj].concat(args));
        });
    };
}
exports.wx_promisify = wx_promisify;
function wx_window_width() {
    var _a;
    // @ts-ignore
    return parseInt(((_a = wx === null || wx === void 0 ? void 0 : wx.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.windowWidth) || 0);
}
exports.wx_window_width = wx_window_width;
function wx_window_height() {
    var _a;
    // @ts-ignore
    return parseInt(((_a = wx === null || wx === void 0 ? void 0 : wx.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.windowHeight) || 0);
}
exports.wx_window_height = wx_window_height;
function wx_window_pixel_ratio() {
    var _a;
    // @ts-ignore
    return parseInt(((_a = wx === null || wx === void 0 ? void 0 : wx.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.pixelRatio) || 0);
}
exports.wx_window_pixel_ratio = wx_window_pixel_ratio;
function wx_image_info_sync(path) {
    if (!path)
        return;
    // @ts-ignore
    return wx_promisify(wx === null || wx === void 0 ? void 0 : wx.getImageInfo)({ src: path });
}
exports.wx_image_info_sync = wx_image_info_sync;
function wx_file_info_sync(path) {
    if (!path)
        return;
    // @ts-ignore
    return wx_promisify(wx === null || wx === void 0 ? void 0 : wx.getFileInfo)({ filePath: path });
}
exports.wx_file_info_sync = wx_file_info_sync;
