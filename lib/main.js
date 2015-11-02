'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

  if (props.expand) {
    divStyle.width = '100%';
    divStyle.height = '100%';
  }

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

  if (!isNaN(props.size * 1)) {
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
  ['style', 'item', 'box', 'row', 'column', 'wrap', 'justifyStart', 'justifyEnd', 'justifyCenter', 'justifySpaceBetween', 'justifySpaceAround', 'alignStart', 'alignEnd', 'alignCenter', 'alignStretch', 'alignBaseline', 'componentClass', 'expand'].forEach(function (prop) {
    return delete result[prop];
  });
  return result;
}

exports['default'] = _react2['default'].createClass({
  displayName: 'main',

  propTypes: {
    style: _react2['default'].PropTypes.object,
    item: _react2['default'].PropTypes.any,
    box: _react2['default'].PropTypes.any,
    children: _react2['default'].PropTypes.node,
    componentClass: _react2['default'].PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var item = _props.item;
    var row = _props.row;
    var column = _props.column;

    var composedStyle = _extends({}, item ? mixItemProps(style, this.props) : {}, row || column ? mixBoxProps(style, this.props) : {});
    var props = cleanProps(this.props);
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, props, { style: composedStyle }),
      this.props.children
    );
  }
});
module.exports = exports['default'];
