//Libraries
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';




class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Horned beast deep dive</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header;