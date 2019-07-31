import React, { Component } from 'react';
import Nav from './pages/Nav';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Aboutme from './pages/Aboutme';
import Footer from './pages/Footer';
import './styles/style.css';

class App extends Component {
  state = {
    isTop: 'onTop',
    page: 'main'
  }
  componentDidMount() {
    document.addEventListener('load', () => {
      const isTop = window.scrollY < 580;
      if (isTop !== this.state.isTop) {
        if (isTop === true) {
          this.setState({
            isTop: 'onTop'
          })
        } else {
          this.setState({
            isTop: 'onBottom'
          })
        }
      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 160;
      if (this.state.page !== 'project') {
        if (isTop !== this.state.isTop) {
          if (isTop === true) {
            this.setState({
              isTop: 'onTop'
            })
          } else {
            this.setState({
              isTop: 'onBottom'
            })
          }
        }
      }
    });
  }

  handleShowHamburger = () => {
    this.setState({
      showHamburger: !this.state.showHamburger
    })
  }

  handleChangePage = page => {
    if (page === 'project') {
      this.setState({
        isTop: 'hidden'
      })
    } else {
      document.body.style.overflow = "visible"
      const isTop = window.scrollY < 160;
      if (isTop === true) {
        this.setState({
          isTop: 'onTop'
        })
      } else {
        this.setState({
          isTop: 'onBottom'
        })
      }
    }
    if (page === 'project' || page === 'nav') {
      document.body.style.overflow = "hidden"
    }
    this.setState({
      page
    })
  }

  render() {
    return (
      <>
        <Nav handleChangePage={this.handleChangePage} page={this.state.page} isTop={this.state.isTop} />
        <div style={{ overflowX: 'hidden' }}>
          <Main />
          <Projects handleChangePage={this.handleChangePage} page={this.state.page} />
          <Aboutme />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;



