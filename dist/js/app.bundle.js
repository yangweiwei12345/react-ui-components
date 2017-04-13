webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AutoComplete = __webpack_require__(112);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Layer = __webpack_require__(113);

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexView = function (_React$Component) {
	_inherits(IndexView, _React$Component);

	function IndexView(props) {
		_classCallCheck(this, IndexView);

		var _this = _possibleConstructorReturn(this, (IndexView.__proto__ || Object.getPrototypeOf(IndexView)).call(this, props));

		_this.state = {
			visible: false,
			animation: 'zoom'
		};
		return _this;
	}

	_createClass(IndexView, [{
		key: 'show',
		value: function show(animation) {
			this.setState({
				animation: animation,
				visible: true
			});
		}
	}, {
		key: 'hide',
		value: function hide() {
			this.setState({
				visible: false
			});
		}
	}, {
		key: 'test',
		value: function test() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var types = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
			var buttons = types.map(function (value, index) {
				var style = {
					animationDelay: index * 100 + 'ms',
					WebkitAnimationDelay: index * 100 + 'ms'
				};

				return _react2.default.createElement(
					'button',
					{ key: index, className: 'btn scale', onClick: _this2.show.bind(_this2, value), style: style },
					value
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_AutoComplete2.default, {
					value: '',
					options: ['10000（一涛）', '10001（张三）'],
					onValueChange: this.test
				}),
				_react2.default.createElement(
					'div',
					{ style: { marginTop: '100px' } },
					_react2.default.createElement(
						'div',
						{ className: 'btn-area' },
						buttons
					),
					_react2.default.createElement(
						_Layer2.default,
						{ visible: this.state.visible,
							onClose: this.hide.bind(this),
							animation: this.state.animation
						},
						_react2.default.createElement(
							'div',
							{ className: 'header' },
							'Layer'
						),
						_react2.default.createElement(
							'div',
							{ className: 'body' },
							'A React modal with animation.'
						),
						_react2.default.createElement(
							'button',
							{ className: 'layer-confirm-btn', onClick: this.hide.bind(this) },
							'ok'
						),
						_react2.default.createElement(
							'button',
							{ className: 'layer-cancel-btn', onClick: this.hide.bind(this) },
							'close'
						)
					)
				)
			);
		}
	}]);

	return IndexView;
}(_react2.default.Component);

exports.default = IndexView;


_reactDom2.default.render(_react2.default.createElement(IndexView, null), document.getElementById('cp-index'));

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _autoComplete = __webpack_require__(114);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = _react2.default.PropTypes;

function getItemValue(item) {
	return item.value || item;
}

var AutoComplete = function (_React$Component) {
	_inherits(AutoComplete, _React$Component);

	function AutoComplete(props) {
		_classCallCheck(this, AutoComplete);

		var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

		_this.state = {
			displayValue: '',
			activeItemIndex: -1,
			value: _this.props.value
		};

		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.handleLeave = _this.handleLeave.bind(_this);
		return _this;
	}

	/*
  * 用户输入、选择列表项的时候重置内部状态(晴空displayName、设置activeItemIndex为-1)，
     * 并通过回调将新的值传递给组件使用者
     */


	_createClass(AutoComplete, [{
		key: 'handleChange',
		value: function handleChange(value) {
			this.setState({
				activeItemIndex: -1,
				displayValue: ''
			});
			this.props.onValueChange(value);
		}

		/*
   * 判断当前按下的键是否为上下方向键或回车键，
   * 如果是上下方向键则根据方向设置当前被选中的列表项；
   * 如果是回车键就并且大分钱有选中状态的李诶包项，则调用handleChange
   */

	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(e) {
			var activeItemIndex = this.state.activeItemIndex;
			var options = this.props.options;


			switch (e.keyCode) {
				//13为回车键的键码
				case 13:
					{
						//判断是否有列表项处于选中状态
						if (activeItemIndex >= 0) {
							//防止按下回车键后自动提交啊表单
							e.preventDefault();
							e.stopPropagation();
							this.handleChange(getItemValue(options[activeItemIndex]));
						}
						break;
					}
				//38为上方向键，40为下方向键
				case 38:
				case 40:
					{
						e.preventDefault();
						//使用moveItem方法对更新或取消选中项
						this.moveItem(e.keyCode === 38 ? 'up' : 'down');
					}
					break;
			}
		}
	}, {
		key: 'moveItem',
		value: function moveItem(direction) {
			var activeItemIndex = this.state.activeItemIndex;
			var options = this.props.options;

			var lastIndex = options.length - 1;
			var newIndex = -1;

			//计算新的activeItemIndex
			if (direction === 'up') {
				if (activeItemIndex === -1) {
					//如果没有选中则选中最后一项
					newIndex = lastIndex;
				} else {
					newIndex = activeItemIndex - 1;
				}
			} else {
				if (activeItemIndex < lastIndex) {
					newIndex = activeItemIndex + 1;
				}
			}

			//获取新的displayValue
			var newDisplayValue = '';
			if (newIndex >= 0) {
				newDisplayValue = getItemValue(options[newIndex]);
			}

			//更新状态
			this.setState({
				displayValue: newDisplayValue,
				activeItemIndex: newIndex
			});
		}
	}, {
		key: 'handleEnter',
		value: function handleEnter(index) {
			var currentItem = this.props.options[index];
			this.setState({
				activeItemIndex: index,
				displayValue: getItemValue(currentItem)
			});
			console.log(currentItem);
		}
	}, {
		key: 'handleLeave',
		value: function handleLeave() {
			this.setState({
				activeItemIndex: -1,
				displayValue: ''
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    displayValue = _state.displayValue,
			    activeItemIndex = _state.activeItemIndex;
			var _props = this.props,
			    value = _props.value,
			    options = _props.options;

			console.log(this.props);

			return _react2.default.createElement(
				'div',
				{ className: 'wrapper' },
				_react2.default.createElement('input', {
					value: this.state.value,
					onChange: function onChange(e) {
						return _this2.handleChange(e.target.value);
					},
					onKeyDown: this.handleKeyDown
				}),
				options.length > 0 && _react2.default.createElement(
					'ul',
					{ className: 'options', onMouseLeave: this.handleLeave },
					options.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: index,
								className: activeItemIndex === index ? 'active' : '',
								onMouseEnter: function onMouseEnter() {
									return _this2.handleEnter(index);
								},
								onClick: function onClick() {
									return _this2.handleChange(getItemValue(item));
								}
							},
							item.text || item
						);
					})
				)
			);
		}
	}]);

	return AutoComplete;
}(_react2.default.Component);

