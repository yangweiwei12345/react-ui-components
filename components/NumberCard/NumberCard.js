import React from 'react';
import { Card, Icon } from 'antd';

import NumberCordStyle from './number-card.less';

class NumberCard extends React.Component {
	render() {
		return (
			<Card className="clearfix" bordered={false} bodyStyle={{padding: 0, height: '100px', lineHeight: '100px', borderRadius: 0}} >
				<div className="nc-icon pull-left" style={{ backgroundColor: this.props.color }}>
					<Icon type={this.props.icon} />
				</div>
				<div className="nc-content">
					<div className="nc-title" style={{ color: this.props.color }}>{this.props.title}</div>
					<div className="nc-number">{this.props.number}</div>
				</div>
			</Card>
		);
	}
}

export default NumberCard;