import React from "react";

import "./style.less";

class Header extends React.PureComponent {
  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={() => window.history.back(-1)}>
          <i className="icon-chevron-left" />
        </span>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
