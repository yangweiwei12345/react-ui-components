import React from 'react';
import { Menu, Icon } from 'antd';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            current: 'sub1',
            openKeys: []
        }
    }    
    handleClick(e){
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1),
        });
    }
    onToggle(openKeys){
        this.setState({
           openKeys: openKeys,
        });
    }

	render(){
		return (
			<Menu onClick={this.handleClick.bind(this)}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onToggle.bind(this)}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                    mode="inline">
                    <Menu.Item key="sub1">                    
                        <IndexLink to="/index"><span><Icon type="home" style={{'fontSize': '20px'}} /><span>欢迎页</span></span></IndexLink>
                    </Menu.Item>    
                    <SubMenu key="sub2" title={<span><Icon type="appstore-o" style={{'fontSize': '20px'}} /><span>权限管理</span></span>}>
                        <Menu.Item key="2"><Link to="/rootManage/roles">角色</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/rootManage/managers">管理员</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bars" style={{'fontSize': '20px'}} /><span>员工管理</span></span>}>
                        <Menu.Item key="4"><Link to="/staffManage/salesMan">业务员</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="bar-chart" style={{'fontSize': '20px'}} /><span>业务管理</span></span>}>
                        <Menu.Item key="5"><Link to="/businessManage/historyOrders">历史订单</Link></Menu.Item>

                        <SubMenu key="sub5" title={<span><Icon type="bar-chart" style={{'fontSize': '20px'}} /><span>财务管理</span></span>}>
                            <Menu.Item key="6"><Link to="/businessManage/financialManage/cashAudit">打款审核</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/businessManage/financialManage/historyPay">历史打款</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="bar-chart" style={{'fontSize': '20px'}} /><span>系统管理</span></span>}>
                        <Menu.Item key="5"><Link to="/systemManage/news">新闻</Link></Menu.Item>

                    </SubMenu>
                </Menu>
		);
	}
}

export default Menus;