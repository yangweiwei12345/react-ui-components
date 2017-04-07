import React from 'react';
import ReactDOM from 'react-dom';

import InputStyle from './input.less';

class Input extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			focus: false
		};
	}
	handleOnFocus(){
		this.setState({
			focus: true
		});
	}
	handleOnBlur(){
		this.setState({
			focus: false
		});
	}

	render(){
		return (
			<div className={this.state.focus ? "cp-input-icon active" : "cp-input-icon"}>
				<img className="" src={this.props.imgSrc} />
				<input 
					className="" 
					type={this.props.typeText} 
					name={this.props.name}
					value={this.props.value}
					placeholder={this.props.placeholderText} 
					onChange={this.props.updateInputValue}
					onFocus={this.handleOnFocus.bind(this)}
					onBlur={this.handleOnBlur.bind(this)} />
			</div>
		);
	}
}

export default Input;