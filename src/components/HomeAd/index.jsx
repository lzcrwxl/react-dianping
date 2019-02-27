import React from "react";

import "./style.less";

class HomeAd extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div id="home-ad">
        <h2>超级特惠</h2>
        <div className="ad-container clear-fix">
          {this.props.data.map((item, index) => {
            return (
              <div key={index} className="ad-item float-left">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={require('../../static/demo.png')} alt={item.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeAd;
