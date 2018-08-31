"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _antd = require("antd");

var _UIComponent = _interopRequireDefault(require("./UIComponent"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  background: #dadada;\n  bottom: 0;\n  width: 100%;\n  padding: 0 20px;\n  line-height: 60px;\n \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: 0 auto;\n  background: #fff;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Containers = _styledComponents.default.div(_templateObject(), function (props) {
  return props.page.width + 'px';
});

var Footer = _styledComponents.default.div(_templateObject2());

var KfstudioPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KfstudioPage, _React$Component);

  function KfstudioPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, KfstudioPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(KfstudioPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      rect: null,
      currentInstance: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragOver", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (e) {
      var page = _this.props.page;
      page.addInstance({
        x: e.pageX - _this.state.rect.x,
        y: e.pageY - _this.state.rect.y,
        type: e.dataTransfer.getData('text/plain')
      });
    });

    return _this;
  }

  _createClass(KfstudioPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_reactDom.default.findDOMNode(this.refs.dom)) this.state.rect = _reactDom.default.findDOMNode(this.refs.dom).getBoundingClientRect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          page = _this$props.page,
          store = _this$props.store,
          onClickComponent = _this$props.onClickComponent;
      return _react.default.createElement(Containers, {
        ref: "dom",
        onDragOver: this.onDragOver,
        onDrop: this.onDrop,
        page: page
      }, _react.default.createElement("div", {
        style: {
          height: page.height,
          width: page.width
        }
      }, page.instances.map(function (i) {
        return _react.default.createElement(_UIComponent.default, {
          onMouseDown: function onMouseDown(i) {
            onClickComponent(i);

            _this2.setState({
              currentInstance: i
            });
          },
          store: store,
          key: i,
          active: _this2.state.currentInstance === i,
          instance: i
        });
      })));
    }
  }]);

  return KfstudioPage;
}(_react.default.Component);

var _default = KfstudioPage;
exports.default = _default;