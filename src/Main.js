import React, {Component} from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component{
  render(){
    return(
      <>
        <HornedBeast title='Beast1' imageUrl='images/beast-sprite.png' description='A picture of the first beast' />
        <HornedBeast title='Beast2' imageUrl='images/beast-sprite.png' description='A picture of the second beast' />
      </>
    )
  }
}

export default Main;