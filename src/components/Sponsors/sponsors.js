import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import ParticlesDiv from '../Particles/particles'

const powerSponsor = ['./powerSponsor/rtm.png'];

const asso = ['./asso/pnb.jpg'];

const eventPartners = ['./eventpartners/hariwell.jpg'];

const foodPartners = ['./foodpartners/top.jpg','./foodpartners/toc.png'];

const mediaPartners = ['./mediapartners/spon1.JPG',
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

const MapSponsors = (partnerType, classType) => {
  return (
    <div className={classType}>
      {partnerType.map(item => {
        return (
          <div className="spon-img" key={item}>
            <img src={item} height="100%" alt="sponsors image" />
          </div>
        )
      })}
    </div>
  )
}

const Sponsors = () => {
  return (
    <div className="sponsors-container" id="sponsorsSection">
       <ParticlesDiv />
       <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> SPONSORS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Our Partners</span></Fade>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Powered by</span></Slide>
        {MapSponsors(powerSponsor)}
        <br/><br/>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">In association with</span></Slide>
        {MapSponsors(asso)}
        <br/><br/>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Event Partner</span></Slide>
        {MapSponsors(eventPartners)}
        <br/> <br/>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Food Partners</span></Slide>
        {MapSponsors(foodPartners, 'simple-flex')}
        <br/> <br/>
        <Slide duration={700} bottom><span className="pf-400 section-heading section-subheading">Media Partners</span></Slide>
        {MapSponsors(mediaPartners, 'media-partner')}
    </div>
  )
}

export default Sponsors
