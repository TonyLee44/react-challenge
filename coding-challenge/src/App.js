import './App.css';
import React, {Component} from "react";
import BasicInfo from './Components/BasicInfo';

class App extends Component{
  constructor (props) {
    super(props)

    // Easy Challenge
    this.state = {
      person: [{
        name: "Tony Lee",
        number: 1234567890,
        dateOfBirth: "09/25/96",
      },
      {
        name: "John Smith",
        number: 1112223456,
        dateOfBirth: "02/25/88"
      },
      {
        name: "Jane Doe",
        number: 7778889999,
        dateOfBirth: "10/15/90"
      },
    ],
    };
  }
render() {
  // Hard Challenge
    return <>{
    this.state.person.map(person => {
      console.log(person)
      return <BasicInfo person={person} key={person.name}/> 
    })
    }
    </>
}
}

{/* <BasicInfo person={this.state.person[0]}/> */}
export default App;

/*
VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
 
EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
 
MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)
 
HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)
*/