import React, { Component } from "react";
import "./App.css";

import GitHub from "./Github.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHub username="jamiedodds" />
      </div>
    );
  }
}

export default App;
