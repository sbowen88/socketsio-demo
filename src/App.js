import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="well">
              <h3>Online Users</h3>
              <ul className="list-group" id="users" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="chat" id="chat" />
            <form action="" id="message-form">
              <label>Enter Message</label>
              <textarea className="form-control" id="message" />
              <br />
              <input
                type="submit"
                className="btn btn-primary"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
