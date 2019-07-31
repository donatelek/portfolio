import React, { Component } from 'react';
import Contact from './Contact';
class Footer extends Component {
    state = {}
    render() {
        return (
            <footer >
                <Contact />
                <div className='icons'>
                    <a href="https://github.com/donatelek"><i class="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/jakub-sznajder"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:donatelek92@gmail.com"><i class="fas fa-envelope-square"></i></a>
                    <a href="mailto:donatelek92@gmail.com"><i class="far fa-file"></i></a>
                </div>
            </footer>
        );
    }
}

export default Footer;