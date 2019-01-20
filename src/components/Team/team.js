import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ArtistCarousel from '../Carousel/carousel'
import ParticlesDiv from '../Particles/particles'

const Team = () => {
  return (
    <div className="team-section" id="teamSection">
    <ParticlesDiv />
    <div className="team-content">
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>05</span> SQUAD</span>
      <Fade duration={700} top cascade><span className="pf-400 team-heading">Meet the team</span></Fade>
      <Slide bottom>
        <p className="lato-400 about">
          The team behind Impressions has devoted its months to ensure that it remains a memorable and truly impressionable experience for all those who witness it. 
          Having a diverse set of people with skills ranging from Public Relations to Management and Marketing to Design, 
          the team has pledged to raise the bar set by previous generations.
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
