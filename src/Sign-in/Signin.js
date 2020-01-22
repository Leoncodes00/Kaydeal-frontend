import React, { Component } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsername = e => {
    return this.setState({
      username: e.target.value
    });
  };
  handlePassword = e => {
    return this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(data => {
        data.map(info =>
          info.name === this.state.username &&
          info.password === this.state.password
            ? this.props.setLoggedIn(info)
            : console.log("blah")
        );
      });
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input
                value={this.state.username}
                onChange={this.handleUsername}
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input
                value={this.state.password}
                onChange={this.handlePassword}
                type="password"
                placeholder="Password"
              />
            </div>

            <input type="submit" className="btn" value="Sign in" />
            <input
              onClick={() => this.props.history.push("/sign-up")}
              type="button"
              className="btn"
              value="Sign up"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
