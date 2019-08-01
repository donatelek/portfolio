import React, { Component } from 'react';
class Hamburger extends Component {
    state = {
        copiedEmail: false
    }

    handleScrollTo = (top) => {
        this.props.handleChangePage('main')
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });

    }
    handleScroll = () => {
        this.props.handleChangePage('main')
    }

    handleCopy = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({
            copiedEmail: true
        })
        setTimeout(() => {
            this.setState({
                copiedEmail: false
            })
        }, 1000)
    }

    render() {
        return (
            <>
                <div className='hamburger'>
                    <div className="cross" onClick={() => this.props.handleChangePage('main')} ><i className="fas fa-times"></i></div>
                    <ul className='nav'>
                        <li className='home' onClick={() => this.handleScrollTo(0)}
                        // eslint-disable-next-line
                        > <a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
                        <li onClick={this.handleScroll}><a href="#projects">Projects</a></li>
                        <li onClick={this.handleScroll}><a href="#aboutme">About me</a></li>
                        <li onClick={this.handleScroll}><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className='icons'>
                        <li><a href="https://github.com/donatelek"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jakub-sznajder"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><i className="fas fa-at" onClick={this.handleCopy}></i></li>
                        <textarea readOnly style={{ position: 'absolute', right: '-1000px' }}
                            ref={(textarea) => this.textArea = textarea}
                            value='donatelek92@gmail.com'
                        />
                    </ul>
                    {this.state.copiedEmail && <div className="copiedEmail">Copied to clipboard</div>}
                </div>
                {window.innerWidth > 812 && <div className="hamburgerBlur" onClick={() => this.props.handleChangePage()} ></div>}
            </>
        );
    }
}

export default Hamburger;