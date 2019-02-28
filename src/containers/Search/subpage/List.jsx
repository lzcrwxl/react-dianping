import React from "react";
import { getSearchData } from "../../../fetch/search/search";
import ListComponent from "../../../components/List";
import LoadMore from "../../../components/LoadMore";
import { connect } from "react-redux";

const initialState = {
  data: [], //存储列表信息
  hasMore: false,
  isLoading: false,
  page: 0
};

@connect(state => state)
class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <ListComponent data={this.state.data} />
        ) : (
          <div>加载中...</div>
        )}
        {this.state.hasMore ? (
          <LoadMore
            isLoading={this.state.isLoading}
            loadMoreFn={this.loadMoreData.bind(this)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const category = this.props.category;

    // 搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category === prevProps.category) {
      return;
    }

    // 重置 state
    this.setState(initialState);
    // 重新加载数据
    this.loadFirstPageData();
  }
  loadMoreData() {
    this.setState({
      isLoading: true
    });
    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword || "";
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);
    this.resultHandle(result);

    // 更新状态
    this.setState({
      isLoading: false
    });
  }
  loadFirstPageData() {
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || "";
    const category = this.props.category;
    const result = getSearchData(0, cityName, category, keyword);
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
          data: this.state.data.concat(data),
          hasMore
        });
      });
  }
}

export default SearchList;
