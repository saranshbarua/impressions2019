import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ArtistCarousel from '../Carousel/carousel'
import Particles from 'react-particles-js'
import ParticlesDiv from '../Particles/particles'

const Team = () => {
  return (
    <div className="team-section" id="teamSection">
    <ParticlesDiv />
    {/* <Particles 
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
        /> */}
    <div className="team-content">
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> SQUAD</span>
      <Fade duration={700} top cascade><span className="pf-400 team-heading">Meet the team</span></Fade>
      <Slide bottom>
        <p className="lato-400 about">
        Impressions, the annual techno-cultural festival of Jaypee Institute of Information Technology, Sector 62, Noida, is a two day pulsating festival with an array of events, 
        allowing the students to exhibit and participate in technical and academic pursuits of programming, robotics, panel discussions, talk shows and many more creative challenges.
        </p>
      </Slide>
    </div>
    <div className="team-image">
      <ArtistCarousel />
    </div>
  </div>  
  )
}

export default Team
