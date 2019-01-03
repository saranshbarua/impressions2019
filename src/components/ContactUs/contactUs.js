import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);

const ContactUs = () => {
  return (
    <div className="contact-section" id="contactSection">
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>06</span> CONTACT US</span>
      <Fade duration={700} top cascade><span className="pf-400 section-heading">Reach Out</span></Fade>
      <Slide><p className="pf-400 venue">Jaypee Institute of Information Technology</p></Slide>
      <div className="map"></div>
      <div className="lp-link-box cp-box">
            <div className="lp-link-boxes lp-link-box-one cp-boxes">
              <span className="lato-400 small-lato">EMAIL</span>
              <span className="pf-400 date new-date">
                saranshbarua@gmail.com
              </span>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">PHONE</span>
              <span className="pf-400 date new-date">
                +91-8269236747
              </span>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">SOCIAL MEDIA</span>
              <span className="pf-400 date new-date">
                Follow 
                <div><FontAwesomeIcon icon="twitter" /></div>
              </span>
            </div>
    </div>
    </div>
  )
}

export default ContactUs
