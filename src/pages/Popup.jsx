import React, { Component } from 'react';
import '../styles/Popup.css'
class Popup extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                    <div className="hiderest" onClick={()=>this.props.handleChangePage('main')} ></div>
                    <div className="popup" style={{overflowX:'hidden'}}>
                    <div className="close"><i class="far fa-times-circle" onClick={()=>this.props.handleChangePage('main')} ></i></div>
                        <h1>EDM Challenge</h1>
                        <h2>Quiz site for Electronic dance music fans</h2>
                        <div className="preview">
                        </div>
                        <div className="technologies">
                    <h1 className='title'>Used tools and technologies</h1>
                    <ul className='front'>
                        <h1>Front-End</h1>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                    <ul className='back'>
                    <h1>Back-End</h1>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    </ul>
                    <ul className='tools'>
                    <h1>Tools</h1>
                    <li>Adobe Illustrator</li>
                    </ul>
                    </div>
                    <button className="live">Check Live <i class="fas fa-long-arrow-alt-right"></i></button>
                    <button className="github">View On Github <i class="fas fa-long-arrow-alt-right"></i></button>
                    </div>
            </div>
           
         );
    }
}
 
export default Popup;