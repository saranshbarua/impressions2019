import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarLinks = (props) => {
  
  return (
    <div>
      <ul>
          <li><AnchorLink href="#aboutSection" onClick={props.closeTheNav}>About Impressions</AnchorLink></li>
          <li>Artists</li>
          <li>Events</li>
          <li>Sponsors</li>
          <li>Team</li>
          <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default NavbarLinks
