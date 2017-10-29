import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TeslaBattery from "./components/TeslaBattery/TeslaBattery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal} />
      </div>
    );
  }
}

export default App;
