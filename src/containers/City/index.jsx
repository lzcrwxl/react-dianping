import React from "react";
import { connect } from "react-redux";
import { updateInfo } from "../../redux/actions";
import Header from "../../components/Header";
import CityList from "../../components/CityList";
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../constants'

import "./style.less";

@connect(
  state => state,
  { updateInfo }
)
class City extends React.Component {
  render() {
    return (
      <div>
        <Header title="选择城市" />
        <div className="current-city">{this.props.userinfo.cityName}</div>
        <CityList changeFn={this.changeCity.bind(this)} />
      </div>
    );
  }
  componentDidMount(){
  }
  changeCity(newCity) {
    if (newCity == null) {
      return
    }
    let cityName=this.props.userinfo.cityName
    cityName = newCity
    this.props.updateInfo({cityName})
    LocalStore.setItem(CITYNAME,newCity)
    console.log( this.props.history)
    this.props.history.push('/')
   
  }
}

export default City;
