import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './components/AutoComplete/AutoComplete';

export default class IndexView extends React.Component{
	test(){}

	render(){
		return (
			<div>
				<AutoComplete 
					value=''
					options={['10000（一涛）', '10001（张三）']}
					onValueChange={this.test}
					/>
			</div>
		);
	}
}

ReactDOM.render(
	<IndexView />,
	document.getElementById('cp-index')
);