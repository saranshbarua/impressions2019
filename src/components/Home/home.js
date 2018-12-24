import React, { Component } from 'react'
import WOW from 'wow.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'

//Sections

import LandingPage from '../LandingPage/landingPage'
import AboutSection from '../AboutSection/aboutSection'
import Artists from '../Artists/artists'
import EventSection from '../EventSection/eventSection'
import Sponsors from '../Sponsors/sponsors'
import Navbar from '../Navbar/navbar'

library.add(faAlignJustify, faAlignRight);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbar: null
    }
  }

  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  toggleNavbar = () => {
    if(this.state.isNavbar === null) {
      this.setState({
        isNavbar: true
      })  
    }
    else {
      this.setState({
        isNavbar: this.state.isNavbar ? false : true
      })
    }
  }

  render() {
    return (
      <div className="main">
        <Fade delay={2800}>
          <div className="hamburger" onClick={this.toggleNavbar}>
            <FontAwesomeIcon icon="align-right" />
          </div>
        </Fade>
        <Navbar closeNav={this.toggleNavbar} navState={this.state.isNavbar}/>
        <LandingPage />
        <AboutSection />
        <Artists />
        <EventSection />
        <Sponsors />
      </div>
    )
  }
}
