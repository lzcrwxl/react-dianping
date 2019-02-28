import React from "react";

import "./style.less";

class CityList extends React.Component {
  render() {
    const cityMap = [
      { name: "北京", id: 1 },
      { name: "上海", id: 2 },
      { name: "杭州", id: 3 },
      { name: "广州", id: 4 },
      { name: "苏州", id: 5 },
      { name: "深圳", id: 6 },
      { name: "南京", id: 7 },
      { name: "天津", id: 8 },
      { name: "重庆", id: 9 }
    ];
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {cityMap.map((item, index) => {
            return (
              <li key={item.id}>
                <span onClick={this.clickHandle.bind(this, item.name)}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  clickHandle(newCity) {
    let changeFn = this.props.changeFn;
    console.log(newCity);
    changeFn(newCity);
  }
}

export default CityList;
