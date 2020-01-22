import React, { Component } from "react";

export class SellForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgLink: "",
      name: "",
      price: ""
    };
  }

  handleImg = e => {
    return this.setState({
      imgLink: e.target.value
    });
  };

  handleName = e => {
    return this.setState(
      {
        name: e.target.value
      },
      () => console.log(this.state.name)
    );
  };

  handlePrice = e => {
    return this.setState({
      price: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        user_id: localStorage.getItem("userId"),
        buyer_id: null,
        image: this.state.imgLink,
        name: this.state.name,
        price: this.state.price
      })
    });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Image link:
            <input
              onChange={this.handleImg}
              type="text"
              value={this.state.imgLink}
            />
          </label>
          <label>
            Name:
            <input
              onChange={this.handleName}
              value={this.state.name}
              type="text"
            />
          </label>
          <label>
            Price:
            <input
              onChange={this.handlePrice}
              value={this.state.price}
              type="text"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SellForm;
