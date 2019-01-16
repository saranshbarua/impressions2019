import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import  { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

const EventSection = () => {
  return (
    <div className="event-section" id="eventsSection">
     <Particles 
         style={{
           zIndex: 1,
           position: 'absolute',
           top: '0px',
           left: '0px',
           width: '100%'
         }}
         params={{
          "particles": {
              "number": {
                  "value": 50,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "speed": 2,
                      "size_min": 0.3
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 0.7,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 300,
                      "duration": 2,
                      "size": 4,
                      "opacity": 0.6
                  },
                  "repulse": {
                      "distance": 220,
                      "duration": 3
                  }
              },
              "retina-detect": false
          }
      }}
        />
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
        <Link to="/events" style={{outline: 'none', textDecoration: 'none'}}><button className="event-button pf-400">Opening soon</button></Link>
      </div>
    </div>
  )
}

export default EventSection
