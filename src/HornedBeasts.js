import React, { Component } from 'react'
import heart from './assets/heart-icon.png'
//Libraries
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//Components and Data
import BeastModal from './SelectedBeast'


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

  render() {
    console.log(this.props.beast);
    return (
      <Col id={this.props.beast.title} xs='6' md='4'>
        <Card border='primary' style={{textAlign:'center'}}>
          <Card.Img src={this.props.beast.image_url} alt={this.props.beast.keyword} title={this.props.beast.title} onClick={this.handleFav} />
          <Card.Title >{this.props.beast.title}</Card.Title>
          <Card.Subtitle>{this.props.beast.description}</Card.Subtitle>
          <Card.Footer><img src={heart} alt='favorites' />Favorite: {this.state.likes}</Card.Footer>
        </Card>
      </Col>

    )
  }
}

export default HornedBeasts;