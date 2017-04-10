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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexView = function (_React$Component) {
	_inherits(IndexView, _React$Component);

	function IndexView() {
		_classCallCheck(this, IndexView);

		return _possibleConstructorReturn(this, (IndexView.__proto__ || Object.getPrototypeOf(IndexView)).apply(this, arguments));
	}

	_createClass(IndexView, [{
		key: 'test',
		value: function test() {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_AutoComplete2.default, {
					value: '',
					options: ['10000（一涛）', '10001（张三）'],
					onValueChange: this.test
				})
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

var _autoComplete = __webpack_require__(113);

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ })

},[235]);