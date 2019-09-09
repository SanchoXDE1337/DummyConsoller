'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var stringNormalizer = function stringNormalizer(str) {
    var normStr = '';
    var result = '';

    normStr = str.trim();
    for (var i = 0; i < normStr.length; i++) {
        if (normStr[i] !== ' ') {
            result = '' + result + normStr[i];
        } else if (normStr[i + 1] !== ' ') {
            result = result + ' ';
        }
    }
    return result;
};

exports.default = stringNormalizer();