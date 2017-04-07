// var greeter = require('./Greeter.js');
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router, 
	Route, 
	IndexRoute,
	Link, 
	hashHistory 
} from 'react-router';

import LoginView from './views/Login/LoginView';
import IndexView from './views/Index/IndexView';
import DashBoardView from './views/DashBoard/DashBoardView';

import RoleView from './views/Roles/RoleView';
import ManagersView from './views/Managers/ManagersView';
import SalesManView from './views/SalesMan/SalesManView';

import HistoryOrdersView from './views/HistoryOrders/HistoryOrdersView';
import CashAuditView from './views/CashAudit/CashAuditView';

import HistoryPayView from './views/HistoryPay/HistoryPayView';
import NewsView from './views/News/NewsView';


import Common from './common/common.less';
import Style from './index.less';

export default class Root extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				{/*登录页面*/}
				<Route component={IndexView} path="/"></Route>

				{/*后台所有页面总页*/}
				<Route component={IndexView} path="/index">
					<IndexRoute component={DashBoardView} />

					{/*后台首页*/}
					<Route component={DashBoardView} path="/dashboard"></Route>

					{/*权限管理*/}
						{/*角色*/}
						<Route component={RoleView} path="/rootManage/roles"></Route>
						{/*管理员*/}
						<Route component={ManagersView} path="/rootManage/managers"></Route>

					{/*员工管理*/}
						{/*业务员*/}
						<Route component={SalesManView} path="/staffManage/salesMan"></Route>

					{/*业务管理*/}
						{/*历史订单*/}
						<Route component={HistoryOrdersView} path="/businessManage/historyOrders"></Route>
						{/*财务管理*/}
							{/*打款审核*/}
							<Route component={CashAuditView} path="/businessManage/financialManage/cashAudit"></Route>
							{/*历史打款*/}
							<Route component={HistoryPayView} path="/businessManage/financialManage/historyPay"></Route>

					{/*系统管理*/}
						{/*新闻*/}
						<Route component={NewsView} path="/systemManage/news"></Route>

					{/*不存在页面
					<Route component={NotFoundPage} path='*'></Route>*/}
					{/* 其他重定向到 404 
            		<Redirect from='*' to='/Page404' />*/}

				</Route>

			</Router>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('cp-index')
);