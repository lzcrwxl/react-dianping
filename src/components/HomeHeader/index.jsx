import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.less";

import SearchInput from "../../components/SearchInput";

@withRouter
class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down" />
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
  enterHandle(value) {
    this.props.history.push('/search/all/'+encodeURIComponent(value))
  }
}

export default HomeHeader;
