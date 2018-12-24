import React from 'react'
import NavbarLinks from './navbarLinks'

const Navbar = (props) => {
  switch(props.navState) {
    case(true):
      return (
        <div className="nav navbar-open">
          <NavbarLinks closeTheNav={props.closeNav} />
        </div>
      )
    case(false):
      return (
        <div className="nav navbar-close">
          <NavbarLinks />
        </div>
      )
    default:
    return (
      <div className="nav">
        <NavbarLinks />
      </div>
    )
  }
}

export default Navbar
