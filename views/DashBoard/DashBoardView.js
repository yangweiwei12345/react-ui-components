import React from 'react';

import NumberCord from '../../components/NumberCard/NumberCard';
import TinyTitle from '../../components/TinyTitle/TinyTitle';
import SearchInput from '../../components/SearchInput/SearchInput';
import Ueditor from '../../components/Ueditor/Ueditor';
import { DatePicker, message, Row, Col } from 'antd';
//富文本编辑器
import {Editor, EditorState} from 'draft-js';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

  }
  handleChange(date) {
    
  }
  render() {
    return (
      <div>
        {/*数据卡片*/}
        <Row gutter={16}>
          <Col xs={{ span: 12}} md={{ span: 12 }} lg={{ span: 6 }} style={{ marginBottom: '16px' }}>
            <NumberCord color="#ff7f4f" icon="message" title="TOTAL SALES" number="215,645"/>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ marginBottom: '16px' }}>
            <NumberCord color="#2bbee3" icon="message" title="TOTAL SALES" number="215,645"/>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ marginBottom: '16px' }}>
            <NumberCord color="#b890e0" icon="message" title="TOTAL SALES" number="215,645"/>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ marginBottom: '16px' }}>
            <NumberCord color="#4bcbc0" icon="message" title="TOTAL SALES" number="215,645"/>
          </Col>
        </Row>

        <TinyTitle color="#006cec" title="数据统计" />
        <SearchInput icon="search" placeholderText="输入搜索内容" text="搜索" />

        {/*折线图*/}


        {/*表格*/}


        {/*表单*/}

        {/*富文本编辑器*/}
        <Ueditor /> 
      </div>
    );
  }
}

export default DashBoard;