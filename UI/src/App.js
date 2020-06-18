import React, { Component } from "react";
import Login from "./components/Login";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from './components/HomePage';
import Details from "./components/details.js"

const wrapperDashboard = Wrapper(Home);
const wrapperDetails = Wrapper(Details);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={wrapperDashboard} />
            <Route exact path="/details" component={wrapperDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
