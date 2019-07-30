import React, { Component } from 'react';
import '../styles/Projects.css';
import Popup from './Popup';
import LightSpeed from 'react-reveal/Zoom';

class Projects extends Component {
    state = {
        projectNumber: null,
    }

    handleChangeProjectNumber = (projectNumber) => {
        this.setState({
            projectNumber
        })
    }

    render() {
        return (
            <section className="Projects" id='projects'>
                {this.props.page === 'project' && <Popup handleChangePage={this.props.handleChangePage} page={this.props.page} projectNumber={this.state.projectNumber} />}
                {/* <h1>𝓒𝓱𝓮𝓬𝓴 𝓸𝓾𝓽 𝓶𝔂 𝓹𝓻𝓸𝓳𝓮𝓬𝓽𝓼</h1> */}
                <h1>My Projects</h1>
                <ul className="projects">

                    <h1 className='projectNameMobile projectNameMobileFirst'>EDM challenge</h1>
                    <li className='a' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(1)
                    }}>
                        <div className="aboutA">
                            <h1>EDM challenge</h1>
                            <h2>Quiz site about electronic dance music</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>PH-STORE</h1>
                    <li className='b' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(2)
                    }}>

                        <div className="aboutA">
                            <h1>PH-STORE</h1>
                            <h2>E-Commerce shop with mobile phones</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>PORTFOLIO</h1>
                    <li className='c' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(3)
                    }}>
                        <div className="aboutA">
                            <h1>Portfolio</h1>
                            <h2>My personal portfolio</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>CRYPTO BIT-TRADER</h1>
                    <li className='d' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(4)
                    }}>
                        <div className="aboutA">
                            <h1>Crypto tool</h1>
                            <h2>All-in-one tool for cryptocurrency traders</h2>
                        </div>
                    </li>

                </ul>
            </section>
        );
    }
}

export default Projects;