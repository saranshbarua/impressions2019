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

library.add(faAlignJustify, faAlignRight);

export default class Home extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <div className="main">
        <Fade delay={2800}>
          <div className="hamburger">
            <FontAwesomeIcon icon="align-right" />
          </div>
        </Fade>
        <LandingPage />
        <AboutSection />
        <Artists />
        <EventSection />
        <Sponsors />
      </div>
    )
  }
}
