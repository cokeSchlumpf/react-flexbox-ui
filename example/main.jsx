import ReactDOM from 'react-dom';
import React from 'react';
import View from '../lib/main.js';

console.log(View);

const HelloWorld = React.createClass({
  render() {
    return (
      <View column expand >
        <View item size={ 1 } style={{ backgroundColor: "#ff0000" }} row>
          <View item size={ 1 } className="blue">1</View>
          <View item size={ 2 } className="blue">2<br />2</View>
          <View item size={ 1 } className="blue">3</View>
        </View>
        <View item size="2" style={{ backgroundColor: "#00ff00" }} row justifySpaceAround>
          <View item className="blue box">1</View>
          <View item className="blue box">2<br />2</View>
          <View item className="blue box">3</View>
        </View>
        <View item className="footer" componentClass="footer">Footer</View>
      </View>
    );
  }
});

console.log(HelloWorld);

ReactDOM.render(<HelloWorld />, document.getElementById("app"));
