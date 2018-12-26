import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade'

import { Component } from 'react'
import { Transform } from 'stream';

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouse(e) {
    this.setState({
      x: e.screenX,
      y: e.screenY
    })
  }

  render() {
    var xpos = this.state.x;
    let halfW = window.innerWidth / 2;
    let halfH = window.innerHeight / 2;
    let degX = (this.state.x / halfH ) * 10;
    let degY = (this.state.y / halfW) * -10;
    return (
      <div onMouseMove={(e) => {this.handleMouse(e)}} className="lp-container">
        <div className="lp-main pf-400">
          <Fade duration={700} delay={1500} top cascade>
            <h2 className="lato-300 logo">IMPRESSIONS</h2>
          </Fade>
          <div className="tagline-container">
            {/* <Fade delay={2000} distance={'50px'} bottom> */}
              <div style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transform: `perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX(${degX}deg) rotateY(${degY}deg)`
              }}>
                Feel the Wanderlust
              </div>
            {/* </Fade> */}
            
          </div>
          <div className="lp-link-box">
            <AnchorLink className="lp-link-boxes lp-link-box-one wow appear-box-one">
              <span className="lato-400 small-lato">WHEN IS IT</span>
              <span className="pf-400 date">
                24th Feb 2019
              </span>
            </AnchorLink>
            <AnchorLink href="#aboutSection" className="lp-link-boxes lp-link-box-two wow appear-box-two">
              <span className="lato-400 small-lato">WHAT IS IT</span>
              <span className="pf-400 date">
                About Impressions
              </span>
            </AnchorLink>
          </div>
        </div>
    </div>
    )
  }
}


// const landingPage = () => {
//   return (
    
//   )
// }

// export default landingPage
