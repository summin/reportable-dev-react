/**
 * Bundle of @devexpress/dx-react-chart-bootstrap4
 * Generated: 2019-10-01
 * Version: 2.1.1
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('@devexpress/dx-react-core'), require('@devexpress/dx-react-chart'), require('classnames'), require('@devexpress/dx-chart-core'), require('react-dom'), require('react-popper')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', '@devexpress/dx-react-core', '@devexpress/dx-react-chart', 'classnames', '@devexpress/dx-chart-core', 'react-dom', 'react-popper'], factory) :
  (global = global || self, factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXReactChartBootstrap4 = {}), global.React, global.PropTypes, global.DevExpress.DXReactCore, global.DevExpress.DXReactChart, global.classNames, global.DevExpress.DXChartCore, global.ReactDOM, global.reactPopper));
}(this, function (exports, React, PropTypes, dxReactCore, dxReactChart, classNames, dxChartCore, ReactDOM, reactPopper) { 'use strict';

  if (typeof process === "undefined") { var process = { env: {} }; }

  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var withClassName = function withClassName() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var setClassName = function setClassName(_ref) {
      var className = _ref.className,
          restProps = _objectWithoutProperties(_ref, ["className"]);

      return _objectSpread2({
        className: classNames.apply(void 0, args.concat([className]))
      }, restProps);
    };

    return dxReactChart.withPatchedProps(setClassName);
  };

  var Root = withClassName('dx-c-bs4-container')(dxReactChart.Chart.Root);

  var Label = withClassName('dx-c-bs4-fill-current-color', 'dx-c-bs4-label', 'text-muted')(dxReactChart.Chart.Label);

  var palette = ['#575f69', '#d72e3d', '#249d3d', '#ffb90c', '#1698af', '#616a72'];

  var ChartWithPalette = function ChartWithPalette(_ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, ["children"]);

    return React.createElement(dxReactChart.Chart, props, React.createElement(dxReactChart.Palette, {
      scheme: palette
    }), children);
  };

  ChartWithPalette.components = dxReactChart.Chart.components;
  process.env.NODE_ENV !== "production" ? ChartWithPalette.propTypes = {
    children: PropTypes.node.isRequired
  } : void 0;
  var Chart = dxReactCore.withComponents({
    Root: Root
  })(ChartWithPalette);
  Chart.Label = Label;

  var Root$1 = withClassName('list-group', 'py-3')(function (props) {
    return React.createElement("ul", props);
  });

  var Label$1 = withClassName('text-body', 'pl-2', 'pr-2')(function (_ref) {
    var text = _ref.text,
        restProps = _objectWithoutProperties(_ref, ["text"]);

    return React.createElement("span", restProps, text);
  });

  var Item = withClassName('d-flex', 'list-group-item', 'border-0', 'py-1', 'px-4', 'align-items-center')(function (props) {
    return React.createElement("li", props);
  });

  var Legend = dxReactCore.withComponents({
    Root: Root$1,
    Item: Item,
    Label: Label$1
  })(dxReactChart.Legend);

  var Text = withClassName('w-100', 'text-center', 'mb-3')(function (_ref) {
    var text = _ref.text,
        restProps = _objectWithoutProperties(_ref, ["text"]);

    return React.createElement("h3", restProps, text);
  });

  var Title = dxReactCore.withComponents({
    Text: Text
  })(dxReactChart.Title);

  var setClassName = function setClassName(_ref) {
    var classes = _ref.classes,
        restProps = _objectWithoutProperties(_ref, ["classes"]);

    if (restProps.state) {
      var className = restProps.className,
          rest = _objectWithoutProperties(restProps, ["className"]);

      return _objectSpread2({
        className: classNames('dx-c-bs4-fill-background-color', className)
      }, rest);
    }

    return restProps;
  };

  var Point = dxReactChart.withPatchedProps(setClassName)(dxReactChart.ScatterSeries.Point);

  var ScatterSeries = dxReactCore.withComponents({
    Point: Point
  })(dxReactChart.ScatterSeries);

  var Root$2 = withClassName('dx-c-bs4-crisp-edges')(dxReactChart.Axis.Root);

  var Tick = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-crisp-edges', 'dx-c-bs4-axis-opacity')(dxReactChart.Axis.Tick);

  var Label$2 = withClassName('dx-c-bs4-fill-current-color', 'dx-c-bs4-label', 'text-muted')(dxReactChart.Axis.Label);

  var Line = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-axis-opacity')(dxReactChart.Axis.Line);

  var Grid = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-crisp-edges', 'dx-c-bs4-axis-opacity')(dxReactChart.Axis.Grid);

  var ValueAxis = dxReactCore.withComponents({
    Root: Root$2,
    Tick: Tick,
    Label: Label$2,
    Line: Line,
    Grid: Grid
  })(dxReactChart.ValueAxis);

  var ArgumentAxis = dxReactCore.withComponents({
    Root: Root$2,
    Tick: Tick,
    Label: Label$2,
    Line: Line,
    Grid: Grid
  })(dxReactChart.ArgumentAxis);

  var DefaultArrowComponent = React.forwardRef(function (_ref, ref) {
    var placement = _ref.placement,
        restProps = _objectWithoutProperties(_ref, ["placement"]);

    return React.createElement("div", _extends({
      className: "arrow",
      ref: ref
    }, restProps));
  });
  DefaultArrowComponent.propTypes = {
    placement: PropTypes.string.isRequired
  };
  var Popover =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Popover, _React$PureComponent);

    function Popover(props) {
      var _this;

      _classCallCheck(this, Popover);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props)); // These two fields should be created only if `isOpen && toggle` condition is true
      // and destroyed when condition turns false.
      // But it would require usage of `this.state` and other code complications.
      // So let's not change it for now. Maybe a better solution would be found.

      _this.contentRef = React.createRef();
      _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Popover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            toggle = _this$props.toggle;

        if (isOpen && toggle) {
          this.attachDocumentEvents();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this$props2 = this.props,
            isOpen = _this$props2.isOpen,
            toggle = _this$props2.toggle;

        if (isOpen && toggle) {
          this.attachDocumentEvents();
        } else {
          this.detachDocumentEvents();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.detachDocumentEvents();
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        var eventTarget = e.target;
        var contentNode = this.contentRef.current;
        var _this$props3 = this.props,
            toggle = _this$props3.toggle,
            target = _this$props3.target;

        if (contentNode && !contentNode.contains(eventTarget) && !target.contains(eventTarget)) {
          toggle();
        }
      }
    }, {
      key: "attachDocumentEvents",
      value: function attachDocumentEvents() {
        if (!this.listenersAttached) {
          this.toggleDocumentEvents('addEventListener');
          this.listenersAttached = true;
        }
      }
    }, {
      key: "detachDocumentEvents",
      value: function detachDocumentEvents() {
        if (this.listenersAttached) {
          this.toggleDocumentEvents('removeEventListener');
          this.listenersAttached = false;
        }
      }
    }, {
      key: "toggleDocumentEvents",
      value: function toggleDocumentEvents(method) {
        var _this2 = this;

        ['click', 'touchstart'].forEach(function (eventType) {
          document[method](eventType, _this2.handleClick, true);
        });
      }
    }, {
      key: "renderPopper",
      value: function renderPopper() {
        var _this3 = this;

        var _this$props4 = this.props,
            children = _this$props4.children,
            target = _this$props4.target,
            renderInBody = _this$props4.renderInBody,
            ArrowComponent = _this$props4.arrowComponent,
            restProps = _objectWithoutProperties(_this$props4, ["children", "target", "renderInBody", "arrowComponent"]);

        return React.createElement(reactPopper.Popper, _extends({
          referenceElement: target
        }, restProps), function (_ref2) {
          var ref = _ref2.ref,
              style = _ref2.style,
              arrowProps = _ref2.arrowProps,
              placement = _ref2.placement;
          return React.createElement("div", {
            className: "popover show bs-popover-".concat(placement),
            ref: ref,
            style: style
          }, React.createElement("div", {
            className: "popover-inner",
            ref: _this3.contentRef
          }, children), React.createElement(ArrowComponent, _extends({}, arrowProps, {
            placement: restProps.placement
          })));
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            isOpen = _this$props5.isOpen,
            renderInBody = _this$props5.renderInBody;
        if (!isOpen) return null;
        return renderInBody ? ReactDOM.createPortal(this.renderPopper(), document.body) : this.renderPopper();
      }
    }]);

    return Popover;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? Popover.propTypes = {
    renderInBody: PropTypes.bool,
    placement: PropTypes.string,
    isOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    target: PropTypes.oneOfType([PropTypes.instanceOf(typeof Element !== 'undefined' ? Element : Object), PropTypes.object]),
    toggle: PropTypes.func,
    arrowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  } : void 0;
  Popover.defaultProps = {
    target: null,
    renderInBody: true,
    isOpen: false,
    placement: 'auto',
    toggle: undefined,
    arrowComponent: DefaultArrowComponent
  };

  var popperModifiers = {
    flip: {
      enabled: false
    }
  };
  var Overlay =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Overlay, _React$PureComponent);

    function Overlay() {
      _classCallCheck(this, Overlay);

      return _possibleConstructorReturn(this, _getPrototypeOf(Overlay).apply(this, arguments));
    }

    _createClass(Overlay, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            target = _this$props.target,
            rotated = _this$props.rotated,
            restProps = _objectWithoutProperties(_this$props, ["children", "target", "rotated"]);

        return React.createElement(Popover, _extends({
          placement: rotated ? dxChartCore.RIGHT : dxChartCore.TOP,
          isOpen: true,
          target: target,
          modifiers: popperModifiers
        }, restProps), children);
      }
    }]);

    return Overlay;
  }(React.PureComponent);
  process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.any.isRequired,
    rotated: PropTypes.bool.isRequired,
    arrowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
  } : void 0;

  var Content = function Content(_ref) {
    var text = _ref.text,
        targetItem = _ref.targetItem,
        restProps = _objectWithoutProperties(_ref, ["text", "targetItem"]);

    return React.createElement("span", restProps, text);
  };
  process.env.NODE_ENV !== "production" ? Content.propTypes = {
    text: PropTypes.string.isRequired,
    targetItem: PropTypes.shape({
      series: PropTypes.string.isRequired,
      point: PropTypes.number.isRequired
    })
  } : void 0;
  Content.defaultProps = {
    targetItem: undefined
  };

  var Arrow = React.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        placement = _ref.placement,
        restProps = _objectWithoutProperties(_ref, ["className", "placement"]);

    return React.createElement("div", _extends({
      className: classNames('arrow', className),
      ref: ref
    }, restProps));
  });
  Arrow.propTypes = {
    placement: PropTypes.string.isRequired,
    className: PropTypes.string
  };
  Arrow.defaultProps = {
    className: undefined
  };

  var Sheet = function Sheet(_ref) {
    var className = _ref.className,
        restProps = _objectWithoutProperties(_ref, ["className"]);

    return React.createElement("div", _extends({
      className: classNames('popover-body', className)
    }, restProps));
  };
  process.env.NODE_ENV !== "production" ? Sheet.propTypes = {
    className: PropTypes.string
  } : void 0;
  Sheet.defaultProps = {
    className: undefined
  };

  var Tooltip = dxReactCore.withComponents({
    Overlay: Overlay,
    Content: Content,
    Arrow: Arrow,
    Sheet: Sheet
  })(dxReactChart.Tooltip);

  var DragBox = withClassName('bg-secondary', 'dx-c-bs4-rect-opacity')(dxReactChart.ZoomAndPan.DragBox);

  var ZoomAndPan = dxReactCore.withComponents({
    DragBox: DragBox
  })(dxReactChart.ZoomAndPan);

  Object.defineProperty(exports, 'AreaSeries', {
    enumerable: true,
    get: function () {
      return dxReactChart.AreaSeries;
    }
  });
  Object.defineProperty(exports, 'BarSeries', {
    enumerable: true,
    get: function () {
      return dxReactChart.BarSeries;
    }
  });
  Object.defineProperty(exports, 'LineSeries', {
    enumerable: true,
    get: function () {
      return dxReactChart.LineSeries;
    }
  });
  Object.defineProperty(exports, 'PieSeries', {
    enumerable: true,
    get: function () {
      return dxReactChart.PieSeries;
    }
  });
  Object.defineProperty(exports, 'SplineSeries', {
    enumerable: true,
    get: function () {
      return dxReactChart.SplineSeries;
    }
  });
  exports.ArgumentAxis = ArgumentAxis;
  exports.Chart = Chart;
  exports.Legend = Legend;
  exports.ScatterSeries = ScatterSeries;
  exports.Title = Title;
  exports.Tooltip = Tooltip;
  exports.ValueAxis = ValueAxis;
  exports.ZoomAndPan = ZoomAndPan;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dx-react-chart-bootstrap4.umd.js.map
