import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import ParticlesDiv from '../Particles/particles'

library.add(faInstagram, faFacebook, faTwitter);

const ContactUs = () => {
  return (
    <div className="contact-section" id="contactSection">
      <ParticlesDiv />
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>07</span> CONTACT US</span>
      <Fade duration={700} top cascade><span className="pf-400 section-heading">Reach Out</span></Fade>
      <Slide><p className="pf-400 venue">Jaypee Institute of Information Technology</p></Slide>
      <div className="map" title="Get Directions">
        <a href="https://www.google.com/maps/place/JAYPEE+INSTITUTE+OF+INFORMATION+TECHNOLOGY/@28.629431,77.3726531,17z/data=!4m19!1m13!4m12!1m4!2m2!1d77.3711296!2d28.6308149!4e1!1m6!1m2!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!2sjaypee+institute+of+information+technology!2m2!1d77.3720556!2d28.6297291!3m4!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!8m2!3d28.6297291!4d77.3720556">
          <img src='./map.png' width="100%" alt="JIIT location"/>        
        </a>
      </div>
      <div className="lp-link-box cp-box">
            <div title="Send mail" className="lp-link-boxes lp-link-box-one cp-boxes">
              <a href="mailto:jiityc@gmail.com" style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
              <span className="lato-400 small-lato">EMAIL</span>
              <span className="pf-400">
                jiityc@gmail.com
              </span>
              </a>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">PHONE</span>
              <span className="pf-400">
                +91-8373918526
              </span>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">SOCIAL MEDIA</span>
              <span className="pf-400">
                Follow - &nbsp;
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/jiit.impressions/">
                    <FontAwesomeIcon 
                      icon={["fab", "facebook"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a> 
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/jiit.impressions/">
                    <FontAwesomeIcon 
                      icon={["fab", "instagram"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a>  
                {/* <div></div> */}
              </span>
            </div>
    </div>
    </div>
  )
}

export default ContactUs
