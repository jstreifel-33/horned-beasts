import React, {Component} from 'react';
import HornedBeasts from './HornedBeasts';
import beastData from './data.json';

class Main extends Component{

  renderBeasts = (beasts) => {
    let renderList = beasts.map(beast => {
      return(
        <HornedBeasts key={beast.title} title={beast.title} imageUrl={beast.image_url} description={beast.description}/>
      )
    });
    return renderList;
  }

  render(){
    return(
      <>
        {this.renderBeasts(beastData)}
        <HornedBeasts title='PixelBeast' imageUrl='images/beast-sprite.png' description='A picture of the first beast' />
      </>
    )
  }
}

export default Main;