import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

export default function Artist2() {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-image artist-image ai-right">
        <img src="./artist2.jpg" alt="Top view"/>
      </div>
      <div className="about-content ac-right">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>Guri</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./artist2.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
            Will Impressions actually be Impressions without adding some 'Punjabi Tadka'? 
            We know nothing can charge the crowd like Bhangra! Jump into a world of madness and  get ready to get each cell in your body electrified. 
            IMPRESSIONS'19 is all set to welcome the Punjabi Sensation- GURI! 
            Guri, born and brought up in Patiala has made a mark as a talented heartthrob as soon as he made his debut in the world of music. With hits like 'BILLIYAN BILLAYAN' and 'NIRA ISHQ', he is all set to sweep JIITians off their feet.
            <br/>
              All the Punjabi Mundas and Kudis in the house, start prepping up to set the dance floor on fire! 
              See you on the 23rd of February, 2019.
          </p>
          <div className="yt-video">
            <iframe title="artist-video-one" src="https://www.youtube.com/embed/uyqUJEDVCyo" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
    </div>
  )
}
