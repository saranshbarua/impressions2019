import React from 'react'
import Fade from 'react-reveal'
import Slide from 'react-reveal/Slide'

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
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
