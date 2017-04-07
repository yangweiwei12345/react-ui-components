import React from 'react';
import { Icon, Badge } from 'antd';

import MainHeaderStyle from './main-header.less';
import CONFIG from '../../config/config';

import { Spin } from 'antd';

class MainHeader extends React.Component {
	constructor(props){
		super(props);

		this.state = ({
			userInfo: []
		});
	}

	componentWillMount(){
		let userInfoStr = localStorage.getItem(CONFIG.LOGINLOCALSTORAGESTR);
		if(userInfoStr == '' || userInfoStr == undefined || userInfoStr == null){
			this.props.loginOut();
			return;
		}
		let userInfo = JSON.parse(userInfoStr);
		this.setState({
			userInfo: userInfo
		});
	}

	//清除用户登录信息后，跳转页面判断
	componentWillReceiveProps(){
		let userInfoStr = localStorage.getItem(CONFIG.LOGINLOCALSTORAGESTR);
		if(userInfoStr == '' || userInfoStr == undefined || userInfoStr == null){
			this.props.loginOut();
			return;
		}
		let userInfo = JSON.parse(userInfoStr);
		this.setState({
			userInfo: userInfo
		});
	}

	loginOutAct(){
		let self = this;
	
		//退出登录
		self.props.loginOut();
	}

	render(){
		return (
			<div className="IRC_mian_header clearfix">
				<ul>
					<li className="pull-right" onClick={this.loginOutAct.bind(this)} style={{ cursor: 'pointer' }}>
						<Icon style={{fontSize: '20px', verticalAlign: '-2px', marginRight: '10px'}} type="logout" /> <span>退出系统</span>
					</li>
					<li className="pull-right">
						<Badge dot>
							<img src=""/> <span>{this.state.userInfo[0].userName}</span>
						</Badge>
					</li>
				</ul>
			</div>
		);
	}
}

export default MainHeader;