//Libraries
import React, { Component } from 'react'
import heart from './assets/heart-icon.png'
import { Button, Card } from 'react-bootstrap'
//Components and Data


class HornedBeasts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }

  handleFav = () => (this.setState((state) => ({
    likes: state.likes + 1
  })))

  handleZoom = () => {
    if (this.props.zoom === false) {
      this.props.selectBeast(this.props.beast);
    }
  }

  render() {
    return (
      <Card border='primary' style={{ textAlign: 'center' }}>
        <Card.Img src={this.props.beast.image_url} alt={this.props.beast.keyword} title={this.props.beast.title} onClick={this.handleZoom} />
        <Card.Title >{this.props.beast.title}</Card.Title>
        <Card.Subtitle>{this.props.beast.description}</Card.Subtitle>
        <Card.Footer >
          <Button onClick={this.handleFav}>
            <img src={heart} alt='favorites' />{' ' + this.state.likes}
          </Button>
        </Card.Footer>
      </Card>
    )
  }
}

export default HornedBeasts;