import React from 'react';

const boxStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  alignItems: 'stretch'
};

const itemStyle = {
  boxSizing: 'border-box'
};

function mixBoxProps(style, props) {
  const divStyle = {};

  if (props.expand) {
    divStyle.width = '100%';
    divStyle.height= '100%';
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

  return Object.assign({}, boxStyle, divStyle, style);
}

function mixItemProps(style, props) {
  const divStyle = {};

  if (!isNaN(props.size * 1)) {
    divStyle.flexGrow = props.size;
    divStyle.flexShrink = 0;
    divStyle.flexBasis = 0;
  } else {
    divStyle.flexBasis = 'auto';
    divStyle.flexGrow = 0;
    divStyle.flexShrink = 0;
  }

  return Object.assign({}, itemStyle, divStyle, style);
}

function cleanProps(props) {
  const result = Object.assign({}, props);
  [
    'style',
    'item',
    'box',
    'row',
    'column',
    'wrap',
    'justifyStart',
    'justifyEnd',
    'justifyCenter',
    'justifySpaceBetween',
    'justifySpaceAround',
    'alignStart',
    'alignEnd',
    'alignCenter',
    'alignStretch',
    'alignBaseline',
    'componentClass',
    'expand'
  ].forEach(prop => delete result[prop]);
  return result;
}

export default React.createClass({
  propTypes {
    style: React.PropTypes.object,
    item: React.PropTypes.any,
    box: React.PropTypes.any,
    children: React.PropTypes.node,
    componentClass: React.PropTypes.node
  },

  defaultProps: {
    componentClass: 'div'
  },

  render() {
    const {style, item, row, column} = this.props;
    const composedStyle = Object.assign({},
      item ? mixItemProps(style, this.props) : {},
      row || column ? mixBoxProps(style, this.props) : {});
    const props = cleanProps(this.props);
    const ComponentClass = this.props.componentClass;

    return <ComponentClass {...props} style={composedStyle}>{this.props.children}</ComponentClass>;
  }
});
