import React, { Component } from "react";
import YourItemComponent from "./YourItemComponent";

export class YourItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }
  fetchUserData = () => {
    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          user: data.items
        })
      );
  };

  renderUser = () => {
    return <YourItemComponent user={this.state.user} />;
  };

  render() {
    return (
      <div>
        {this.fetchUserData()}
        {this.renderUser()}
      </div>
    );
  }
}

export default YourItems;
