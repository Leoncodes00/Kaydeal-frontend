import React, { Component } from "react";

export class UserInfoEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify({
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    });
  };

  render() {
    return (
      <div>
        <form className="form-style-6" onSubmit={this.handleSubmit}>
          <h1>Edit user information</h1>
          <label>
            Username:
            <input
              onChange={this.handleUsername}
              value={this.state.username}
              type="text"
              name="name"
            />
          </label>
          <label>
            Email:
            <input
              onChange={this.handleEmail}
              value={this.state.email}
              type="text"
              name="name"
            />
          </label>
          <label>
            Password:
            <input
              onChange={this.handlePassword}
              value={this.state.password}
              type="password"
              name="name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserInfoEdit;
