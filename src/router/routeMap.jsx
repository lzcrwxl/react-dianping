import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import App from "../App";
import Home from "../containers/Home";
import City from "../containers/City";
import User from "../containers/User";
import Search from "../containers/Search";
import Detail from "../containers/Detail";
import NotFound from "../containers/404";

class RouteMap extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/City" component={City} />
            <Route path="/User" component={User} />
            <Route path="/search/:category/:keyword?" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
