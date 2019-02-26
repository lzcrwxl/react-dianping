import React from "react";
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'

@connect(
  state=>state.userinfo
)
class Home extends React.Component {
  render() {
    let cityName = this.props.cityName;
    return (
      <div>
        <HomeHeader cityName={cityName}/>
        <Category></Category>  
      </div>
    );
  }
}

export default Home
