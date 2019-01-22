import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);


const NavbarLinks = (props) => {
  
  return (
    <div>
      <ul className="ul-test">
          <li><AnchorLink className="pf-400 nav-links" href="#aboutSection" onClick={props.closeTheNav}>About</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#artistsSection" onClick={props.closeTheNav}>Artists</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#eventsSection" onClick={props.closeTheNav}>Events</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#sponsorsSection" onClick={props.closeTheNav}>Sponsors</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#teamSection" onClick={props.closeTheNav}>Team</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#contactSection" onClick={props.closeTheNav}>Contact Us</AnchorLink></li>
          <br/>
          <li>
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/jiit.impressions/">
              <FontAwesomeIcon 
                icon={["fab", "facebook"]}
                size="2x"
                style={{
                  margin: '0px 5px'
                }}
              />
            </a> 
            &nbsp;&nbsp;
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/jiit.impressions/">
              <FontAwesomeIcon 
                icon={["fab", "instagram"]}
                size="2x"
                style={{
                  margin: '0px 5px'
                }}
              />
            </a> 
          </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
