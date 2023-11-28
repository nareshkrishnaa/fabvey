import React from "react";
import ReactDOM from "react-dom";

function Greet() {
  return <h2>Hello World!....</h2>;
}

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export { Greet, Car, Garage };
