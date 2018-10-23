import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import History from "./components/layout/History";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Scrape from "./components/layout/Scrape";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/history" component={History} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/scrape/:item" component={Scrape} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
