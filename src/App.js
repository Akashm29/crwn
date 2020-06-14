import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./styles.css";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPage from "./components/sign-in-and-signup/sign-in-and-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }

      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
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
