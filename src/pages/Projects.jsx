import React, { Component } from 'react';
import '../styles/Projects.css';
import Popup from './Popup';
class Projects extends Component {
    state = { 
    
     }
   
    render() { 
        return ( 
            <section className="Projects">
           {this.props.page==='project'&&<Popup handleChangePage={this.props.handleChangePage} page={this.props.page} />}
            <h1>Checkout my projects:</h1>
            <ul className="projects">
            <li className='a' onClick={()=>this.props.handleChangePage('project')} >
                <div className="aboutA">
                <h1>EDM challenge</h1>
                <h2>Quiz site about electronic dance music</h2>
                </div>
            </li>
            <li className='b'>b</li>
            <li className='c'>c</li>
            <li className='d'>d</li>
            </ul>
            </section>
         );
    }
}
 
export default Projects;