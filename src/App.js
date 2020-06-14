import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./styles.css";

import HomePage from "./pages/homepage/homepage.component";
import shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPage from "./components/sign-in-and-signup/sign-in-and-signup.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shop} />
          <Route path="/signIn" component={signInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
