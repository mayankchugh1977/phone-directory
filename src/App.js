import React, { Component } from 'react';

class App extends Component {
  render() {
    let x = 2;
    let y = 3;
    let moduleName="React";

    return (
      <div>
        {/* <div className="header">
          Phone Directory
          </div>
        <button> Add </button>
        <div>
          <span> Name </span><br />
          <span> Phone </span>
        </div> */}
        <span>Learning {moduleName} is so much fun! {Math.pow(x,y)}  </span><br/><br/>
        <label htmlFor="name"> Name: </label>
        <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}/>
      </div>

    );
  }
}

export default App;
