import React from "react";
import { getListData } from "../../../fetch/home/home.js";
import ListComponent from "../../../components/List";
import LoadMore from "../../../components/LoadMore";
import "./style.less";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],  //存储列表信息
      hasMore: false,
      isLoading:false,
      page:1
    };
  }
  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <div>
          {this.state.data.length ? (
            <ListComponent data={this.state.data} />
          ) : (
            <div>加载中...</div>
          )}
          {
            this.state.hasMore
            ? <LoadMore isLoading={this.state.isLoading} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore>
            :''
          }
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  loadMoreData(){
    this.setState({
      isLoading:true
    })
    const cityName = this.props.cityName;
    const page = this.state.page
    const result = getListData(cityName,page);
    this.resultHandle(result);
    this.setState({
      page:page+1,
      isLoading:false
    })
  }
  loadFirstPageData() {
    const cityName = this.props.cityName;
    const result = getListData(cityName, 0);
    this.resultHandle(result);
  }
  resultHandle(result) {
    result
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        const hasMore = json.hasMore;
        const data = json.data;
        this.setState({
          data:this.state.data.concat(data),
          hasMore
        });
      });
  }
}

export default List;
