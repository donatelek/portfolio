import React, { Component } from 'react';
import '../styles/Hamburger.css';
import { NONAME } from 'dns';
class Hamburger extends Component {
    state = { 
        copiedEmail:false
     }

    handleScrollTo=top=>{
        this.props.handleChangePage('main')
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
          });
    }
    handleCopy=(e)=>{
        this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
        this.setState({
            copiedEmail:true
        })
        setTimeout(()=>{
            this.setState({
                copiedEmail:false
            })
        },1000)
    }

    render() { 
        return ( 
            <>
            <div className='hamburger'>
            <div className="cross" onClick={()=>this.props.handleChangePage('main')} ><i class="fas fa-times"></i></div>
                <ul className='nav'>
                    <li className='home'onClick={()=>this.handleScrollTo(0)} >Home</li>
                    <li onClick={()=>this.handleScrollTo(600)} >Projects</li>
                    <li onClick={()=>this.handleScrollTo(2600)} >About me</li>
                    <li onClick={()=>this.handleScrollTo(3300)} >Contact</li>
                </ul>
                <ul className='icons'>
                    <li><a href="https://github.com/donatelek"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://github.com/donatelek"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><i class="fas fa-at" onClick={this.handleCopy}></i></li>
                    
                    <textarea style={{position:'absolute',right:'-1000px'}}
            ref={(textarea) => this.textArea = textarea}
            value='donatelek92@gmail.com'
          />
                </ul>
                {this.state.copiedEmail&&<div className="copiedEmail">Copied to clipboard</div>}
            </div>
            <div className="hamburgerBlur" onClick={()=>this.props.handleChangePage()} ></div>
            </>
         );
    }
}
 
export default Hamburger;