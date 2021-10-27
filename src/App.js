//Libraries
import React, {Component} from 'react';
//Components and assets
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'


class App extends Component{
  render(){
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
