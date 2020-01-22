import React, { Component } from "react";

export class EditItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      name: "",
      price: ""
    };
  }

  imgLinkHandler = event => {
    event.preventDefault();
    this.setState({
      image: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.itemId);
    fetch(`http://localhost:3000/items/${this.props.thisItemId}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PATCH",
      body: JSON.stringify({
        user_id: localStorage.getItem("userId"),
        buyer_id: null,
        image: this.state.image,
        name: this.state.name,
        price: this.state.price
      })
    });
  };

  itemNameHandler = event => {
    event.preventDefault();
    return this.setState(
      {
        name: event.target.value
      },
      () => {
        console.log(this.state.name);
      }
    );
  };

  priceHandler = event => {
    event.preventDefault();
    return this.setState(
      {
        price: event.target.value
      },
      () => {
        console.log(this.state.price);
      }
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Image Link:
            <input
              type="text"
              onChange={this.imgLinkHandler}
              value={this.state.image}
            />
          </label>
          <br />
          <label>
            Item Name:
            <input
              type="text"
              onChange={this.itemNameHandler}
              value={this.state.name}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="text"
              onChange={this.priceHandler}
              value={this.state.price}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditItems;
