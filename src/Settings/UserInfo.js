import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import "./UserInfoPage.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-info-container">
        <p>Username: {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
      </div>
    );
  }
}
export default withRouter(UserInfo);
