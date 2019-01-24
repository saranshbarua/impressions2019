import React from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div className="events-page">
      <Fade top cascade><span className="pf-400 ev-head">Events</span></Fade>
      <div className="hubs-cont">
        <Link to={`/eventlol/knuth`}>
          <div className="hub-card">
            <div className="hub-img">
              <img src="https://media.licdn.com/dms/image/C4E0BAQExLsnLuNFZ8w/company-logo_200_200/0?e=2159024400&v=beta&t=_WDOcKLT02xVQmDxJ_F2r9rO0YMzYpfx0lBSA7sL6Tg"
              alt="logo"
              height="90%"
              />
            </div>
            <div className="hub-content">
                <span className="pf-400 hub-name">Knuth Programming Hub</span>
                <span className="lato-400 small-lato event-count"> 2 EVENTS</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Events
