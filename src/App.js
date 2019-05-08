import React, { Component } from 'react';
import Nav from './pages/Nav';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Footer from './pages/Footer';
import './styles/App.css';

class App extends Component {
  state = { 
    
    page:'main'
   }
   componentDidMount(){
    window.addEventListener('scroll',this.handd)

   
  }
  handleShowHamburger=()=>{
    if(!this.state.showHamburger){
      // noScroll.on()
    }else{
      // noScroll.off()
    }
    this.setState({
        showHamburger:!this.state.showHamburger
    })
    }


handleChangePage=page=>{
  this.setState({
    page
  })
}



//naprawic kolor w navigacji

//zmienic polozenie X w hamburgerze na taki sam jak w nav(od pewniego momentu sie psuje) ??
//skalowanie przyciskow w popup
//dodac wszedzie animacje (animista)
//zrobic cos z tym tekstem z about me
//poprawic wysokosc strony
//dodac animacje na przycisku z contactu

 handd=(e)=>{
  
   // 115px
   if(window.scrollY>130){
     this.setState({
       page:'topMain'
     })
   }else if(window.scrollY<131){
     this.setState({
       page:'main'
     })
   }
 }
  render() { 
    return ( 
      <div className='container'>
      <Nav handleChangePage={this.handleChangePage} page={this.state.page} />
      <Main/>
      <Projects handleChangePage={this.handleChangePage} page={this.state.page} />
      
      <Aboutme/>
      <Footer/>
      </div>
     );
  }
}
 
export default App;



