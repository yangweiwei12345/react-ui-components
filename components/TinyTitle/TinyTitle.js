import React from 'react';

/**
 * @props title 显示文字
 		  color 边框线颜色
 */
class TinyTitle extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			fontSize: '14px',
			color: '#666',
			borderLeftWidth: '2px',
			borderLeftColor: this.props.color,
			borderLeftStyle: 'solid',
			padding: '1px 10px'
		};
	}
	componentDidMount(){

	}
	render(){
		return (
			<label style={ this.style }>{this.props.title}</label>
		);
	}
}

export default TinyTitle;