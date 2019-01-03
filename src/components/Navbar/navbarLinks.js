import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarLinks = (props) => {
  
  return (
    <div>
      <ul className="ul-test">
          <li><AnchorLink className="pf-400 nav-links" href="#aboutSection" onClick={props.closeTheNav}>About</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#artistsSection" onClick={props.closeTheNav}>Artists</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#eventsSection" onClick={props.closeTheNav}>Events</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#sponsorsSection" onClick={props.closeTheNav}>Sponsors</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#teamSection" onClick={props.closeTheNav}>Team</AnchorLink></li>
      </ul>
    </div>
  )
}

export default NavbarLinks
