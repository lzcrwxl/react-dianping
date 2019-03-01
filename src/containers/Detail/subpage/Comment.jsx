import React from "react";
import ListComponent from "../../../components/CommentList";
import { getCommentData } from "../../../fetch/detail/detail";
import LoadMore from "../../../components/LoadMore";
import "./style.less";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false,
      isLoading: false,
      page: 0
    };
  }
  render() {
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        {this.state.data.length ? (
          <ListComponent data={this.state.data} />
        ) : (
          <div>{/* 加载中... */}</div>
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
  // 获取首页数据
  loadFirstPageData() {
    const id = this.props.id;
    const result = getCommentData(0, id);
    this.resultHandle(result);
  }
  // 加载更多数据
  loadMoreData() {
    // 记录状态
    this.setState({
      isLoading: true
    });

    const id = this.props.id;
    const page = this.state.page;
    const result = getCommentData(page, id);
    this.resultHandle(result);

    // 增加 page 技术
    this.setState({
      isLoading: false
    });
  }
  // 处理数据
  resultHandle(result) {
    result
      .then(res => {
        return res.json();
      })
      .then(json => {
        // 增加 page 技术
        const page = this.state.page;
        this.setState({
          page: page + 1
        });

        const hasMore = json.hasMore;
        const data = json.data;

        this.setState({
          hasMore: hasMore,
          // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
          data: this.state.data.concat(data)
        });
      })
      .catch(ex => {
        // if (__DEV__) {
          console.error("详情页获取用户评论数据出错, ", ex.message);
        // }
      });
  }
}

export default Comment;
