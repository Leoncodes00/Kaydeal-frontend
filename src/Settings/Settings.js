import React, { Component } from "react";
import UserInfo from "./UserInfo";

export class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/users/${this.props.userId}`)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          user: data
        })
      );
  };

  renderUserData = () => {
    return <UserInfo user={this.state.user} />;
  };

  render() {
    return (
      <div>
        {this.fetchUser()}
        {this.renderUserData()}
      </div>
    );
  }
}

export default Settings;
