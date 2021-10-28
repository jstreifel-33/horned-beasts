//Libraries
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//Components and assets
import HornedBeasts from './HornedBeasts';
import SelectedBeast from './SelectedBeast.js';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focusedBeast: null,
      showFocus: false,
    }
  }

  selectBeast = (beast) => {
    this.setState({
      focusedBeast: beast,
      showFocus: true
    })
  }

  renderBeasts = (beasts) => {
    let renderList = beasts.map((beast, idx) => {
      return (
        <HornedBeasts key={idx} beast={beast} selectBeast={this.selectBeast}/>
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

        <SelectedBeast show={this.state.showFocus} beast={this.state.focusedBeast} />
      </main>
    )
  }
}

export default Main;