import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

export default class Merc extends Component {
  render() {
    return (
      <div className="merc-container" id="mercSection">
        <ParticlesDiv />
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> MERCHANDISE</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Wear the swag</span></Fade>
        <div className="merc-cont">
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tone.jpg" width="100%" alt="Tshirt one"/>
              <a style={{textDecoration: 'none', outline: 'none'}} rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfGisO3ul66GFa048VI0nYZKbnguP4DuBYo0KqAWGAnvXa6YQ/viewform" target="_blank"><button className="tee-button pf-400">Buy now</button></a>
            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/ttwo.jpg" width="100%" alt="Tshirt two"/>
              <a style={{textDecoration: 'none', outline: 'none'}} rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScfBdiDnEaoWzUyWqdFnBTET4iNo0KMj4cIyLPJ1Z-JxuEMbw/viewform" target="_blank"><button className="tee-button pf-400">Buy now</button></a>
            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tthree.jpg" width="100%" alt="Tshirt three"/>
              <a style={{textDecoration: 'none', outline: 'none'}} rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScnh-litpgPmfNW0vvydL_UDml9OeSGVTShh8ai3B1TT_Kl1w/viewform" target="_blank"><button className="tee-button pf-400">Buy now</button></a>
            </div>
            <div className="tee-card" style={{zIndex: '5'}}>
              <img src="./merch/tfour.jpg" width="100%" alt="Tshirt four"/>
              <a style={{textDecoration: 'none', outline: 'none'}} rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc2KuFNpiO3T-c4cvrlU9Mx1VT4d6EUU-3iIh3uJe2xEMsefg/viewform" target="_blank"><button className="tee-button pf-400">Buy now</button></a>
            </div>
        </div>
      </div>
    )
  }
}
