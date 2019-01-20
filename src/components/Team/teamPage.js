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
];

const operationsDirector = [
  {
    avatar: 'ritikgupta.jpg',
    name: 'Ritik Gupta',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const operationsTeam = [
  {
    avatar: 'abhinav.jpg',
    name: 'Abhinav Garg',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'akansha.jpg',
    name: 'Akansha Tambde',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'soota.jpg',
    name: 'Arjun Soota',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'mukul.jpg',
    name: 'Mukul Agrawal',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'skandha.jpg',
    name: 'Skandha Choudhry',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const internalAffairsDirector = [
  {
    avatar: 'jayesh.jpg',
    name: 'Jayesh Majumdar',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const internalAffairsTeam = [
  {
    avatar: 'aditya.jpg',
    name: 'Aditya Bendapudi',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'ankur.jpg',
    name: 'Ankur Jain',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'hardik.jpg',
    name: 'Hardik Sharma',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'shubham.jpg',
    name: 'Shubham Singh',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const prDirector = [
  {
    avatar: 'dhruv.jpg',
    name: 'Dhruv Gupta',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'himanish.jpg',
    name: 'Himanish Kaul',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const prTeam = [
  {
    avatar: 'ayush.jpg',
    name: 'Ayush Singh',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'prakhar.jpg',
    name: 'Prakhar Chauchan',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  },
  {
    avatar: 'prapti.jpg',
    name: 'Prapti Miglani',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/jiit.impressions/',
    instagram: 'https://www.facebook.com/jiit.impressions/'
  }
];

const mapPeople = (teamType, folderName, cardClasses) => {
  return(
    <div className="team-sub">
      {teamType.map((item,i) => {
      let imgSrc = `./${folderName}/${item.avatar}`;
      return(
      <div className={cardClasses} key={i}>
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
        {mapPeople(financeTeam, 'jycfinanceteam', 'team-card')}
        <Slide bottom><span className="pf-400 ts-head">Operations</span></Slide>
        {mapPeople(operationsDirector,'jycoperationsteam', 'team-card')}
        {mapPeople(operationsTeam, 'jycoperationsteam','team-card team-card-small')}
        <Slide bottom><span className="pf-400 ts-head">Internal Affairs</span></Slide>
        {mapPeople(internalAffairsDirector,'jycteaminternalaffairs', 'team-card')}
        {mapPeople(internalAffairsTeam, 'jycteaminternalaffairs','team-card team-card-small')}
        <Slide bottom><span className="pf-400 ts-head">Public Relations</span></Slide>
        {mapPeople(prDirector,'jycteampublicrelations', 'team-card')}
        {mapPeople(prTeam, 'jycteampublicrelations','team-card team-card-small')}
    </div>
  )
}
