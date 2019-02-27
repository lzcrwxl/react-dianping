import React from "react";
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'
import Ad from './subpage/Ad.jsx'
import List from './subpage/List.jsx'

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
        <div style={{height:'15px'}}></div> 
        <Ad></Ad> 
        <List cityName={cityName}></List>
      </div>
    );
  }
}

export default Home