AutoComplete.propTypes = {
	value: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onValueChange: PropTypes.func.isRequired
};

exports.default = AutoComplete;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _Layer = __webpack_require__(115);

var _Layer2 = _interopRequireDefault(_Layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Layer v1.0.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 杨伟韦
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ========================== */


var Component = _react2.default.Component;

var PropTypes = _react2.default.PropTypes;
var defaultPropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  visible: PropTypes.bool,
  showMask: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  animation: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
  customStyles: PropTypes.object,
  customMaskStyles: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

var defaultProps = {
  width: 400,
  height: 240,
  measure: 'px',
  visible: false,
  showMask: true,
  showCloseButton: true,
  animation: 'zoom',
  duration: 300,
  className: '',
  customStyles: {},
  customMaskStyles: {}
};

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;

var Dialog = function Dialog(props) {
  var className = 'layer-dialog layer-' + props.animation + '-' + props.animationType;
  var CloseButton = props.showCloseButton ? _react2.default.createElement('span', { className: 'layer-close', onClick: props.onClose }) : null;
  var width = props.width,
      height = props.height,
      measure = props.measure,
      duration = props.duration,
      customStyles = props.customStyles;

  var style = {
    width: width + measure,
    height: height + measure,
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  };

  var mergedStyles = Object.assign(style, customStyles);

  return _react2.default.createElement(
    'div',
    { style: mergedStyles, className: className },
    CloseButton,
    props.children
  );
};

var Layer = function (_React$Component) {
  _inherits(Layer, _React$Component);

  function Layer(props) {
    _classCallCheck(this, Layer);

    var _this = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, props));

    _this.animationEnd = _this.animationEnd.bind(_this);
    _this.state = {
      isShow: false,
      animationType: 'leave'
    };
    return _this;
  }

  _createClass(Layer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.visible && nextProps.visible) {
        this.enter();
      } else if (this.props.visible && !nextProps.visible) {
        this.leave();
      }
    }
  }, {
    key: 'enter',
    value: function enter() {
      this.setState({
        isShow: true,
        animationType: 'enter'
      });
    }
  }, {
    key: 'leave',
    value: function leave() {
      var state = isIE9 ? { isShow: false } : { animationType: 'leave' };
      this.setState(state);
    }
  }, {
    key: 'animationEnd',
    value: function animationEnd() {
      if (this.state.animationType === 'leave') {
        this.setState({ isShow: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;

      var mask = props.showMask ? _react2.default.createElement('div', { className: 'layer-mask', style: props.customStyles, onClick: props.onClose }) : null;
      var style = {
        display: state.isShow ? '' : 'none',
        WebkitAnimationDuration: props.duration + 'ms',
        animationDuration: props.duration + 'ms'
      };

      return _react2.default.createElement(
        'div',
        { style: style,
          className: "layer layer-fade-" + state.animationType + ' ' + props.className,
          onAnimationEnd: this.animationEnd },
        mask,
        _react2.default.createElement(
          Dialog,
          _extends({}, props, { animationType: state.animationType }),
          props.children
        )
      );
    }
  }]);

  return Layer;
}(_react2.default.Component);

Layer.PropTypes = defaultPropTypes;
Layer.defaultProps = defaultProps;

exports.default = Layer;

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ })

},[237]);