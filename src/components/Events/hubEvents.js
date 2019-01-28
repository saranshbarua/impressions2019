import React from 'react'
import Slide from 'react-reveal/Slide'

export default function HubEvents({ match }) {
  return (
    <div className="ep-cont">
      <span className="pf-400 ep-hub-name"><Slide top cascade>Knuth programming hub</Slide></span>

      <div className="ep-top">
        <div className="ep-logo">
         <img width="100%" src="https://media.licdn.com/dms/image/C4E0BAQExLsnLuNFZ8w/company-logo_200_200/0?e=2159024400&v=beta&t=_WDOcKLT02xVQmDxJ_F2r9rO0YMzYpfx0lBSA7sL6Tg" alt="hub logo"/>
        </div>
        <div className="event-box">
          <span className="ep-heading pf-400">
            <Slide bottom>Execute 19.1</Slide>
          </span>
          <Slide>
            <span className="lato-400 ep-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </span>
            <button className="ep-register pf-400">Register now</button>
          </Slide>
        </div>
      </div>

      <div className="more-events">
      <div className="event-box ep-ex-box">
          <span className="ep-heading pf-400">
            <Slide bottom>Execute 19.1</Slide>
          </span>
          <Slide>
            <span className="lato-400 ep-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </span>
            <button className="ep-register pf-400">Register now</button>
          </Slide>
        </div>
        <div className="event-box ep-ex-box">
          <span className="ep-heading pf-400">
            <Slide bottom>Execute 19.1</Slide>
          </span>
          <Slide>
            <span className="lato-400 ep-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </span>
            <button className="ep-register pf-400">Register now</button>
          </Slide>
        </div>
      </div>


    </div>
  )
}
