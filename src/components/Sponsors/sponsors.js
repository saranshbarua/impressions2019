import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Particles from 'react-particles-js'


const sponsorsArray = ['./mediapartners/spon1.JPG',
  './mediapartners/Delhipedia.jpg',
  './mediapartners/DU Beats.jpg',
  './mediapartners/DU Bulletin.JPG',
  './mediapartners/DU Express.jpg',
  './mediapartners/du refresh news logo.png',
  './mediapartners/DU Updates.png',
  './mediapartners/DU Vibes.jpg',
  './mediapartners/Ignite_Engineers_Logo.png',
  './mediapartners/Know A Fest.PNG',
  './mediapartners/The Campus Media.jpg',
  './mediapartners/The Education Tree.jpg',
  './mediapartners/University Express.jpg'
];

const MapSponsors = () => {
  return (
    <div className="media-partner">
      {sponsorsArray.map(item => {
        return (
          <div className="spon-img" key={item}>
            <img src={item} height="100%" alt="" />
          </div>
        )
      })}
    </div>
  )
}

const Sponsors = () => {
  return (
    <div className="sponsors-container" id="sponsorsSection">
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
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "speed": 3,
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
              }
          }
      }}
        />
       <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> SPONSORS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Our Partners</span></Fade>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Media Partners</span></Slide>
        <MapSponsors />
    </div>
  )
}

export default Sponsors
