import React, { Component } from "react";
import "./MessageSeller.css";

export class MessageBuyer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      message: ""
    };
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.thisBuyerId);
    fetch(`http://localhost:3000/messages`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        user_id: this.props.thisBuyerId,
        buyer_id: localStorage.getItem("userId"),
        content: `Name: ${this.state.name}, Phone #: ${this.state.phone}, message: ${this.state.message}`
      })
    });
  };

  render() {
    return (
      <div>
        <form className="form-style-6" onSubmit={this.handleSubmit}>
          <h1>Reply</h1>
          <label>
            Name:
            <input
              onChange={this.handleName}
              type="text"
              name="name"
              value={this.state.name}
            />{" "}
            <br />
          </label>
          <label>
            Phone Number:
            <input
              onChange={this.handlePhone}
              type="text"
              name="name"
              value={this.state.phone}
            />{" "}
            <br />
          </label>
          <label>
            Message:
            <textarea
              onChange={this.handleMessage}
              type="text"
              name="name"
              value={this.state.message}
            />{" "}
            <br />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MessageBuyer;
