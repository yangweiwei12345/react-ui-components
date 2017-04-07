import React from 'react';
import { Icon } from 'antd';

import SearchInputStyle from './search-input.less';

class SearchInput extends React.Component {
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
			<div className={ this.state.focus ? "search-input-content active" : 'search-input-content' }>
				<Icon type={this.props.icon} />
				<input className="search-input-input"
					   type="text" 
					   placeholder={this.props.placeholderText}
					   onFocus={this.handleOnFocus.bind(this)}
					   onBlur={this.handleOnBlur.bind(this)} />
				<input className="search-input-button" type="button" value={this.props.text} />
			</div>
		);
	}
}
export default SearchInput;