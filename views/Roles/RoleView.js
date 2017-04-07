/**
 * 角色
 * 杨伟韦
 * 2017-04-05
 */
import React from 'react';
import reqwest from 'reqwest';
import TinyTitle from '../../components/TinyTitle/TinyTitle';
import { Row, Col, Table, Button, Icon, Popconfirm, Modal, message, Form, Input } from 'antd';

const FormItem = Form.Item;

class Role extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      data: [],
      pagination: {
        showQuickJumper: true,  //分也快速跳转输入框
        showTotal(total = 0, range = [1, 10]){
          return (
            <span>当前 {range[0]} - {range[1]} 条 - 总共 {total} 条</span>
          );
        }//{(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      },
      loading: false,
      visible: false
    });

    /*表头信息*/
    this.columns = [{
            title: 'id',
            dataIndex: 'id',
            width: '20%',
          }, {
            title: '名称',
            dataIndex: 'name',
            width: '40%',
          }, {
            title: '添加时间',
            dataIndex: 'add_time',
            width: '20%',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record, index) => {
              //console.log(text, record);
              return (
                <span>
                  <Button type="primary" onClick={ () => this.editAndAddNews(index, this) }>编辑</Button>                 
                  <Button type="danger" onClick={ () => this.delShowConfirm(index, this) }>删除</Button>                  
                </span>
              );
            },
            width: '20%'
          }
          ];

  }

  /*分页数据请求*/
  handleTableChange(pagination, filters, sorter) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      filters,
    });
  }

  /*数据请求*/
  fetchData(params = {}) {
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = this.state.pagination;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  /*删除确认弹出框*/
  delShowConfirm(index = 0, _this = null) {
    Modal.confirm({
      title: '确认删除此条公告吗？',
      iconType: 'none',
      confirmLoading: true,
      content: '',
      okText: '确认',
      cancelText: '取消',
      onOk (){
        const dataSource = _this.state.data;
        dataSource.splice(index, 1);
        _this.setState({
          data: dataSource
        });

      },
      onCancel(){
        message.success('取消');
      }
    });
  }

  /*编辑和添加公告*/
  editAndAddNews(index = -1, _this = null){
    //true 添加，false 编辑
    const flag = index == -1 ? true : false;

    //显示弹出框
    _this.setState({
      visible: true
    });

    //添加
    if(index){

    }
  }

  /*添加和编辑确认按钮点击事件*/
  handleOk(){

    this.setState({
      visible: false
    });

  }
  /*添加和编辑取消按钮点击事件*/
  handleCancel(){

    this.setState({
      visible: false
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="" style={{ backgroundColor: '#fff', padding: '30px' }}>
        <div className="clearfix" style={{ marginBottom: '15px' }}>
          <div className="pull-left">
            <TinyTitle title="角色列表" color="#006cec" />
          </div>
          <div className="pull-right">
            <Button type="primary" value="large"><Icon type="plus" /> 添加角色</Button> 
          </div>
        </div>
        <Table columns={this.columns}
          rowKey={record => record.registered}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange.bind(this)}
          bordered
        />

        <Modal title="添加公告" 
               visible={this.state.visible}
               wrapClassName="vertical-center-modal"
               onOk={this.handleOk.bind(this)} 
               onCancel={this.handleCancel.bind(this)}>
          
          
        </Modal>

      </div>
    );
  }
}

export default Role;