'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

var itemStyle = {
  boxSizing: 'border-box'
};

function mixBoxProps(style, props) {
  var divStyle = {};

  if (props.row) {
    divStyle.flexDirection = 'row';
    divStyle.alignItems = 'center';
  } else if (props.column) {
    divStyle.flexDirection = 'column';
  }

  if (props.wrap) {
    divStyle.flexWrap = 'wrap';
  }

  if (props.justifyStart) {
    divStyle.justifyContent = 'flex-start';
  } else if (props.justifyEnd) {
    divStyle.justifyContent = 'flex-end';
  } else if (props.justifyCenter) {
    divStyle.justifyContent = 'center';
  } else if (props.justifySpaceBetween) {
    divStyle.justifyContent = 'space-between';
  } else if (props.justifySpaceAround) {
    divStyle.justifyContent = 'space-around';
  }

  if (props.alignStart) {
    divStyle.alignItems = 'flex-start';
  } else if (props.alignEnd) {
    divStyle.alignItems = 'flex-end';
  } else if (props.alignCenter) {
    divStyle.alignItems = 'center';
  } else if (props.alignStretch) {
    divStyle.alignItems = 'stretch';
  } else if (props.alignBaseline) {
    divStyle.alignItems = 'baseline';
  }

  return _extends({}, boxStyle, divStyle, style);
}

function mixItemProps(style, props) {
  var divStyle = {};

  if (typeof props.size === 'number') {
    divStyle.flexGrow = props.size;
    divStyle.flexShrink = 0;
    divStyle.flexBasis = 0;
  } else {
    divStyle.flexBasis = 'auto';
    divStyle.flexGrow = 0;
    divStyle.flexShrink = 0;
  }

  return _extends({}, itemStyle, divStyle, style);
}

function cleanProps(props) {
  var result = _extends({}, props);
  ['style', 'item', 'box', 'row', 'column', 'wrap', 'justifyStart', 'justifyEnd', 'justifyCenter', 'justifySpaceBetween', 'justifySpaceAround', 'alignStart', 'alignEnd', 'alignCenter', 'alignStretch', 'alignBaseline'].forEach(function (prop) {
    return delete result[prop];
  });
  return result;
}

var View = (function (_React$Component) {
  function View() {
    _classCallCheck(this, View);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(View, _React$Component);

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var item = _props.item;
      var box = _props.box;

      var composedStyle = _extends({}, item ? mixItemProps(style, this.props) : {}, box ? mixBoxProps(style, this.props) : {});
      var props = cleanProps(this.props);

      return _react2['default'].createElement(
        'div',
        _extends({}, props, { style: composedStyle }),
        this.props.children
      );
    }
  }]);

  return View;
})(_react2['default'].Component);

View.propTypes = {
  style: _react2['default'].PropTypes.object,
  item: _react2['default'].PropTypes.any,
  box: _react2['default'].PropTypes.any,
  children: _react2['default'].PropTypes.node
  // TODO: add all possible props here
};

exports['default'] = View;
module.exports = exports['default'];
