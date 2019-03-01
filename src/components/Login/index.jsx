import React from "react";

import "./style.less";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ""
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="输入手机号"
          onChange={this.changeHandle.bind(this)}
          value={this.state.phone}
        />
      </div>
    );
  }
  changeHandle(e){
    this.setState({
      phone:e.target.value
    })
  }
}

export default LoginComponent;
