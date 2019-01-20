import React from 'react'
import Fade from 'react-reveal'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);

export default function TeamPage() {
  return (
    <div className="events-page">
        <Fade top cascade><span className="pf-400 ev-head" style={{fontSize: '55px'}}>Team</span></Fade>
        <div className="team-sub">
          <Slide bottom><span className="pf-400 ts-head">Finance</span></Slide>

          <div className="team-card">
            <img src="./jycfinanceteam/apoorv.jpg" height="100%" width="100%" alt=""/>
            <div className="mem-details">
              <span className="mem-name pf-400">Apoorv Singhal</span>
              <span className="mem-desig pf-400">Director</span>
              <div className="mem-contact">
                <a
                  style={{
                    color: 'white'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/jiit.impressions/">
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
                  href="https://www.instagram.com/jiit.impressions/">
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
        </div>
    </div>
  )
}
