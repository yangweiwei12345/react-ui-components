import React from 'react';
import ReactDOM from 'react-dom';
import HeaderStyle from './header.less';

class Header extends React.Component {
	render(){
		return (
			<div className="cp-header">
				<div className="cp-header-title">{this.props.title}</div>
			</div>
		);
	}
}

export default Header;