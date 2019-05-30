import React, { Component } from 'react';
import Nav from './pages/Nav';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Footer from './pages/Footer';
import './styles/App.css';

class App extends Component {
  state = { 
    isTop:'onTop',
    page:'main'
   }
   UNSAFE_componentWillMount(){
    window.scrollTo(0, 1500)
   }
   componentDidMount(){
   
    // document.addEventListener('change',()=>{
    //   if(this.state.page==='project'){
    //     this.setState({
    //       isTop:'hidden'
    //     })
    //   }
    // })
    document.addEventListener('load', () => {
      
      const isTop = window.scrollY < 580;
      console.log(isTop)
      
      if (isTop !== this.state.isTop) {
        if(isTop===true){
          this.setState({
            isTop:'onTop'
           })
        }else{
          this.setState({
            isTop:'onBottom'
           })
        }
        
          
      }
    });
    document.addEventListener('scroll', () => {
      
      const isTop = window.scrollY < 160;
      console.log(isTop)
      if(this.state.page!=='project'){
        if (isTop !== this.state.isTop) {
          if(isTop===true){
            this.setState({
              isTop:'onTop'
             })
          }else{
            this.setState({
              isTop:'onBottom'
             })
          }
          
            
        }
      }
      
    });
   
  }
  
  handleShowHamburger=()=>{
  
    this.setState({
        showHamburger:!this.state.showHamburger
    })
    }


handleChangePage=page=>{
  if(page==='project'){
    
    this.setState({
      isTop:'hidden'
    })
    
  }else{
    document.body.style.overflow = "visible"
    const isTop = window.scrollY < 160;
    if(isTop===true){
      this.setState({
        isTop:'onTop'
      })
    }else{
      this.setState({
        isTop:'onBottom'
      })
    }
    
  }
  if(page==='project'||page==='nav'){
    document.body.style.overflow = "hidden"
    
   
  }
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

//  handd=(e)=>{
  
//    // 115px
//    if(window.scrollY>130){
//      this.setState({
//        page:'topMain'
//      })
//    }else if(window.scrollY<131){
//      this.setState({
//        page:'main'
//      })
//    }
//  }
  render() { 
    // window.scrollTo(0, 1500)
    return ( 
      // <div className='container' style={{overflow:'hidden'}}>
      <>
      <Nav handleChangePage={this.handleChangePage} page={this.state.page} isTop={this.state.isTop}/>
      <div style={{overflowX:'hidden'}}>
      <Main/>
      <Projects handleChangePage={this.handleChangePage} page={this.state.page} />
      
      <Aboutme/>
      <Footer/>
      </div>
      </>
    
     );
  }
}
 
export default App;



