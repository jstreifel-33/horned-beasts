//Libraries
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
//Components and assets
import HornedBeasts from './HornedBeasts';



class Main extends Component {

  renderBeasts = (beasts) => {
    let renderList = beasts.map((beast, idx) => {
      return (
        <Col key={idx} id={beast.title} xs='4' md='3'>
          <HornedBeasts beast={beast} selectBeast={this.props.selectBeast} zoom={false}/>
        </Col>
      )
    });
    return renderList;
  }

  render() {
    return (
      <main>
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