import React from "react";
import { withRouter } from "react-router-dom";
import SearchInput from "../SearchInput";

import './style.less'

@withRouter

class SearchHeader extends React.Component {
  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span
          className="back-icon float-left"
          onClick={this.clickHandle.bind(this)}
        >
          <i className="icon-chevron-left" />
        </span>
        <div className="input-container">
          <i className="icon-search" />
          &nbsp;
          <SearchInput
            value={this.props.keyword || ""}
            enterHandle={this.enterHandle.bind(this)}
          />
        </div>
      </div>
    );
  }
  clickHandle() {
    window.history.back();
  }
  enterHandle(value) {
    this.props.history.push("/search/all/" + encodeURIComponent(value));
  }
}

export default SearchHeader;
