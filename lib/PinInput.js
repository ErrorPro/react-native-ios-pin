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

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PinCode = function (_Component) {
  _inherits(PinCode, _Component);

  function PinCode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PinCode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PinCode.__proto__ || Object.getPrototypeOf(PinCode)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      letters: [],
      animatedValue: new _reactNative.Animated.Value(0)
    }, _this.clearInput = function () {
      _this.input.clear();
      _this.handleChange('');
    }, _this.handleChange = function (code) {
      var _this$props = _this.props,
          pinCode = _this$props.pinCode,
          onEndEnter = _this$props.onEndEnter,
          length = _this$props.length;


      _this.setState({ letters: code.split('') }, function () {
        if (length === code.length) {
          if (pinCode && pinCode !== code) {
            _reactNative.Animated.timing(_this.state.animatedValue, {
              toValue: 1,
              duration: 500
            }).start();
          }
          // set a timeout to let the animations end.
          setTimeout(function () {
            return onEndEnter(code, _this.clearInput);
          }, 500);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PinCode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.input.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          letters = _state.letters,
          animatedValue = _state.animatedValue;
      var length = this.props.length;


      var interpolated = animatedValue.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, -40, 30, -20, 10, 0]
      });
      var animatedStyles = {
        transform: [{ translateX: interpolated }]
      };

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _reactNative.Animated.View,
          { style: [_styles2.default.container, animatedStyles] },
          new Array(length).fill().map(function (_, i) {
            return i;
          }).map(function (idx) {
            return _react2.default.createElement(_Circle2.default, {
              key: idx,
              hasValue: letters[idx]
            });
          })
        ),
        _react2.default.createElement(_reactNative.TextInput, {
          style: _styles2.default.hidden,
          ref: function ref(c) {
            return _this2.input = c;
          },
          maxLength: 8,
          keyboardType: 'numeric',
          onBlur: function onBlur() {
            return _this2.input.focus();
          },
          onChangeText: this.handleChange
        })
      );
    }
  }]);

  return PinCode;
}(_react.Component);

PinCode.propTypes = {
  length: _propTypes2.default.number,
  onEndEnter: _propTypes2.default.func,
  pinCode: _propTypes2.default.string
};
exports.default = PinCode;