//Libraries
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//Components and assets
import beastData from './data.json';
import HornedBeasts from './HornedBeasts';
import pixelBeast from './assets/beast-sprite.png';


class Main extends Component {

  renderBeasts = (beasts) => {
    let renderList = beasts.map(beast => {
      return (
        <HornedBeasts key={beast.title} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
      )
    });
    return renderList;
  }

  render() {
    return (


      <Container fluid>
        <Row>
          {this.renderBeasts(beastData)}
          <HornedBeasts title='Pixelated Goat' imageUrl={pixelBeast} description='Rare picture of the first beast' />
        </Row>
      </Container>
    )
  }
}

export default Main;