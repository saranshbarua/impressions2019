import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import Particles from 'react-particles-js'

const Artists = () => {
  return (
      <div className="artist-container" id="artistsSection">
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
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>02</span> PREVIOUS ARTISTS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Superstars</span></Fade>
        <Slide bottom>
            <p className="lato-400 about artist">
            Over the years, Impressions has witnessed the presence of celebrities like Nikhil D’souza with Band, SUNBURN Campus, Vh1 Supersonic 101 with prominent artists performing there. 
            Nikhil Chinapa, who is a VJ, RJ and actor as well as a host of reality shows such as MTV Splitsvilla 
            and India’s Got Talent has graced the stage at Impressions. Extremely well known Punjabi artists like Yo Yo Honey Singh and Musical Doctorz Sukh E with mass fan following have also performed here as well as Kailash Kher, 
            which is a name that needs no introductions. 
            Bands like The Local Train and EDM artists like Tatva K, Van Moon, Zaeden and Sartek, Anish Sood, RDB, K.K., Euphoria, Parikrama, Bombay Rockers, and Neeraj Sridhar have also joined this stage. 
            The fest has also seen international artists like Rave Radio, Candice Redding and Club Banditz.
            </p>
          </Slide>
      </div>
  )
}

export default Artists
