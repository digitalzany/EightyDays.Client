webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! D:\Code\EightyDays\EightyDays\EightyDays.WebUI/index.js */1);


/***/ },

/***/ 1:
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 159);
	
	var _RouteContainer = __webpack_require__(/*! src/app/main/ui/containers/RouteContainer */ 160);
	
	var _RouteContainer2 = _interopRequireDefault(_RouteContainer);
	
	var _appStore = __webpack_require__(/*! src/app/main/store/appStore */ 245);
	
	var _appStore2 = _interopRequireDefault(_appStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var store = (0, _appStore2["default"])();
	(0, _reactDom.render)(_react2["default"].createElement(_RouteContainer2["default"], { store: store }), document.getElementById('app'));

/***/ },

/***/ 160:
/*!******************************************************!*\
  !*** ./src/app/main/ui/containers/RouteContainer.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 161);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 184);
	
	var _appHistory = __webpack_require__(/*! src/app/main/modules/appHistory */ 240);
	
	var AppHistory = _interopRequireWildcard(_appHistory);
	
	var _AppContainer = __webpack_require__(/*! src/app/main/ui/containers/AppContainer */ 241);
	
	var _AppContainer2 = _interopRequireDefault(_AppContainer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DashboardContainer = function (_Component) {
	    _inherits(DashboardContainer, _Component);
	
	    function DashboardContainer() {
	        _classCallCheck(this, DashboardContainer);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    DashboardContainer.prototype.render = function render() {
	        return _react2["default"].createElement(
	            'div',
	            null,
	            'Dashboard'
	        );
	    };
	
	    return DashboardContainer;
	}(_react.Component);
	
	var RouteContainer = function (_Component2) {
	    _inherits(RouteContainer, _Component2);
	
	    function RouteContainer() {
	        _classCallCheck(this, RouteContainer);
	
	        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	    }
	
	    RouteContainer.prototype.render = function render() {
	        var store = this.props.store;
	
	        var appHistory = AppHistory.getAppHistory();
	        return _react2["default"].createElement(
	            _reactRedux.Provider,
	            { store: store },
	            _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    _reactRouter.Router,
	                    { history: appHistory },
	                    _react2["default"].createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _AppContainer2["default"] },
	                        _react2["default"].createElement(_reactRouter.IndexRoute, { component: DashboardContainer })
	                    )
	                )
	            )
	        );
	    };
	
	    return RouteContainer;
	}(_react.Component);
	
	RouteContainer.propTypes = {
	    store: _react.PropTypes.object.isRequired
	};
	
	exports["default"] = RouteContainer;

/***/ },

/***/ 240:
/*!********************************************!*\
  !*** ./src/app/main/modules/appHistory.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getAppHistory = getAppHistory;
	
	var _reactRouter = __webpack_require__(/*! react-router */ 184);
	
	function getAppHistory() {
	    return _reactRouter.hashHistory;
	}

/***/ },

/***/ 241:
/*!****************************************************!*\
  !*** ./src/app/main/ui/containers/AppContainer.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(/*! redux */ 168);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 161);
	
	var _AppLayout = __webpack_require__(/*! src/app/main/ui/components/AppLayout */ 242);
	
	var _AppLayout2 = _interopRequireDefault(_AppLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var bindToContext = function bindToContext(context) {
	    for (var _len = arguments.length, methods = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        methods[_key - 1] = arguments[_key];
	    }
	
	    methods.forEach(function (method) {
	        return context[method] = context[method].bind(context);
	    });
	};
	
	var AppContainer = function (_Component) {
	    _inherits(AppContainer, _Component);
	
	    function AppContainer(props, context) {
	        _classCallCheck(this, AppContainer);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props, context));
	        //bindToContext(this, 'somemethod');
	    }
	
	    AppContainer.prototype.render = function render() {
	        var children = this.props.children;
	
	        return _react2["default"].createElement(_AppLayout2["default"], { appContent: children });
	    };
	
	    return AppContainer;
	}(_react.Component);
	
	AppContainer.propTypes = {
	    children: _react.PropTypes.node
	};
	
	function mapStateToProps(state) {
	    //TODO
	    return {};
	}
	
	function mapDispatchToProps(dispatch) {
	    //TODO
	    return {};
	}
	
	exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppContainer);

