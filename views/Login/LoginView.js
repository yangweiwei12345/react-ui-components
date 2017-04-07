import React from 'react';
import ReactDOM from 'react-dom';
import  {
  hashHistory
} from 'react-router';

import LoginStyle from './login.less';
import Header from '../../components/header/Header';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import SelectSearch from '../../components/SelectBox/SelectBox';

import { Spin } from 'antd';

//配置信息
import CONFIG from '../../config/config';

const options = [
    {name: '杭州嘉珏网络科技有限公司', value: '1'},
    {name: '杭州蓝鼎软件开发有限公司', value: '2'}
];

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: null,
			colors: [],
			userCompany: '9527',
			userName: 'yang',
			userPassword: '123456',
			userId: '1',
			loading: false
		};
	}
	handleChange(){
		this.setState({
			color: color
		});
	}
	//输入框之变化更新
	updateCompanyValue(e){
		let value = e.target.value;
		this.setState({
			userCompany: value
		});
	}
	updateUserNameValue(e){
		let value = e.target.value;
		this.setState({
			userName: value
		});
	}
	updatePasswordValue(e){
		let value = e.target.value;
		this.setState({
			userPassword: value
		});
	}

	//表单提交处理函数
	handleSubmit(e) {
        e.preventDefault();
        let self = this;

        let userInfo = [{
        	userCompany: self.state.userCompany,
        	userName: self.state.userName,
        	userId: self.state.userId
        }];

        //显示加载条
        self.setState({
        	loading: true
        });

        setTimeout(function(){
        	self.setState({
        		loading: false
        	});

        	localStorage.setItem(CONFIG.LOGINLOCALSTORAGESTR, JSON.stringify(userInfo));

        	//更新页面登录状态
        	self.props.updateLoginState();  
        }, 2000);

        // 表单的路由处理  
        // hashHistory.push({
        // 	pathname: '/index'
        // }); 
     
    }

	render(){
		return (
			<div className="cp-container">

				{/**头部**/}
				<Header title="智能收件云平台" />

				{/**中间登录部分**/}
				<div className="cp-content clearfix">
					<div className="cp-content-left pull-left">
						<blockquote>
						<p className="cp-content-left-small">服务热线：400-123-4567</p>
						<p className="cp-content-left-big">致力于行业领跑者</p>
						<p className="cp-content-left-small">全国最专业的站点智能收件系统平台</p>
						</blockquote>
					</div>
					<div className="cp-content-right pull-right">
						
						<div className="cp-content-login">
							<Spin spinning={this.state.loading} tip="加载中...">
							<form onSubmit={this.handleSubmit.bind(this)}>
								<p className="cp-content-title text-center">欢迎登录</p>
								
								{/*<SelectSearch options={options} value="1" name="company" placeholder="选择公司" />*/}
								<Input name="userCompany" value={this.state.userCompany} updateInputValue={this.updateCompanyValue.bind(this)} imgSrc={require("../../img/compony.png")} typeText="text" placeholderText="公司ID" />
								<Input name="userName" value={this.state.userName} updateInputValue={this.updateUserNameValue.bind(this)} imgSrc={require("../../img/username.png")} typeText="text" placeholderText="用户名／手机号／邮箱" />
								<Input name="userId" value={this.state.userPassword} updateInputValue={this.updatePasswordValue.bind(this)} imgSrc={require("../../img/password.png")} typeText="password" placeholderText="6-16位字母／数字" />
								
								<button className="cp-button-submit" type="submit">
									登录
								</button>
							</form>
							</Spin>
						</div>
					</div>
				</div>

				{/**底部footer**/}
				<Footer />
			</div>
		);
	}
}

export default Login;