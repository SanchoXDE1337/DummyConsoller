'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringNormalizer = require('./stringNormalizer');

var _stringNormalizer2 = _interopRequireDefault(_stringNormalizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getWords);

function getWords(str) {
    var normStr, result, i;
    return regeneratorRuntime.wrap(function getWords$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    normStr = (0, _stringNormalizer2.default)(str);
                    result = '';
                    i = 0;

                case 3:
                    if (!(i < normStr.length)) {
                        _context.next = 14;
                        break;
                    }

                    if (!(normStr[i] !== ' ')) {
                        _context.next = 8;
                        break;
                    }

                    result = '' + result + normStr[i];
                    _context.next = 11;
                    break;

                case 8:
                    _context.next = 10;
                    return result;

                case 10:
                    result = '';

                case 11:
                    i++;
                    _context.next = 3;
                    break;

                case 14:
                    _context.next = 16;
                    return result;

                case 16:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

exports.default = getWords();