import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const Artist3 = () => {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-content">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>Jean Marie</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./jean.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
            How can Impressions be complete without the buzz of EDM?
            <br />
            This time, we bring to you Jean Marie, an international DJ, Producer, Songwriter and Italian Remixer with French ancestry to set the stage on fire with his pulsating beats. Having worked with the likes of Snoop Dogg, Sean Paul and Florida and after performing at the best stages around the world- including Ultra Music Festival, he is ready to create a magical atmosphere with his hypnotic tunes in JIIT.
            <br />
            So tune into the rhythm with Jean Marie for one of the best nights of your life at Impressions’19.
            <br />
            <i>#impressions2019 #feelthewanderlust #traveltales</i>
          </p>
          <div className="yt-video">
            <iframe title="artist-video-one" src="https://www.youtube.com/embed/hUDDgka7V8c" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
      <div className="about-image artist-image">
        <img src="./jean.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default Artist3;
