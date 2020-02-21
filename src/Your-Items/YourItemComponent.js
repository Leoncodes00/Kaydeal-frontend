import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class YourItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteItem = () => {
    fetch(`http://localhost:3000/items/${this.props.info.id}`, {
      method: "DELETE"
    });
  };
  render() {
    return (
      <div className="card">
        <a href={this.props.info.image} target="_blank" alt="Image Link">
          Image Link
        </a>
        <div className="card-container">
          <h4>
            <b>Name: {this.props.info.name}</b>
          </h4>
          <p>Price: {this.props.info.price}</p>
          {localStorage.getItem("userId") ===
          this.props.info.user_id.toString() ? (
            <div>
              <button onClick={() => this.props.history.push("/edit-item")}>
                Edit item
              </button>
              <button onClick={() => this.deleteItem()}>Delete</button>
            </div>
          ) : (
            <button
              onClick={() => this.setUpMessageSeller(this.props.info.user_id)}
            >
              Message seller
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(YourItemComponent);
