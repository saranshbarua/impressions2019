import React, { Component } from 'react'
import WOW from 'wow.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Sections

import Navbar from '../Navbar/navbar'
import LandingPage from '../LandingPage/landingPage'
import AboutSection from '../AboutSection/aboutSection'
import Artists from '../Artists/artists'
import CurrentArtists from '../Artists/currentArtists'
import Artist2 from '../Artists/artist2'
import EventSection from '../EventSection/eventSection'
import Sponsors from '../Sponsors/sponsors'
import Merc from '../Merchandise/merc'
import Team from '../Team/team'
import ContactUs from '../ContactUs/contactUs'

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
        <div className="hamburger ham-appear" onClick={this.toggleNavbar}>
          <FontAwesomeIcon icon="align-right" />
        </div>
        <Navbar closeNav={this.toggleNavbar} navState={this.state.isNavbar}/>
        <LandingPage />
        <AboutSection />
        <Artists />
        <CurrentArtists />
        <Artist2 />
        <EventSection />
        <Sponsors />
        <Merc />
        <Team />
        <ContactUs />
      </div>
    )
  }
}
