import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './components/AutoComplete/AutoComplete';
import Layer from './components/Layer/Layer';

export default class IndexView extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			animation: 'zoom'
		};
	}

	show (animation) {
		this.setState({
			animation, 
			visible: true
		});
	}

	hide () {
		this.setState({
			visible: false
		});
	} 

	test(){}

	render(){
		let types = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
		let buttons = types.map((value, index) => {
			let style = {
				animationDelay: index * 100 + 'ms',
				WebkitAnimationDelay: index * 100 + 'ms'
			};

			return (
				<button key={index} className="btn scale" onClick={this.show.bind(this, value)} style={style}>
					{value}
				</button>
			);
		});

		return (
			<div>
				<AutoComplete 
					value=''
					options={['10000（一涛）', '10001（张三）']}
					onValueChange={this.test}
					/>
				<div style={{ marginTop: '100px' }}>
				<div className="btn-area">
					{buttons}
				</div>
				<Layer visible={this.state.visible}
					   onClose={this.hide.bind(this)}
					   animation={this.state.animation}
				>
					<div className="header">Layer</div>
					<div className="body">A React modal with animation.</div>
					<button className="layer-confirm-btn" onClick={this.hide.bind(this)}>ok</button>
					<button className="layer-cancel-btn" onClick={this.hide.bind(this)}>close</button>
				</Layer>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<IndexView />,
	document.getElementById('cp-index')
);