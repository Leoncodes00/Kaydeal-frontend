import React, { Component } from "react";
import YourItemComponent from "./YourItemComponent";

export class YourItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
    fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          user: data.items
        })
      );
  }

  renderUser = () => {
    return this.state.user.map(info => {
      return (
        <div>
          <YourItemComponent info={info} />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderUser()}</div>;
  }
}

export default YourItems;
