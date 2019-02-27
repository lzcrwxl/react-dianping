import React from "react";
import { connect } from "react-redux";
import { updateInfo } from "../../redux/actions";
import Header from '../../components/Header'


@connect(
  state => state,
  { updateInfo }
)
class City extends React.Component {
  render() {
    return (
      <div>
        <Header title="选择城市"></Header>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.userinfo);
    console.log(this.props.updateInfo);
  }
}

export default City;
