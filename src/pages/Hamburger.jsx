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
                    <div className="cross" onClick={() => this.props.handleChangePage('main')} ><i class="fas fa-times"></i></div>
                    <ul className='nav'>
                        <li className='home' onClick={() => this.handleScrollTo(0)} > <a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
                        {/* <li onClick={()=>this.handleScrollTo(600)} >Projects</li> */}
                        {/* <li onClick={()=>this.handleScrollToFromBottom(2500)} >About me</li> */}
                        {/* <li onClick={this.handleScroll}><a href="#home">Home</a></li> */}
                        <li onClick={this.handleScroll}><a href="#projects">Projects</a></li>
                        <li onClick={this.handleScroll}><a href="#aboutme">About me</a></li>
                        <li onClick={this.handleScroll}><a href="#contact">Contact</a></li>
                        {/* <li data-scroll onClick={()=>this.handleScrollTo(3700)} >Contact</li> */}
                    </ul>
                    <ul className='icons'>
                        <li><a href="https://github.com/donatelek"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jakub-sznajder"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><i class="fas fa-at" onClick={this.handleCopy}></i></li>

                        <textarea style={{ position: 'absolute', right: '-1000px' }}
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