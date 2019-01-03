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
      <div className="map">
        <a href="https://www.google.com/maps/place/JAYPEE+INSTITUTE+OF+INFORMATION+TECHNOLOGY/@28.629431,77.3726531,17z/data=!4m19!1m13!4m12!1m4!2m2!1d77.3711296!2d28.6308149!4e1!1m6!1m2!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!2sjaypee+institute+of+information+technology!2m2!1d77.3720556!2d28.6297291!3m4!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!8m2!3d28.6297291!4d77.3720556">
          <img src='./map.png' width="100%" alt="JIIT location"/>        
        </a>
      </div>
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