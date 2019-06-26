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
                <a href="https://github.com/donatelek"><i class="fab fa-github-square"></i></a>
                <a href="https://github.com/donatelek"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/donatelek"><i class="fas fa-envelope-square"></i></a>
                </div>
            </footer>
         );
    }
}
 
export default Footer;