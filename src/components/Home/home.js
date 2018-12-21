import React, { Component } from 'react'
import WOW from 'wow.js'

//Sections

import LandingPage from '../LandingPage/landingPage'
import AboutSection from '../AboutSection/aboutSection'
import SimpleSlider from '../Carousel/carousel'

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
        <SimpleSlider />
      </div>
    )
  }
}
