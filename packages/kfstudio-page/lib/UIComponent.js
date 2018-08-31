"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./components/Card"));

var _Textbox = _interopRequireDefault(require("./components/Textbox"));

var _reactRnd = require("react-rnd");

var _antd = require("antd");

var _Coder = _interopRequireDefault(require("./components/Coder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UIComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UIComponent, _React$Component);

  function UIComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UIComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      _this.props.store.setActiveInstance(_this.props.instance);

      e.stopPropagation();
    });

    return _this;
  }

  _createClass(UIComponent, [{
    key: "renderComponent",
    value: function renderComponent() {
      var instance = this.props.instance;

      if (instance.type === 'card') {
        return _react.default.createElement(_Card.default, {
          instance: this.props.instance
        });
      } else if (instance.type === 'coder') {
        return _react.default.createElement(_Coder.default, {
          instance: this.props.instance
        });
      } else if (instance.type === 'textbox') {
        return _react.default.createElement(_Textbox.default, {
          instance: this.props.instance
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var _this$props = this.props,
          instance = _this$props.instance,
          store = _this$props.store;
      return _react.default.createElement(_reactRnd.Rnd, (_React$createElement = {
        bounds: "parent",
        dragHandleClassName: "dragHandle",
        style: {
          borderWidth: this.props.active ? 1 : 0,
          borderColor: '#0e0',
          borderStyle: 'solid'
        },
        default: {
          x: instance.x - instance.x % 10,
          y: instance.y - instance.y % 10,
          height: instance.h,
          width: instance.w
        }
      }, _defineProperty(_React$createElement, "bounds", "parent"), _defineProperty(_React$createElement, "dragGrid", [10, 10]), _defineProperty(_React$createElement, "resizeGrid", [10, 10]), _defineProperty(_React$createElement, "onMouseDown", function onMouseDown(e) {
        _this2.props.onMouseDown(instance);

        e.stopPropagation();
      }), _defineProperty(_React$createElement, "onResizeStop", function onResizeStop(e, dir, ref, delta) {
        instance.setWidth(instance.w + delta.width);
        instance.setHeight(instance.h + delta.height);
      }), _defineProperty(_React$createElement, "onDragStop", function onDragStop(e, d) {
        instance.setX(d.x);
        instance.setY(d.y);
      }), _React$createElement), this.renderComponent(), this.props.active && _react.default.createElement("div", {
        style: {
          width: 40,
          height: 20,
          position: 'absolute',
          right: 2,
          top: 2,
          textAlign: 'right',
          letterSpacing: 4
        }
      }, _react.default.createElement(_antd.Icon, {
        className: "dragHandle",
        type: "menu-unfold"
      }), _react.default.createElement(_antd.Tooltip, {
        title: "\u5220\u9664"
      }, _react.default.createElement(_antd.Icon, {
        type: "close",
        onClick: function onClick() {
          _this2.props.page.removeInstance(instance);
        }
      }))));
    }
  }]);

  return UIComponent;
}(_react.default.Component);

var _default = UIComponent;
exports.default = _default;