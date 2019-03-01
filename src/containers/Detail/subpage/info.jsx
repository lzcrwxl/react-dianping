import React from "react";
import { getInfoData } from "../../../fetch/detail/detail";
import DetailInfo from "../../../components/DetailInfo";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false
    };
  }
  render() {
    const {info} = this.state
    return <div>{this.state.info ? <DetailInfo data={info}/> : ""}</div>;
  }
  componentDidMount() {
    const { id } = this.props;
    let result = getInfoData(id);
    result
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({ info: json });
      });
  }
}

export default Info;
