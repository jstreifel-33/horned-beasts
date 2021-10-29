//Libraries
import React, { Component } from 'react';
import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
//Components and assets
import HornedBeasts from './HornedBeasts';



class Main extends Component {

  handleHornSelect = (e) => {
    this.props.hornFilter(e.target.value);
  }

  renderBeasts = (beasts) => {
    let renderList = beasts.map((beast, idx) => {
      return (
        <Col key={idx} id={beast.title} xs='4' md='3'>
          <HornedBeasts beast={beast} selectBeast={this.props.selectBeast} zoom={false} />
        </Col>
      )
    });
    return renderList;
  }

  render() {
    return (
      <main>
        <Container style={{ paddingBottom: '20px' }}>
          <Row>
            <Col xs='5' sm='4' md='3' lg='2'>
              <Form>
                <FloatingLabel label="Filter by Horns">
                  <Form.Select onChange={this.handleHornSelect}>
                    <option value="noFilter">No Filter</option>
                    <option value={1}>1 Horn</option>
                    <option value={2}>2 Horns</option>
                    <option value={3}>3 Horns</option>
                    <option value="many">Many Horns</option>
                  </Form.Select>
                </FloatingLabel>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {this.renderBeasts(this.props.beastData)}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;