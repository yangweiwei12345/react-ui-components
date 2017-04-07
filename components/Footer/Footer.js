import React from 'react';
import ReactDOM from 'react-dom';

import FooterStyle from './footer.less';

class Footer extends React.Component {
	render(){
		return (
			<div className="cp-footer clearfix">
				<div className="cp-footer-left pull-left text-center">
					Copyright 2017 All Right 版权所有 浙ICP 备11050044 号
				</div>
				<div className="cp-footer-right pull-right text-center">
					<a href="javascript:;">联系我们</a>
					<span>服务热线：400-123-4567</span>
				</div>
			</div>
		);
	}
}

export default Footer;