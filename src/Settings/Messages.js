import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class Messages extends Component {
  constructor(props) {
    super(props);
  }
  getBuyerId = () => {
    this.props.getUserSeller(this.props.sellerId);
    this.props.history.push("/message-buyer");
  };
  deleteMessage = () => {
    fetch(`http://localhost:3000/messages/${this.props.id}`, {
      method: "DELETE"
    });
  };
  render() {
    return (
      <div className="user-info-container">
        <p>{this.props.message}</p>
        <button onClick={() => this.getBuyerId()}>Reply</button>
        <button onClick={() => this.deleteMessage()}>Delete message</button>
      </div>
    );
  }
}

export default withRouter(Messages);
