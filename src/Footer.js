//Libraries
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid >
          <p>Author: Joseph Streifel | Visit me on <a href='https://github.com/jstreifel-33/horned-beasts' target='_blank' rel='noopener noreferrer'>GitHub</a>!</p>
          <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/DFU1kReSUccu/heart">Heart</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>

        </Container>
      </footer>
    )
  }
}

export default Footer;