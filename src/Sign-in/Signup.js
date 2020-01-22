import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleUsername = e => {
    return this.setState({
      username: e.target.value
    });
  };
  handleEmail = e => {
    return this.setState({
      email: e.target.value
    });
  };
  handlePassword = e => {
    return this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        name: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    }).then(res =>
      res.json().then(json => {
        this.props.setLoggedIn(json);
      })
    );
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-box">
            <h1>Sign up</h1>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input
                onChange={this.handleUsername}
                value={this.state.username}
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="textbox">
              <i className="fas fa-envelope-square"></i>
              <input
                onChange={this.handleEmail}
                value={this.state.email}
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                onChange={this.handlePassword}
                value={this.state.password}
                type="password"
                placeholder="Password"
              />
            </div>

            <input type="submit" className="btn" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
