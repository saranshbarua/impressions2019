import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ArtistCarousel from '../Carousel/carousel'

const Team = () => {
  return (
    <div className="team-section" id="teamSection">
    <div className="team-content">
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> SQUAD</span>
      <Fade duration={700} top cascade><span className="pf-400 team-heading">Meet the team</span></Fade>
      <Slide bottom>
        <p className="lato-400 about">
        Impressions, the annual techno-cultural festival of Jaypee Institute of Information Technology, Sector 62, Noida, is a two day pulsating festival with an array of events, 
        allowing the students to exhibit and participate in technical and academic pursuits of programming, robotics, panel discussions, talk shows and many more creative challenges.
        </p>
      </Slide>
    </div>
    <div className="team-image">
      <ArtistCarousel />
    </div>
  </div>  
  )
}

export default Team
