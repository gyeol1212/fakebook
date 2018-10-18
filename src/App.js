import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Cover from "./Component/Cover";
import Intro from "./Component/Intro";
import Pic from "./Component/Pic";
import Posts from "./Component/Posts";
import WritePost from "./Component/WritePost";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        <Navbar />
        <div className="container">
          <Cover />
          <div className="row m-0">
            <div className="col-5 p-0">
              <Intro />
              <Pic />
            </div>
            <div className="col-7">
              <WritePost />
              <Posts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
