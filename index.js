'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Loading = function Loading(_ref) {
  var className = _ref.className;
  var _ref$loadingText = _ref.loadingText;
  var loadingText = _ref$loadingText === undefined ? '...' : _ref$loadingText;

  var extraClassNames = className ? className.split(/\s+/g) : [];
  return _react2['default'].createElement(
    'span',
    { className: ['loading'].concat(extraClassNames).join(' ') },
    loadingText
  );
};

exports['default'] = Loading;
module.exports = exports['default'];