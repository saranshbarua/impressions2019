import React from 'react'

const Navbar = (props) => {
  switch(props.navState) {
    case(true):
      return (
        <div className="nav navbar-open">
          Navbar open
        </div>
      )
    case(false):
      return (
        <div className="nav navbar-close">
          Navbar close
        </div>
      )
    default:
    return (
      <div className="nav">
        Navbar close
      </div>
    )
  }
}

export default Navbar
