import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component{
  constructor (props) {
    super(props)

    // Easy Challenge
    this.state = {
      person: [{
        name: "Tony",
        number: 1234567890,
        dateOfBirth: "09/25/96",
      },
    ],
    };
  }
render() {

    return (
      // Very Easy Challenge
      <div className="App">
        <h1>Name:</h1>
        <p>Tony Lee</p>
        <h1>Number:</h1>
        <p>1234567890</p>
        <h1>Date Of Birth:</h1>
        <p>09/25/96</p>
      </div>
    );
}
}


export default App;
