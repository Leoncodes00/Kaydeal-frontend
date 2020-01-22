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

  mapData = () => {
    return this.props.user.map(info => {
      return (
        <div className="card">
          <a href={info.image} target="_blank" alt="Image Link">
            Image Link
          </a>
          <div className="card-container">
            <h4>
              <b>Name: {info.name}</b>
            </h4>
            <p>Price: {info.price}</p>
            {localStorage.getItem("userId") === info.user_id.toString() ? (
              <button onClick={() => this.props.history.push("/edit-item")}>
                Edit item
              </button>
            ) : (
              <button onClick={() => this.setUpMessageSeller(info.user_id)}>
                Message seller
              </button>
            )}
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.mapData()}</div>;
  }
}

export default withRouter(YourItemComponent);
