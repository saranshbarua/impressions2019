import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

export default class Merc extends Component {
  render() {
    return (
      <div className="team-section" id="teamSection">
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> MERCHANDISE</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Wear the swag</span></Fade>
      </div>
    )
  }
}
