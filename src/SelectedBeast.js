//Libraries
import React, { Component } from 'react'
import { Container, Modal } from 'react-bootstrap'
import HornedBeasts from './HornedBeasts'
//Components and assets



export default class BeastModal extends Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.hideBeast} size='xl'>
          <Modal.Header closeButton>
            <Modal.Title>Would you look at that beast. Wow.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container fluid>
              <HornedBeasts zoom={true} beast={this.props.beast}/>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
