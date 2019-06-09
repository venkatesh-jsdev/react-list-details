import { Modal, Button } from 'react-bootstrap';
import React from 'react';

class AddressModal extends React.Component {
  
  state = { visible: false}
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  showEditForm = () => {
    this.setState({
      editformvisible: true,
    });
  }
  
  
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        </Modal>
      </div>
    );
  }
}

export default AddressModal;