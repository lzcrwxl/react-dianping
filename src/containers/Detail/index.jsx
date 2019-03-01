import React from "react";
import Header from '../../components/Header'
import Info from './subpage/info'
import Comment from './subpage/Comment'

class Detail extends React.Component {
  render() {
     const id = this.props.match.params.id;
    return (
      <div>
        <Header title="商户详情"></Header>
        <Info id={id}></Info>
        <Comment id={id}></Comment>
      </div>
    );
  }
}

export default Detail;
