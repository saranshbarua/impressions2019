import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const landingPage = () => {
  return (
    <div className="lp-container">
        <div className="lp-main pf-400">
            <h2 className="lato-300 logo">IMPRESSIONS</h2>
            <div className="tagline-container wow appear">
              <span>
                Feel the Wanderlust
              </span>
            </div>
            <div className="lp-link-box">
              <AnchorLink className="lp-link-boxes lp-link-box-one">
                <span className="lato-400 small-lato">WHEN IS IT</span>
                <span className="pf-400 date">
                  24th Feb 2019
                </span>
              </AnchorLink>
              <AnchorLink href="#aboutSection" className="lp-link-boxes lp-link-box-two">
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
