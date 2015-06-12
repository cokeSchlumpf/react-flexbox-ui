import React from 'react';
import View from '../lib/main.js';

const HelloWorld = React.createClass({
  render() {
    return (
      <View box column style={{ height: "100%" }} >
        <View item size={ 1 } style={{ backgroundColor: "#ff0000" }} box row>
          <View item size={ 1 } className="blue">1</View>
          <View item size={ 1 } className="blue">2<br />2</View>
          <View item size={ 1 } className="blue">3</View>
        </View>
        <View item size={ 2 } style={{ backgroundColor: "#00ff00" }} box row justifySpaceAround>
          <View item className="blue box">1</View>
          <View item className="blue box">2<br />2</View>
          <View item className="blue box">3</View>
        </View>
        <View item className="footer">Footer</View>
      </View>
    );
  }
});

React.render(<HelloWorld />, document.body);