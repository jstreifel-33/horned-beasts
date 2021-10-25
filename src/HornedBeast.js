import React, { Component } from 'react'


class HornedBeast extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt='Horned beast' title='Look at those horns!' />
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;