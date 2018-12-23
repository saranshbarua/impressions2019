import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const EventSection = () => {
  return (
    <div className="event-section">
      <div className="event-heading">
         <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>03</span> PARTICIPATE AND WIN</span>
         <Fade duration={700} top cascade><span className="pf-400 section-heading">Events</span></Fade>
        {/* <img src="https://openclipart.org/image/2400px/svg_to_png/231466/Ballet-Dancer-Silhouette.png" alt=""/> */}
        <Slide bottom>
          <p className="lato-400 about">
            Participate in events conducted by various hubs and win amazing prizes.
            Participate in events conducted by various hubs and win amazing prizes.
          </p>
        </Slide>
      </div>
      <div className="cta-event">
        <button className="event-button pf-400">Register here</button>
      </div>
    </div>
  )
}

export default EventSection
