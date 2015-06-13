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
    divStyle.justifyContent = "flex-start";
  } else if (props.justifyEnd) {
    divStyle.justifyContent = "flex-end";
  } else if (props.justifyCenter) {
    divStyle.justifyContent = "center";
  } else if (props.justifySpaceBetween) {
    divStyle.justifyContent = "space-between";
  } else if (props.justifySpaceAround) {
    divStyle.justifyContent = "space-around";
  }

  if (props.alignStart) {
    divStyle.alignItems = "flex-start";
  } else if (props.alignEnd) {
    divStyle.alignItems = "flex-end";
  } else if (props.alignCenter) {
    divStyle.alignItems = "center";
  } else if (props.alignStretch) {
    divStyle.alignItems = "stretch";
  } else if (props.alignBaseline) {
    divStyle.alignItems = "baseline";
  }

  return Object.assign({}, boxStyle, divStyle, style);
}

function mixItemProps(style, props) {
  const divStyle = {};

  if (typeof props.size === 'number') {
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
  delete result["style"];
  delete result["item"];
  delete result["box"];
  delete result["row"];
  delete result["column"];
  delete result["wrap"];
  delete result["justifyStart"];
  delete result["justifyEnd"];
  delete result["justifyCenter"];
  delete result["justifySpaceBetween"];
  delete result["justifySpaceAround"];
  delete result["alignStart"];
  delete result["alignEnd"];
  delete result["alignCenter"];
  delete result["alignStretch"];
  delete result["alignBaseline"];
  return result;
}

export default class View extends React.Component {
  render() {
    const { style, item, box } = this.props;
    const composedStyle = Object.assign({},
      item ? mixItemProps(style, this.props) : {},
      box ? mixBoxProps(style, this.props) : {});
    const props = cleanProps(this.props);

    return <div { ...props } style={ composedStyle }>{this.props.children}</div>;
  }
}
