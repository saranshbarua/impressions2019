import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import Particles from 'react-particles-js'

const AboutSection = () => {
  return (
    <div className="about-section" id="aboutSection">
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
      <div className="about-content">
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>01</span> IMPRESSIONS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">All about it</span></Fade>
        <Slide bottom>
          <p className="lato-400 about">
          Impressions, the annual techno-cultural festival of Jaypee Institute of Information Technology, Sector 62, Noida, is a two day pulsating festival with an array of events, 
          allowing the students to exhibit and participate in technical and academic pursuits of programming, robotics, panel discussions, talk shows and many more creative challenges.
          </p>
          <p className="lato-400 about">
          Impressions is that time of the year when the air around the vast campus is filled with exuberance and enthusiasm. 
          It provides ample opportunities to the young students of today to experience and live their passions doing theme walks, fashions shows and at the same time express their talent and versatility through choreography and street plays.
          With engaging events attracting a large amount of participants and featuring several widely renowned artists, Impressions will witness a crowd of around 9000 people.
          </p>
        </Slide>
      </div>
      <div className="about-image">
        <img src="http://www.littlecelt.net/wp-content/uploads/2012/01/large_2460883111.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default AboutSection
