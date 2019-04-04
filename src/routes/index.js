import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from "../container";

const history=createHistory();
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route  component={Home} exact path="/"/>
        </Switch>
      </Router>
    );
  }
}
