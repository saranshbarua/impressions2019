import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Sponsors = () => {
  return (
    <div className="sponsors-container" id="sponsorsSection">
       <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> SPONSORS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Our Partners</span></Fade>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Media Partners</span></Slide>
        <div className="media-partner">
          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>

          <div className="spon-img">
            <img src='./mediapartners/spon1.JPG' height="100%" alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Sponsors
