//Libraries
import React, {Component} from 'react';
//Components and assets
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import beastData from './data.json';
import SelectedBeast from './SelectedBeast'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      focusedBeast: null,
      showFocus: false,
    }
  }

  selectBeast = (beast) => {
    this.setState({
      focusedBeast: beast,
      showFocus: true
    })
  }

  hideBeast = () => {
    this.setState({
      showFocus:false
    })
  }


  
  
  render(){
    
    return(
      <>
        <Header />
        <Main beastData={beastData} selectBeast={this.selectBeast}/>
        <Footer />
        <SelectedBeast show={this.state.showFocus} hideBeast={this.hideBeast} beast={this.state.focusedBeast} />
      </>
    )
  }
}

export default App;
