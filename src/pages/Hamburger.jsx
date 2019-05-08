import React, { Component } from 'react';
import '../styles/Hamburger.css';
class Hamburger extends Component {
    state = {  }
    handleScrollHome=()=>{
        this.props.handleChangePage('main')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    handleScrollProjects=()=>{
        this.props.handleChangePage('main')
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
          });
    }
    handleScrollAboutMe=()=>{
        this.props.handleChangePage('main')
        window.scrollTo({
            top: 2600,
            left: 0,
            behavior: 'smooth'
          });
    }
    handleScrollContact=()=>{
        this.props.handleChangePage('main')
        window.scrollTo({
            top: 3300,
            left: 0,
            behavior: 'smooth'
          });
    }
    render() { 
        return ( 
            <>
            <div className='hamburger'>
            <div className="cross" onClick={()=>this.props.handleChangePage('main')} ><i class="fas fa-times"></i></div>
                <ul>
                    <li className='home' onClick={this.handleScrollHome} >Home</li>
                    <li onClick={this.handleScrollProjects} >Projects</li>
                    <li onClick={this.handleScrollAboutMe} >About me</li>
                    <li onClick={this.handleScrollContact} >Contact</li>
                </ul>
            </div>
            <div className="hamburgerBlur" onClick={()=>this.props.handleChangePage()} ></div>
            </>
         );
    }
}
 
export default Hamburger;