import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

import Menus from '../../components/Menus/Menus';
import MainHeader from '../../components/MainHeader/MainHeader';
import LoginView from '../Login/LoginView';
import Footer from '../../components/Footer/Footer';

import LayoutStyle from '../../common/layout.less';
import CONFIG from '../../config/config';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      isLogined: false,
      userName: '',
      userId: 0
    });
  }

  componentWillMount(){
    //获取登录信息
    //localStorage.setItem('IntelLoginedStr', '');
    let userInfoStr = localStorage.getItem(CONFIG.LOGINLOCALSTORAGESTR);
    let userInfo = (userInfoStr == '' || userInfoStr == undefined || userInfoStr == null) ? '' : JSON.parse(userInfoStr);
    if(userInfo == ''){
      return;
    }

    //如果登录信息存在
    if(userInfo[0].userId  != '' && userInfo[0].userId != undefined && userInfo[0].userId != null) {
      this.setState({
        isLogined: true,
        userName: localStorage.getItem('userName'),
        userId: localStorage.getItem('userId')
      })
    }
  }

  //登录成功后更新页面
  updateLoginState(){
    this.setState({
      isLogined: true,
      userName: localStorage.getItem('userName'),
      userId: localStorage.getItem('userId')
    });
  }

  //退出登录
  loginOut(){
    this.setState({
      isLogined: false
    });
    localStorage.setItem(CONFIG.LOGINLOCALSTORAGESTR, '');
  }

  render() {

    /**
     * 判断是否登录
     */
    const DisView = this.state.isLogined
            ? <div>
              <aside className="sider">
                {/*左侧 侧边栏*/}
                <div className="IRC_logo">
                  智能收件云平台
                </div>
                <Menus selectedKeys={['sub1']}/>
              </aside>

              {/**这里面的内容会被子路由给代替 中间公共部分**/}
              <div className="main">
                {/*头部*/}
                <MainHeader loginOut={this.loginOut.bind(this)} />

                <div className="content">
                  {this.props.children}
                </div>

                {/**公共页脚**/}
                <Footer />
                {/**公共页脚**/}
              </div> </div> : <LoginView updateLoginState={this.updateLoginState.bind(this)} />;

    return (

        <div className="layout">
        {/*只能有一个根元素 此注释不能写在根元素外面，会报Module build failed: SyntaxError: Unexpected token, expected 错误*/}
        {DisView}
          
        </div>
    )
  }
}
export default Index;

