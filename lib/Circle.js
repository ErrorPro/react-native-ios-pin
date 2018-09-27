'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Circle.__proto__ || Object.getPrototypeOf(Circle)).call.apply(_ref, [this].concat(args))), _this), _this.value = new _reactNative.Animated.Value(0), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Circle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasValue = nextProps.hasValue ? 1 : 0;

      _reactNative.Animated.timing(this.value, {
        toValue: hasValue,
        duration: hasValue ? 0 : 300
      }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style;

      var color = this.value.interpolate({
        inputRange: [0, 1],
        outputRange: ['transparent', '#FFF']
      });

      return _react2.default.createElement(_reactNative.Animated.View, { style: [_styles2.default.dot, { backgroundColor: color }, style] });
    }
  }]);

  return Circle;
}(_react.Component);

Circle.propTypes = {
  hasValue: _propTypes2.default.string,
  style: _propTypes2.default.number
};
exports.default = Circle;