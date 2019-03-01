import React from "react";
import { connect } from "react-redux";
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

@connect(state => state)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: true
    };
  }
  render() {
    return (
      <div>
        <Header title="登陆"></Header>
        {this.state.checking ? <div>等待中</div> : <LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>}
      </div>
    );
  }
  componentDidMount() {
    this.doCheck();
  }
  loginHandle(username){
    const actions = this.props
    const {userinfo} = this.props
    userinfo.username = username
    actions.update(userinfo)
    const params = this.props.params
    const router = params.router
    if(router){
      this.props.history.push(router)
    }else {
      this.goUserPage()
    }
  }
  doCheck() {
    const { userinfo } = this.props;
    if (userinfo.username) {
      // 已经登陆
      this.goUserPage();
    } else {
      //尚未登陆
      this.setState({
        checking: false
      });
    }
  }
  goUserPage() {
    this.props.history.push("/User");
  }
}

export default Login;
