import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import  { Link } from 'react-router-dom'
import ParticlesDiv from '../Particles/particles'

const EventSection = () => {
  return (
    <div className="event-section" id="eventsSection">
      <ParticlesDiv />
      <div className="event-heading">
         <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>03</span> PARTICIPATE AND WIN</span>
         <Fade duration={700} top cascade><span className="pf-400 section-heading">Events</span></Fade>
        {/* <img src="https://openclipart.org/image/2400px/svg_to_png/231466/Ballet-Dancer-Silhouette.png" alt=""/> */}
        <Slide bottom>
          <p className="lato-400 about">
            From dance to drama, fashion to literary and of course, the multitude of tech events conducted at Impressions,  
            this is the platform for you to explore your hidden talents and showcase your skills. 
            Participate in the various events conducted at Impressions’19 to win amazing prizes.
          </p>
        </Slide>
      </div>
      <div className="cta-event">
        <Link to="/events" style={{outline: 'none', textDecoration: 'none'}}><button className="event-button pf-400">Opening soon</button></Link>
      </div>
    </div>
  )
}

export default EventSection
