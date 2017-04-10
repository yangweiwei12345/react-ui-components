import React from 'react';
const PropTypes = React.PropTypes;

import style from './auto-complete.less';

function getItemValue(item) {
	return item.value || item;
}

class AutoComplete extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			displayValue: '',
			activeItemIndex: -1,
			value: this.props.value
		};

		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	/*
	 * 用户输入、选择列表项的时候重置内部状态(晴空displayName、设置activeItemIndex为-1)，
     * 并通过回调将新的值传递给组件使用者
     */
	handleChange (value) {
		this.setState({
			activeItemIndex: -1,
			displayValue: ''
		});
		this.props.onValueChange(value);
	}

	/*
	 * 判断当前按下的键是否为上下方向键或回车键，
	 * 如果是上下方向键则根据方向设置当前被选中的列表项；
	 * 如果是回车键就并且大分钱有选中状态的李诶包项，则调用handleChange
	 */
	handleKeyDown (e) { 
		const { activeItemIndex } = this.state;
		const { options } = this.props;

		switch (e.keyCode) {
			//13为回车键的键码
			case 13: {
				//判断是否有列表项处于选中状态
				if(activeItemIndex >= 0) {
					//防止按下回车键后自动提交啊表单
					e.preventDefault();
					e.stopPropagation();
					this.handleChange(getItemValue(options[activeItemIndex]));
				}
				break;
			}
			//38为上方向键，40为下方向键
			case 38:
			case 40: {
				e.preventDefault();
				//使用moveItem方法对更新或取消选中项
				this.moveItem(e.keyCode === 38 ? 'up' : 'down');
			}
			break;
		}
	}

	moveItem(direction) {
		const {activeItemIndex} = this.state;
		const {options} = this.props;
		const lastIndex = options.length - 1;
		let newIndex = -1;

		//计算新的activeItemIndex
		if (direction === 'up') {
			if(activeItemIndex === -1) {
				//如果没有选中则选中最后一项
				newIndex = lastIndex;
			}
			else
			{
				newIndex = activeItemIndex - 1;
			}
		} else {
			if(activeItemIndex < lastIndex) {
				newIndex = activeItemIndex + 1;
			}
		}

		//获取新的displayValue
		let newDisplayValue = '';
		if(newIndex >= 0) {
			newDisplayValue = getItemValue(options[newIndex]);
		}

		//更新状态
		this.setState({
			displayValue: newDisplayValue,
			activeItemIndex: newIndex
		});

	}

	handleEnter (index) {
		const currentItem = this.props.options[index];
		this.setState({
			activeItemIndex: index,
			displayValue: getItemValue(currentItem)
		});
		console.log(currentItem);
	}

	handleLeave () {
		this.setState({
			activeItemIndex: -1,
			displayValue: ''
		});
	}

	render(){
		const {displayValue, activeItemIndex} = this.state;
		const {value, options} = this.props;
		console.log(this.props);

		return (
			<div className="wrapper">
				<input
					value={this.state.value} 
					onChange={ e => this.handleChange(e.target.value) }
					onKeyDown={this.handleKeyDown}
				/>
				{
					options.length > 0 && (
						<ul className="options" onMouseLeave={this.handleLeave}>
							{
								options.map((item, index) => {
									return (
										<li key={index} 
											className={activeItemIndex === index ? 'active' : ''}
											onMouseEnter={ () => this.handleEnter(index) }
											onClick={ () => this.handleChange(getItemValue(item)) }
										>
											{item.text || item}
										</li>
									);
								})
							}
						</ul>
					)
				}
			</div>
		);
	}
}

AutoComplete.propTypes = {
	value: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onValueChange: PropTypes.func.isRequired
};

export default AutoComplete;