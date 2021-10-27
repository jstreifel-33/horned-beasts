import React, { Component } from 'react'
import heart from './assets/heart-icon.png'
//Libraries
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


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
    return (
      <Col id={this.props.title} sm='6' md='4'>
        <Card border='primary' style={{textAlign:'center'}}>
          <Card.Img src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title} onClick={this.handleFav} />
          <Card.Title >{this.props.title}</Card.Title>
          <Card.Subtitle>{this.props.description}</Card.Subtitle>
          <Card.Footer><img src={heart} alt='favorites' />Favorite: {this.state.likes}</Card.Footer>
        </Card>
      </Col>
    )
  }
}

export default HornedBeasts;