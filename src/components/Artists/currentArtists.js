import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const CurrentArtists = () => {
  return (
    <div className="about-section new-artist" id="aboutSection">
    <ParticlesDiv />
      <div className="about-content">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>Ritviz</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./ritviz.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
            Are you ready to sway to the pulsing beats of ‘Hum Toh Udd Gaye’ and ‘Barso’ this Impressions?
            So sit tight as we’ll take you on a journey to nirvana with Ritviz. A young Pune-based DJ, singer and dance music producer, he makes bass heavy music reach in eastern sounds owing to his training in Hindustani classical music. His most famous works include ‘Udd Gaye’, ‘Jeet’, ‘Barso’ as well as his 4-track EP titled ‘YUV’ which crossed 100,000 streams in less than 10 months of release.
            <br/>
            So, board your ticket to Impressions as more exciting reveals lie ahead.
            <br/>
            <i>#impressions2019 #feelthewanderlust #traveltales</i>
          </p>
          <div className="yt-video">
            <iframe src="https://www.youtube.com/embed/UFpz-ubpKdk" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
      <div className="about-image artist-image">
        <img src="./ritviz.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default CurrentArtists;
