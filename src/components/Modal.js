import React from 'react'
import { Modal, Button ,Input } from 'antd';


class MyModal extends React.Component {
  state = { visible: false,name:'',img:'',rate:0 };

  showModal = () => {
    this.setState({
      visible:true ,
    });
  };

  handleOk = e => {
    console.log(e);
    this.props.handleData({name:this.state.name ,img:this.state.img , rate:this.state.rate})
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className=''>
        <Button type="primary" onClick={this.showModal}>
          ADD CARD
        </Button>
        <Modal
          title="CARD"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <>
        <Input placeholder="name" value={this.state.name} onChange={v=>this.setState({name:v.target.value})} />
        <Input placeholder="img" value={this.state.img} onChange={v=>this.setState({img:v.target.value})} />
        <Input placeholder="rate" value={this.state.rate} onChange={v=>this.setState({rate:v.target.value})}/> 
        </>
        </Modal>
      </div>
    );
  }
}

export default MyModal