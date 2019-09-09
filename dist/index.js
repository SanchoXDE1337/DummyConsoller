"use strict";

var _getWords = require("./getWords");

var _getWords2 = _interopRequireDefault(_getWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = document.querySelector(".btn");
button.addEventListener("click", function () {
    var str = document.querySelector("input").value;
    if (str !== '') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getWords2.default)(str)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var word = _step.value;

                console.log(word);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        button.disabled = true;
    }
});

var inp = document.querySelector("input");
inp.addEventListener("input", function () {
    button.disabled = false;
});