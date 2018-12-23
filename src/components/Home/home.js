import React, { Component } from 'react'
import WOW from 'wow.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="hamburger">
          <FontAwesomeIcon icon="align-right" />
        </div>
        <LandingPage />
        <AboutSection />
        <Artists />
        <EventSection />
        <Sponsors />
      </div>
    )
  }
}
