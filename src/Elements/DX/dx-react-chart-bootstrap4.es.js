/**
 * Bundle of @devexpress/dx-react-chart-bootstrap4
 * Generated: 2019-10-01
 * Version: 2.1.1
 * License: https://js.devexpress.com/Licensing
 */

import { createElement, forwardRef, createRef, PureComponent } from 'react';
import { node, string, bool, oneOfType, instanceOf, object, func, any, shape, number } from 'prop-types';
import { withComponents } from '@devexpress/dx-react-core';
import { withPatchedProps, Chart as Chart$1, Palette, Legend as Legend$1, Title as Title$1, ScatterSeries as ScatterSeries$1, Axis, ValueAxis as ValueAxis$1, ArgumentAxis as ArgumentAxis$1, Tooltip as Tooltip$1, ZoomAndPan as ZoomAndPan$1 } from '@devexpress/dx-react-chart';
export { AreaSeries, BarSeries, LineSeries, PieSeries, SplineSeries } from '@devexpress/dx-react-chart';
import classNames from 'classnames';
import { RIGHT, TOP } from '@devexpress/dx-chart-core';
import { createPortal } from 'react-dom';
import { Popper } from 'react-popper';

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

  return withPatchedProps(setClassName);
};

var Root = withClassName('dx-c-bs4-container')(Chart$1.Root);

var Label = withClassName('dx-c-bs4-fill-current-color', 'dx-c-bs4-label', 'text-muted')(Chart$1.Label);

var palette = ['#5f6a78', '#2b48ad', '#249d3d', '#ffb90c', '#1698af', '#616a72'];

var ChartWithPalette = function ChartWithPalette(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return createElement(Chart$1, props, createElement(Palette, {
    scheme: palette
  }), children);
};

ChartWithPalette.components = Chart$1.components;
process.env.NODE_ENV !== "production" ? ChartWithPalette.propTypes = {
  children: node.isRequired
} : void 0;
var Chart = withComponents({
  Root: Root
})(ChartWithPalette);
Chart.Label = Label;

var Root$1 = withClassName('list-group', 'py-3')(function (props) {
  return createElement("ul", props);
});

var Label$1 = withClassName('text-body', 'pl-2', 'pr-2')(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return createElement("span", restProps, text);
});

var Item = withClassName('d-flex', 'list-group-item', 'border-0', 'py-1', 'px-4', 'align-items-center')(function (props) {
  return createElement("li", props);
});

var Legend = withComponents({
  Root: Root$1,
  Item: Item,
  Label: Label$1
})(Legend$1);

var Text = withClassName('w-100', 'text-center', 'mb-3')(function (_ref) {
  var text = _ref.text,
      restProps = _objectWithoutProperties(_ref, ["text"]);

  return createElement("h3", restProps, text);
});

var Title = withComponents({
  Text: Text
})(Title$1);

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

var Point = withPatchedProps(setClassName)(ScatterSeries$1.Point);

var ScatterSeries = withComponents({
  Point: Point
})(ScatterSeries$1);

var Root$2 = withClassName('dx-c-bs4-crisp-edges')(Axis.Root);

var Tick = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-crisp-edges', 'dx-c-bs4-axis-opacity')(Axis.Tick);

var Label$2 = withClassName('dx-c-bs4-fill-current-color', 'dx-c-bs4-label', 'text-muted')(Axis.Label);

var Line = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-axis-opacity')(Axis.Line);

var Grid = withClassName('dx-c-bs4-stroke-current-color', 'dx-c-bs4-crisp-edges', 'dx-c-bs4-axis-opacity')(Axis.Grid);

var ValueAxis = withComponents({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(ValueAxis$1);

var ArgumentAxis = withComponents({
  Root: Root$2,
  Tick: Tick,
  Label: Label$2,
  Line: Line,
  Grid: Grid
})(ArgumentAxis$1);

var DefaultArrowComponent = forwardRef(function (_ref, ref) {
  var placement = _ref.placement,
      restProps = _objectWithoutProperties(_ref, ["placement"]);

  return createElement("div", _extends({
    className: "arrow",
    ref: ref
  }, restProps));
});
DefaultArrowComponent.propTypes = {
  placement: string.isRequired
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

    _this.contentRef = createRef();
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

      return createElement(Popper, _extends({
        referenceElement: target
      }, restProps), function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            arrowProps = _ref2.arrowProps,
            placement = _ref2.placement;
        return createElement("div", {
          className: "popover show bs-popover-".concat(placement),
          ref: ref,
          style: style
        }, createElement("div", {
          className: "popover-inner",
          ref: _this3.contentRef
        }, children), createElement(ArrowComponent, _extends({}, arrowProps, {
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
      return renderInBody ? createPortal(this.renderPopper(), document.body) : this.renderPopper();
    }
  }]);

  return Popover;
}(PureComponent);
process.env.NODE_ENV !== "production" ? Popover.propTypes = {
  renderInBody: bool,
  placement: string,
  isOpen: bool,
  children: node.isRequired,
  target: oneOfType([instanceOf(typeof Element !== 'undefined' ? Element : Object), object]),
  toggle: func,
  arrowComponent: oneOfType([func, object])
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

      return createElement(Popover, _extends({
        placement: rotated ? RIGHT : TOP,
        isOpen: true,
        target: target,
        modifiers: popperModifiers
      }, restProps), children);
    }
  }]);

  return Overlay;
}(PureComponent);
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  children: node.isRequired,
  target: any.isRequired,
  rotated: bool.isRequired,
  arrowComponent: oneOfType([func, object]).isRequired
} : void 0;

var Content = function Content(_ref) {
  var text = _ref.text,
      targetItem = _ref.targetItem,
      restProps = _objectWithoutProperties(_ref, ["text", "targetItem"]);

  return createElement("span", restProps, text);
};
process.env.NODE_ENV !== "production" ? Content.propTypes = {
  text: string.isRequired,
  targetItem: shape({
    series: string.isRequired,
    point: number.isRequired
  })
} : void 0;
Content.defaultProps = {
  targetItem: undefined
};

var Arrow = forwardRef(function (_ref, ref) {
  var className = _ref.className,
      placement = _ref.placement,
      restProps = _objectWithoutProperties(_ref, ["className", "placement"]);

  return createElement("div", _extends({
    className: classNames('arrow', className),
    ref: ref
  }, restProps));
});
Arrow.propTypes = {
  placement: string.isRequired,
  className: string
};
Arrow.defaultProps = {
  className: undefined
};

var Sheet = function Sheet(_ref) {
  var className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["className"]);

  return createElement("div", _extends({
    className: classNames('popover-body', className)
  }, restProps));
};
process.env.NODE_ENV !== "production" ? Sheet.propTypes = {
  className: string
} : void 0;
Sheet.defaultProps = {
  className: undefined
};

var Tooltip = withComponents({
  Overlay: Overlay,
  Content: Content,
  Arrow: Arrow,
  Sheet: Sheet
})(Tooltip$1);

var DragBox = withClassName('bg-secondary', 'dx-c-bs4-rect-opacity')(ZoomAndPan$1.DragBox);

var ZoomAndPan = withComponents({
  DragBox: DragBox
})(ZoomAndPan$1);

export { ArgumentAxis, Chart, Legend, ScatterSeries, Title, Tooltip, ValueAxis, ZoomAndPan };
//# sourceMappingURL=dx-react-chart-bootstrap4.es.js.map
