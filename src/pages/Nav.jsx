import React, { Component } from 'react';
import Hamburger from './Hamburger.jsx';
import '../styles/Nav.css'
class Nav extends Component {
    state = { 
     }

    handleScrollHome=()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        } 
     
    render() { 
        return ( 
            <nav className={this.props.isTop} >
                <div className="logo" onClick={()=>this.handleScrollHome(document.body,0,1250)} >SZNAJDER</div>
                <div className="hamburgerIcon" onClick={()=>this.props.handleChangePage('nav')}>
                <div className="menu">Menu</div>
                <i class="fas fa-bars"></i>
                </div>
                {this.props.page==='nav'&&<Hamburger handleChangePage={this.props.handleChangePage} />}
            </nav>
         );
    }
}
 
export default Nav;