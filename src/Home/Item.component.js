import React from "react";
import "./ItemStyles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  setUpMessageSeller = userId => {
    this.props.getItemId(userId);
    this.props.history.push("/message-seller");
  };

  setUpEditItem = id => {
    this.props.history.push("/edit-item");
    this.props.itemIdForEdit(id);
  };

  render() {
    return (
      <div className="card">
        <a href={this.props.item.image} target="_blank" alt="Image Link">
          Image Link
        </a>
        <div className="card-container">
          <h4>
            <b>Name: {this.props.item.name}</b>
          </h4>
          <p>Price: {this.props.item.price}</p>
          {localStorage.getItem("userId") ===
          this.props.item.user_id.toString() ? (
            <button onClick={() => this.setUpEditItem(this.props.item.id)}>
              Edit item
            </button>
          ) : (
            <button
              onClick={() => this.setUpMessageSeller(this.props.item.user_id)}
            >
              Message seller
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ItemComponent);
