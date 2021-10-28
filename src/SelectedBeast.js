//Libraries
import React, { Component } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import HornedBeasts from './HornedBeasts'


export default class BeastModal extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>Would you look at that beast. Wow.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <HornedBeasts beast={this.props.beast}></HornedBeasts>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
