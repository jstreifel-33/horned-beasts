import React, { Component } from 'react'
import heart from './assets/heart-icon.png'


class HornedBeasts extends Component {
  constructor(props){
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
      <div id={this.props.title}>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title} onClick={this.handleFav} />
        <p>{this.props.description}</p>
        <span><img src={heart} alt='favorites' />Favorites: {this.state.likes}</span>
      </div>
    )
  }
}

export default HornedBeasts;