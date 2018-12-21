import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'; 

const AboutSection = () => {
  return (
    <div className="about-section" id="aboutSection">
      <div className="about-content">
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>01</span> IMPRESSIONS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">All about it</span></Fade>
        <Slide bottom>
          <p className="lato-400 about">
          Impressions, the annual techno-cultural festival of Jaypee Institute of Information Technology, Sector 62, Noida, is a two day pulsating festival with an array of events, 
          allowing the students to exhibit and participate in technical and academic pursuits of programming, robotics, panel discussions, talk shows and many more creative challenges.
          </p>
          <p className="lato-400 about">
          Impressions is that time of the year when the air around the vast campus is filled with exuberance and enthusiasm. 
          It provides ample opportunities to the young students of today to experience and live their passions doing theme walks, fashions shows and at the same time express their talent and versatility through choreography and street plays.
          With engaging events attracting a large amount of participants and featuring several widely renowned artists, Impressions will witness a crowd of around 9000 people.
          </p>
        </Slide>
      </div>
      <div className="about-image">
        <img src="http://www.hibridblog.com/wp-content/uploads/2016/11/gypsea-lust-6.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default AboutSection
