//Libraries
import React, {Component} from 'react';
//Components and assets
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import beastData from './data.json';


class App extends Component{
  
  method = () => console.log('do thing')
  
  render(){
    
    return(
      <>
        <Header />
        <Main beastData={beastData} />
        <Footer />
      </>
    )
  }
}

export default App;
