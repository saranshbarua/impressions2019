import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

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
            <img src={item} height="100%" />
          </div>
        )
      })}
    </div>
  )
}

const Sponsors = () => {
  return (
    <div className="sponsors-container" id="sponsorsSection">
       <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> SPONSORS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Our Partners</span></Fade>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Media Partners</span></Slide>
        {/* <div className="media-partner"> */}
          <MapSponsors />
          {/* <div className="spon-img">
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
          </div> */}
        {/* </div> */}
    </div>
  )
}

export default Sponsors
