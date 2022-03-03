import '../App.css';
import React, {Component} from "react";
// Medium Challenge

//destructured props
const BasicInfo = ({person}) => {

    return (
                // Very Easy Challenge
                <div className="App">
                  <h1>Name:</h1>
                  <p>{person.name}</p>
                  <h1>Number:</h1>
                  <p>{person.number}</p>
                  <h1>Date Of Birth:</h1>
                  <p>{person.dateOfBirth}</p>
                </div>
                );
}

export default BasicInfo;