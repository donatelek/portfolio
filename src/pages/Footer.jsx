import React, { Component } from 'react';
import Contact from './Contact';
class Footer extends Component {
    state = {}
    render() {
        return (
            <footer >
                <Contact />
                <div className='icons'>
                    <a href="https://github.com/donatelek"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/jakub-sznajder"><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:donatelek92@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="https://www.docdroid.net/AdUZLAp/resume.pdf"><i className="far fa-file"></i></a>
                </div>
            </footer>
        );
    }
}

export default Footer;