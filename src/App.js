import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import City from "./containers/City";
import User from "./containers/User";
import Search from "./containers/Search";
import Detail from "./containers/Detail";
import NotFound from "./containers/404";
import LocalStore from './util/localStore'
import {CITYNAME} from './constants'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from './redux/actions'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      initDone: false
    };
  }
  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME)
    if(cityName == null){
      cityName = '上海'
    }
    console.log(cityName)
    this.props.userInfoActions.update({
      cityName
    })
    setTimeout(() => {
      this.setState({
        initDone:true
      })
    }, 1000);
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    return this.state.hasError ? (
      <h2>页面出错</h2>
    ) : (
      <div>
        {this.state.initDone ? (
          <BrowserRouter>
            <Switch>
              <Redirect from="/" exact to="/Home" />
              <Route path="/Home" component={Home} />
              <Route path="/City" component={City} />
              <Route path="/User" component={User} />
              <Route path="/search/:type(/:keyword)" component={Search} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        ) : (
          <div>加载中。。。。</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
