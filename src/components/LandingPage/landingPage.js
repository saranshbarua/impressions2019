import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade'

const landingPage = () => {
  return (
    <div className="lp-container">
        <div className="lp-main pf-400">
          <Fade duration={700} delay={1500} top cascade>
            <h2 className="lato-300 logo">IMPRESSIONS</h2>
          </Fade>
          <div className="tagline-container">
            <Fade delay={2000} distance={'50px'} bottom>
              <span>
                Feel the Wanderlust
              </span>
            </Fade>
            
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

export default landingPage
