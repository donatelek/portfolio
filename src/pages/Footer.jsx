import React, { Component } from 'react';
import '../styles/Footer.css';
import Contact from './Contact';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer >
                <Contact/>
                <div className='icons'>
                <i class="fab fa-github-square"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fas fa-envelope-square"></i>
                </div>
            </footer>
         );
    }
}
 
export default Footer;