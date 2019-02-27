import React from "react";
import ListItem from "./item";

import "./style.less";

class List extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="list-container">
        {data.map((item, index) => {
          return <ListItem key={index} data={item} />;
        })}
      </div>
    );
  }
}

export default List;
