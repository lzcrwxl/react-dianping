import React from "react";
import {withRouter} from "react-router-dom";
import "./style.less";

@withRouter
class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <input
        type="text"
        className="search-input"
        placeholder="请输入关键字"
        value={this.state.value}
        onChange={this.ChangeHandle.bind(this)}
        onKeyUp={this.keyUpHandle.bind(this)}
      />
    );
  }
  componentDidMount(){
    this.setState({
      value:this.props.value || ''
    })
  }
  ChangeHandle(e){
    let value = e.target.value
    this.setState({value})
  }
  keyUpHandle(e){
    if(e.keyCode===13){
      this.props.enterHandle(e.target.value)
    }
  }
}

export default SearchInput;
