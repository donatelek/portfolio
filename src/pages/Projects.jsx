import React, { Component } from 'react';
import Popup from './Popup';

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
                <h1 className='sectionTitle'>My Projects</h1>
                <ul className="projects">
                    <h1 className='projectNameMobile projectNameMobileFirst'>Crypto Bit Trader</h1>
                    <li className='a' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(1)
                    }}>
                        <div className="aboutA">
                            <h1 className='projectHoverTitle'>Crypto Bit Trader</h1>
                            <h2>All in one tool for cryptocurrency traders</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>EDM Challenge</h1>
                    <li className='b' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(2)
                    }}>
                        <div className="aboutA">
                            <h1 className='projectHoverTitle'>EDM Challenge</h1>
                            <h2>Quiz site for electronic dance music fans</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>PH-STORE</h1>
                    <li className='c' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(3)
                    }}>
                        <div className="aboutA">
                            <h1 className='projectHoverTitle'>PH-STORE</h1>
                            <h2>E-Commerce website with mobile phones</h2>
                        </div>
                    </li>
                    <h1 className='projectNameMobile'>Portfolio</h1>
                    <li className='d' onClick={() => {
                        this.props.handleChangePage('project')
                        this.handleChangeProjectNumber(4)
                    }}>
                        <div className="aboutA">
                            <h1 className='projectHoverTitle'>Portfolio</h1>
                            <h2>My personal portfolio</h2>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Projects;