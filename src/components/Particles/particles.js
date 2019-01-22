import React from 'react'
import Particles from 'react-particles-js'

export default function ParticlesDiv() {
  return (
    <React.Fragment>
      <Particles 
         style={{
           zIndex: 1,
           position: 'fixed',
           top: '0px',
           left: '0px',
           width: '100%'
         }}
         params={{
          "particles": {
              "number": {
                  "value": 150,
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
              "detect_on": "window",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 200,
                      "duration": 2,
                      "size": 4,
                      "opacity": 1
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
    </React.Fragment>
  )
}
