import React from "react";
import "./style.less";

class LoadMore extends React.Component {
  render() {
    return (
      <div className="load-more" ref="wrapper">
        {this.props.isLoading ? (
          <span>加载中...</span>
        ) : (
          <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
        )}
      </div>
    );
  }
  loadMoreHandle(){
    this.props.loadMoreFn()
  }
  componentDidMount(){
    const loadMoreFn = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    function callback() {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if(top&&top<windowHeight){
        loadMoreFn()
      }
      console.log(top)
    }
    window.addEventListener('scroll',()=>{
      if(this.props.isLoading){
        return
      }
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback,50)
    },false)
  }
}

export default LoadMore;
