//libraries
import React, {Component} from 'react';

//Components
import './App.css';
import Header from './Header.js'
import Main from './Main'
import Footer from './Footer'

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
