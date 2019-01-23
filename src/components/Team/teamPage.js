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
    facebook: 'https://www.facebook.com/ApoorvSinghal.8',
    instagram: 'https://instagram.com/apoorvsinghal.8'
  },
  {
    avatar: 'darpan.jpg',
    name: 'Darpan Jain',
    designation: 'Director',
    facebook: 'https://www.facebook.com/darpan.jain.5074',
    instagram: 'https://instagram.com/feat._me'
  }
];

const operationsDirector = [
  {
    avatar: 'ritikgupta.jpg',
    name: 'Ritik Gupta',
    designation: 'Director',
    facebook: 'https://www.facebook.com/R8303597678',
    instagram: 'https://instagram.com/__textrovert_'
  }
];

const operationsTeam = [
  {
    avatar: 'abhinav.jpg',
    name: 'Abhinav Garg',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/abhinav.garg.167',
    instagram: 'https://www.instagram.com/_abhinavgarg/'
  },
  {
    avatar: 'akansha.jpg',
    name: 'Akansha Tambde',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/akansha.tambde.5',
    instagram: 'https://instagram.com/akanshatambde'
  },
  {
    avatar: 'soota.jpg',
    name: 'Arjun Soota',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/arjun.soota',
    instagram: 'https://instagram.com/arjunsoota'
  },
  {
    avatar: 'mukul.jpg',
    name: 'Mukul Agrawal',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/mukul.agarwal.73700',
    instagram: 'https://instagram.com/mukul.agarwal.73700'
  },
  {
    avatar: 'skandha.jpg',
    name: 'Skandha Choudhry',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/skandha.choudhry',
    instagram: 'https://instagram.com/_skandha'
  }
];

const internalAffairsDirector = [
  {
    avatar: 'jayesh.jpg',
    name: 'Jayesh Majumdar',
    designation: 'Director',
    facebook: 'https://www.facebook.com/jayesh.majumdar',
    instagram: 'https://instagram.com/jayesh_majumdar_'
  }
];

const internalAffairsTeam = [
  {
    avatar: 'aditya.jpg',
    name: 'Aditya Bendapudi',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/aditya.bendapudi',
    instagram: 'https://instagram.com/adityabendapudi'
  },
  {
    avatar: 'ankur.jpg',
    name: 'Ankur Jain',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/pv.ankur',
    instagram: 'https://instagram.com/ankur.jain98'
  },
  {
    avatar: 'hardik.jpg',
    name: 'Hardik Sharma',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/hardik.torres',
    instagram: 'https://instagram.com/hrdikshrma'
  },
  {
    avatar: 'shubham.jpg',
    name: 'Shubham Singh',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/Sam10747',
    instagram: 'https://instagram.com/shubham_singh19'
  }
];

const prDirector = [
  {
    avatar: 'dhruv.jpg',
    name: 'Dhruv Gupta',
    designation: 'Director',
    facebook: 'https://www.facebook.com/dhruv.guptaa.7',
    instagram: 'https://instagram.com/imdhruvgupta'
  },
  {
    avatar: 'himanish.jpg',
    name: 'Himanish Kaul',
    designation: 'Director',
    facebook: 'https://www.facebook.com/Heavenly.Crisis98',
    instagram: 'https://instagram.com/himanish98'
  }
];

const prTeam = [
  {
    avatar: 'ayush.jpg',
    name: 'Ayush Singh',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/profile.php?id=100005715488165',
    instagram: 'https://instagram.com/ayushsingh_13'
  },
  {
    avatar: 'prakhar.jpg',
    name: 'Prakhar Chauhan',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/prakhar.chauhan.779',
    instagram: 'https://instagram.com/prakhar.chauhan.779'
  },
  {
    avatar: 'prapti.jpg',
    name: 'Prapti Miglani',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/praptiisthecoolest',
    instagram: 'https://instagram.com/prapti_14'
  }
];

const mntDirector = [
  {
    avatar: 'prateek.jpg',
    name: 'Prateek Bansal',
    designation: 'Director (Technical)',
    facebook: 'https://www.facebook.com/prateek.bansal.357',
    instagram: 'https://instagram.com/prateekb123'
  },
  {
    avatar: 'shruti.jpg',
    name: 'Shruti Ahuja',
    designation: 'Director (Media)',
    facebook: 'https://www.facebook.com/shruti.ahuja.750',
    instagram: 'https://instagram.com/ishrutiahuja'
  }
];

const mntTeam = [
  {
    avatar: 'neha.jpg',
    name: 'Neha Rastogi',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/neha.rastogi.5209',
    instagram: 'https://instagram.com/neha.rastogi31'
  },
  {
    avatar: 'prayas.jpg',
    name: 'Prayas Lashkari',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/PrayasLashkari',
    instagram: 'https://instagram.com/prayas_98'
  },
  {
    avatar: 'saransh.jpg',
    name: 'Saransh Barua',
    designation: 'Web Master',
    facebook: 'https://www.facebook.com/saransh.barua',
    instagram: 'https://www.instagram.com/saranshbarua/'
  },
  {
    avatar: 'saurabh.jpg',
    name: 'Saurabh Pandey',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/profile.php?id=100007464676872',
    instagram: 'https://instagram.com/pandey__jii'
  }
];

const creativeTeam = [
  {
    avatar: 'aayushi.jpg',
    name: 'Aayushi Dohare',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/aayushi.dohare',
    instagram: 'https://instagram.com/aayushi.dohare'
  },
  {
    avatar: 'niharinth.jpg',
    name: 'Niharinth S Selva',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/Ladlikeselva',
    instagram: 'https://instagram.com/broodyblues'
  },
  {
    avatar: 'rangoli.jpg',
    name: 'Rangoli Chitranshi',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/rangoli.chitranshi',
    instagram: 'https://instagram.com/rangoli13'
  }
];

const mapPeople = (teamType, folderName, cardClasses) => {
  return(
    <div className="team-sub">
      {teamType.map((item,i) => {
      let imgSrc = `./${folderName}/${item.avatar}`;
      return(
      <div className={cardClasses} key={i}>
        <img src={imgSrc} width="100%" alt="team member"/>
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
    <div className="events-page team-page">
        <Fade top cascade><span className="pf-400 t-head">Meet the team</span></Fade>
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Finance</span></Slide>
        {mapPeople(financeTeam, 'jycfinanceteam', 'team-card')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Operations</span></Slide>
        {mapPeople(operationsDirector,'jycoperationsteam', 'team-card')}
        {mapPeople(operationsTeam, 'jycoperationsteam','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Internal Affairs</span></Slide>
        {mapPeople(internalAffairsDirector,'jycteaminternalaffairs', 'team-card')}
        {mapPeople(internalAffairsTeam, 'jycteaminternalaffairs','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Public Relations</span></Slide>
        {mapPeople(prDirector,'jycteampublicrelations', 'team-card')}
        {mapPeople(prTeam, 'jycteampublicrelations','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Media and Technical</span></Slide>
        {mapPeople(mntDirector,'jycteammediatechnical', 'team-card')}
        {mapPeople(mntTeam, 'jycteammediatechnical','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Creative</span></Slide>
        {mapPeople(creativeTeam, 'jycteamcreative','team-card team-card-small')}
    </div>
  )
}
