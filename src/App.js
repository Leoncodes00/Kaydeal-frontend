import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Homepage from "./Home/Homepage";
import SellForm from "./Sell/SellForm";
import Signin from "./Sign-in/Signin";
import Signup from "./Sign-in/Signup";
import Settings from "./Settings/Settings";
import MessageSeller from "./MessageSeller/MessageSeller";
import YourItems from "./Your-Items/YourItems";
import EditItems from "./Edit/EditItems";
import MessageBuyer from "./MessageSeller/MessageBuyer";
import UserInfoEdit from "./Settings/UserInfoEdit";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      userData: [],
      isLoggedIn: false,
      username: "",
      userId: "",
      thisUserId: "",
      thisItemId: "",
      thisBuyerId: ""
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/items`)
      .then(resp => resp.json())
      .then(data => {
        return this.setState({
          items: data
        });
      });
    if (localStorage.getItem("isLoggedIn") === "true") {
      this.setState({
        isLoggedIn: true,
        userId: localStorage.getItem("userId")
      });
    }
  }

  setLoggedIn = userData => {
    window.location = "/";
    this.setState(
      {
        isLoggedIn: !this.state.isLoggedIn,
        userId: userData.id,
        username: userData.name
      },
      () => this.setLocalStorage(userData.id)
    );
  };

  setLocalStorage = id => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userId", id);
    localStorage.setItem("username", this.state.username);
  };

  getUserId = userId => {
    this.setState({
      thisUserId: userId
    });
  };

  itemIdForEdit = id => {
    this.setState({
      thisItemId: id
    });
  };

  getUserSeller = buyerId => {
    this.setState({
      thisBuyerId: buyerId
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <Router>
            {this.state.isLoggedIn === true ? (
              <nav className="header-nav">
                <ul>
                  <li>
                    <h3>Kaydeal</h3>
                  </li>
                  <Link to="/settings">
                    <i id="settings-icon" className="fas fa-cog"></i>
                  </Link>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/sell">Sell</Link>
                  </li>
                  <li>
                    <Link to="/your-items">Your Items</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        this.setState(
                          {
                            isLoggedIn: !this.state.isLoggedIn
                          },
                          () => localStorage.clear()
                        )
                      }
                      to="/sign-in"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="header-nav">
                <ul>
                  <li>
                    <h3>Kaydeal</h3>
                  </li>
                </ul>
              </nav>
            )}
            <Route
              exact
              path="/"
              render={props => (
                <Homepage
                  {...props}
                  itemIdForEdit={this.itemIdForEdit}
                  getUserId={this.getUserId}
                  items={this.state.items}
                />
              )}
            />
            <Route
              exact
              path="/sell"
              render={props => <SellForm {...props} />}
            />
            <Route exact path="/your-items" />
            <Route
              exact
              path="/sign-in"
              render={props => (
                <Signin setLoggedIn={this.setLoggedIn} {...props} />
              )}
            />
            <Route
              exact
              path="/sign-up"
              render={props => (
                <Signup setLoggedIn={this.setLoggedIn} {...props} />
              )}
            />
            <Route
              exact
              path="/settings"
              render={props => (
                <Settings
                  {...props}
                  username={this.state.username}
                  userId={this.state.userId}
                  isLoggedIn={this.state.isLoggedIn}
                  getUserSeller={this.getUserSeller}
                />
              )}
            />
            <Route
              exact
              path="/message-seller"
              render={props => (
                <MessageSeller {...props} thisUserId={this.state.thisUserId} />
              )}
            />
            <Route
              exact
              path="/your-items"
              render={props => <YourItems {...props} />}
            />
            <Route
              exact
              path="/edit-item"
              render={props => (
                <EditItems {...props} thisItemId={this.state.thisItemId} />
              )}
            />
            <Route
              exact
              path="/message-buyer"
              render={props => (
                <MessageBuyer {...props} thisBuyerId={this.state.thisBuyerId} />
              )}
            />
            <Route
              exact
              path="/edit-user"
              render={props => <UserInfoEdit {...props} />}
            />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
