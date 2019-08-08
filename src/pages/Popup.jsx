import React, { Component } from 'react';
class Popup extends Component {
    state = {}
    render() {
        const popup = () => {
            if (this.props.projectNumber === 1) {
                return (
                    <div className="popup" style={{ overflowX: 'hidden' }}>
                        <div className="close"><i className="far fa-times-circle" onClick={() => this.props.handleChangePage('main')} ></i></div>
                        <h1>Crypto Tool</h1>
                        <h2>All-in-one tool for cryptocurrency traders</h2>
                        <div className="technologies">
                            <ul className='front'>
                                <h1>Front-End</h1>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>JAVASCRIPT</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                            <ul className='back'>
                                <h1>Back-End</h1>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <ul className='tools'>
                                <h1>Used tools</h1>
                                <li>Illustrator</li>
                                <li>VScode</li>
                            </ul>
                        </div>
                        <a href='https://crypto-bit-trader.herokuapp.com/' className="live">Check Live <i className="fas fa-long-arrow-alt-right"></i></a>
                        <a href='https://github.com/donatelek/Crypto-Bit-Trader' className="github">View On Github <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                )
            } else if (this.props.projectNumber === 3) {
                return (
                    <div className="popup" style={{ overflowX: 'hidden' }}>
                        <div className="close"><i className="far fa-times-circle" onClick={() => this.props.handleChangePage('main')} ></i></div>
                        <h1>PH-STORE</h1>
                        <h2>E-Commerce shop with mobile phones</h2>
                        <div className="technologies">
                            {/* <h1 className='title'>Used tools and technologies</h1> */}
                            <ul className='front'>
                                <h1>Front-End</h1>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                            </ul>
                            <ul className='back'>
                                <h1>Back-End</h1>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <ul className='tools'>
                                <h1>Used tools</h1>
                                <li>Illustrator</li>
                                <li>VScode</li>
                                <li>Jest</li>
                                <li>Enzyme</li>
                            </ul>
                        </div>
                        <a href='https://ph-store.herokuapp.com/' className="live">Check Live <i className="fas fa-long-arrow-alt-right"></i></a>
                        <a href='https://github.com/donatelek/PH-STORE' className="github">View On Github <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                )
            } else if (this.props.projectNumber === 4) {
                return (
                    <div className="popup" style={{ overflowX: 'hidden' }}>
                        <div className="close"><i className="far fa-times-circle" onClick={() => this.props.handleChangePage('main')} ></i></div>
                        <h1>Portfolio</h1>
                        <h2>My personal portfolio</h2>
                        <div className="technologies">
                            {/* <h1 className='title'>Used tools and technologies</h1> */}
                            <ul className='front'>
                                <h1>Front-End</h1>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                            </ul>
                            <ul className='back'>
                                <h1>Back-End</h1>
                                <li>------</li>
                            </ul>
                            <ul className='tools'>
                                <h1>Used tools</h1>
                                <li>Illustrator</li>
                                <li>VScode</li>
                            </ul>
                        </div>
                        <a href='https://jakub-sznajder.herokuapp.com' className="live">Check Live <i className="fas fa-long-arrow-alt-right"></i></a>
                        <a href='https://github.com/donatelek/Portfolio' className="github">View On Github <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                )
            } else if (this.props.projectNumber === 2) {
                return (
                    <div className="popup" style={{ overflowX: 'hidden' }}>
                        <h1>EDM Challenge</h1>
                        <h2>Quiz site for Electronic dance music fans</h2>
                        <div className="technologies">
                            <ul className='front'>
                                <h1>Front-End</h1>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Redux</li>
                            </ul>
                            <ul className='back'>
                                <h1>Back-End</h1>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <ul className='tools'>
                                <h1>Used tools</h1>
                                <li>Illustrator</li>
                                <li>VSCode</li>
                            </ul>
                        </div>
                        <a href='https://edmchallenge.herokuapp.com/' className="live">Check Live <i className="fas fa-long-arrow-alt-right"></i></a>
                        <a href='https://github.com/donatelek/EDM-Challenge' className="github">View On Github <i className="fas fa-long-arrow-alt-right"></i></a>
                        <div className="close"><i className="far fa-times-circle" onClick={() => this.props.handleChangePage('main')} ></i></div>

                    </div>
                )
            }
        }
        return (
            <div>
                <div className="hiderest" onClick={() => this.props.handleChangePage('main')} ></div>
                {popup()}
            </div>

        );
    }
}

export default Popup;