import React, { Component } from "react";
import LocalStore from './util/localStore'
import {CITYNAME} from './constants'
import { connect } from 'react-redux';
import {updateInfo} from './redux/actions' 
import {  withRouter } from "react-router-dom";

@withRouter
@connect(
  null,
  {updateInfo}
)

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
    this.props.updateInfo({cityName})

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
        {this.state.initDone ? 
          this.props.children
          : 
          <div>加载中。。。。</div>}
      </div>
    );
  }
}

export default App
