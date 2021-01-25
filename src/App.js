import React, { Component } from 'react';

class App extends Component {
  render() {
    let x = 2;
    let y = 3;
    let moduleName="React";

    return (
      // <div id="module">
      //   <p>ReactJS</p>
      // </div>

        React.createElement("div", {id: "module"},
        React.createElement("p", null, "ReactJS")
        )
    );
  }
}

export default App;
