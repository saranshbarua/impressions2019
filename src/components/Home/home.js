import React, { Component } from 'react'
import WOW from 'wow.js'

//Sections

import LandingPage from '../LandingPage/landingPage'
import AboutSection from '../AboutSection/aboutSection'
import Artists from '../Artists/artists'
import EventSection from '../EventSection/eventSection'

export default class Home extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <div className="main">
        <LandingPage />
        <AboutSection />
        <Artists />
        <EventSection />
      </div>
    )
  }
}
