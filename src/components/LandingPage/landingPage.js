import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade'
import { Component } from 'react'

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
    let halfW = window.innerWidth / 2;
    let halfH = window.innerHeight / 2;
    let degX = (this.state.x / halfH ) * 5;
    let degY = (this.state.y / halfW) * -5;
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
                transition: 'transform .5s cubic-bezier(.215, .61, .355, 1), box-shadow .5s cubic-bezier(.215, .61, .355, 1)',
                transform: `perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX(${degX}deg) rotateY(${degY}deg)`
              }}>
                <span style={{
                  // color: '#223637',
                  fontFamily: 'Kaushan Script'
                }}>Feel the Wanderlust</span>
                {/* <img src='./clock.png' alt=""/> */}
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
