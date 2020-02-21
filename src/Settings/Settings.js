import React, { Component } from "react";
import UserInfo from "./UserInfo";
import Messages from "./Messages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      messages: []
    };
    fetch(`http://localhost:3000/users/${this.props.userId}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          user: data,
          messages: data.messages
        });
      });
  }

  renderUserData = () => {
    return (
      <UserInfo user={this.state.user} isLoggedIn={this.props.isLoggedIn} />
    );
  };

  renderMessages = () => {
    return this.state.messages.map(message => (
      <Messages
        message={message.content}
        id={message.id}
        sellerId={message.buyer_id}
        getUserSeller={this.props.getUserSeller}
      />
    ));
  };

  deleteUser = () => {
    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`, {
      method: "DELETE"
    })
      .then(localStorage.clear())
      .then((window.location = "/sign-in"));
  };

  render() {
    return (
      <div className="grid-container">
        <header className="header-dashboard">Account Information</header>
        <aside className="sidenav">
          <ul className="sidenav__list">
            <li
              onClick={() => this.props.history.push("/edit-user")}
              className="sidenav__list-item"
            >
              Edit account info
            </li>
            <li
              onClick={() => this.deleteUser()}
              className="sidenav__list-item"
            >
              Delete account
            </li>
          </ul>
        </aside>
        <main className="main-header">
          <div className="main-header__heading">
            Hello {localStorage.getItem("username")}
            <div style={{ marginTop: "10px" }} className="main-header__heading">
              {this.renderUserData()}
            </div>
            <div style={{ marginTop: "60px" }} className="main-header__heading">
              List of messages
            </div>
            <div style={{ marginTop: "10px" }} className="main-header__heading">
              {this.renderMessages()}
            </div>
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default withRouter(Settings);