/***/ },

/***/ 242:
/*!*************************************************!*\
  !*** ./src/app/main/ui/components/AppLayout.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HeaderComponent = __webpack_require__(/*! src/app/main/ui/components/HeaderComponent */ 243);
	
	var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppLayout = function (_Component) {
	    _inherits(AppLayout, _Component);
	
	    function AppLayout() {
	        _classCallCheck(this, AppLayout);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    AppLayout.prototype.render = function render() {
	        var appContent = this.props.appContent;
	
	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(_HeaderComponent2["default"], null),
	            _react2["default"].createElement(
	                'div',
	                null,
	                appContent
	            )
	        );
	    };
	
	    return AppLayout;
	}(_react.Component);
	
	AppLayout.propTypes = {
	    appContent: _react.PropTypes.node
	};
	exports["default"] = AppLayout;

/***/ },

/***/ 243:
/*!*******************************************************!*\
  !*** ./src/app/main/ui/components/HeaderComponent.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HeaderComponent = __webpack_require__(/*! ./HeaderComponent.css */ 244);
	
	var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderComponent = function (_Component) {
	    _inherits(HeaderComponent, _Component);
	
	    function HeaderComponent() {
	        _classCallCheck(this, HeaderComponent);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    HeaderComponent.prototype.render = function render() {
	        return _react2["default"].createElement(
	            'nav',
	            { className: 'navbar navbar-default' },
	            _react2["default"].createElement(
	                'div',
	                { className: 'container-fluid' },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'navbar-header' },
	                    _react2["default"].createElement(
	                        'a',
	                        { className: 'navbar-brand ' + _HeaderComponent2["default"].brandName, href: '#' },
	                        'Around the world in Eighty Days'
	                    )
	                ),
	                _react2["default"].createElement(
	                    'ul',
	                    { className: 'nav navbar-nav' },
	                    _react2["default"].createElement(
	                        'li',
	                        { className: 'active' },
	                        _react2["default"].createElement(
	                            'a',
	                            { href: '#' },
	                            'Home'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        _react2["default"].createElement(
	                            'a',
	                            { href: '#' },
	                            'Search'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        _react2["default"].createElement(
	                            'a',
	                            { href: '#' },
	                            'Travellers\' kit'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        _react2["default"].createElement(
	                            'a',
	                            { href: '#' },
	                            'Login'
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    return HeaderComponent;
	}(_react.Component);
	
	exports["default"] = HeaderComponent;

/***/ },

/***/ 244:
/*!********************************************************!*\
  !*** ./src/app/main/ui/components/HeaderComponent.css ***!
  \********************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"brandName":"HeaderComponent__brandName___3c5Eu"};

/***/ },

/***/ 245:
/*!****************************************!*\
  !*** ./src/app/main/store/appStore.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = configureStore;
	
	var _redux = __webpack_require__(/*! redux */ 168);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 246);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 247);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _appHistory = __webpack_require__(/*! src/app/main/modules/appHistory */ 240);
	
	var AppHistory = _interopRequireWildcard(_appHistory);
	
	var _appReducer = __webpack_require__(/*! src/app/main/reducers/appReducer */ 248);
	
	var _appReducer2 = _interopRequireDefault(_appReducer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function configureStore(initialState) {
	    var appHistory = AppHistory.getAppHistory();
	
	    return (0, _redux.createStore)(_appReducer2["default"], initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2["default"], (0, _reactRouterRedux.syncHistory)(appHistory)), window.devToolsExtensions ? window.devToolsExtensions() : function (f) {
	        return f;
	    }));
	}

/***/ },

/***/ 248:
/*!*********************************************!*\
  !*** ./src/app/main/reducers/appReducer.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 246);
	
	var _redux = __webpack_require__(/*! redux */ 168);
	
	var appReducer = (0, _redux.combineReducers)({
	    routing: _reactRouterRedux.routeReducer
	});
	
	exports["default"] = appReducer;

/***/ }

});
//# sourceMappingURL=bundle.js.map