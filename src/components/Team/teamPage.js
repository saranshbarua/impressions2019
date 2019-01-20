import React from 'react'
import Fade from 'react-reveal'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);

const financeTeam = [
  {
    avatar: 'apoorv.jpg',
    name: 'Apoorv Singhal',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'darpan.jpg',
    name: 'Darpan Jain',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
]

const mapPeople = (teamType, folderName) => {
  return(
    <div className="team-sub">
      {teamType.map((item,i) => {
        let imgSrc = `./${folderName}/${item.avatar}`
      return(
      <div className="team-card" key={i}>
        <img src={imgSrc} height="100%" width="100%" alt="team member"/>
        <div className="mem-details">
          <span className="mem-name pf-400">{item.name}</span>
          <span className="mem-desig pf-400">{item.designation}</span>
          <div className="mem-contact">
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={item.facebook}>
              <FontAwesomeIcon 
                icon={["fab", "facebook"]}
                size="2x"
                style={{
                  margin: '0px 5px',
                  color: '#3b5998',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
            </a>
            &nbsp;
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={item.instagram}>
              <FontAwesomeIcon 
                icon={["fab", "instagram"]}
                size="2x"
                style={{
                  margin: '0px 5px',
                  color: '#e4405f',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
            </a> 
          </div>
        </div>
      </div>
    )
  })}
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="events-page">
        <Fade top cascade><span className="pf-400 ev-head" style={{fontSize: '55px'}}>Team</span></Fade>
        <Slide bottom><span className="pf-400 ts-head">Finance</span></Slide>
          {mapPeople(financeTeam, 'jycfinanceteam')}
    </div>
  )
}
