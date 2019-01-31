import React from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

const hubInfo = [
  {
    name: 'Icreate',
    eventCount: '2',
    link: '/icreate'
  },
  {
    name: 'Jhankar',
    eventCount: '4',
    link: '/jhankar'
  },
  {
    name: 'JPEG',
    eventCount: '3',
    link: '/jpeg'
  },
  {
    name: 'CICE',
    eventCount: '3',
    link: '/cice'
  },
  {
    name: 'Graphicas',
    eventCount: '1',
    link: '/graphicas'
  },
  {
    name: 'Cresendo',
    eventCount: '4',
    link: '/cresendo'
  },
  {
    name: 'IOE',
    eventCount: '2',
    link: 'ioe'
  },
  {
    name: 'Kalakriti',
    eventCount: '2',
    link: '/kalakriti'
  },
  {
    name: 'DSC',
    eventCount: '2',
    link: '/dsc'
  },
  {
    name: 'Knuth',
    eventCount: '3',
    link: '/knuth'
  },
  {
    name: 'Parola',
    eventCount: '2',
    link: '/parola'
  },
  {
    name: 'UCR',
    eventCount: '4',
    link: '/ucr'
  },
  {
    name: 'Game development hub',
    eventCount: '3',
    link: '/gdh'
  },
  {
    name: 'Radiance',
    eventCount: '3',
    link: '/radiance'
  },
  {
    name: 'Page turner society',
    eventCount: '2',
    link: '/pts'
  },
  {
    name: 'Thespian',
    eventCount: '3',
    link: '/thespian'
  },
  {
    name: 'Adwitiya',
    eventCount: '2',
    link: '/adwitiya'
  }
];

const Events = () => {
  return (
    <div className="events-page">
      <Fade top cascade><span className="pf-400 ev-head">Events</span></Fade>
      <div className="hubs-cont">
      {
        hubInfo.map((item,i) => {
          return (
              <Link style={{outline: 'none', textDecoration: 'none', color: 'white'}} to={`/eventlol${item.link}`} key={i}>
                <div className="hub-card">
                  <div className="hub-img">
                    <img src="https://media.licdn.com/dms/image/C4E0BAQExLsnLuNFZ8w/company-logo_200_200/0?e=2159024400&v=beta&t=_WDOcKLT02xVQmDxJ_F2r9rO0YMzYpfx0lBSA7sL6Tg"
                    alt="logo"
                    height="90%"
                    />
                  </div>
                  <div className="hub-content">
                      <span className="pf-400 hub-name">{item.name}</span>
                      <span className="lato-400 small-lato event-count">{item.eventCount} Events</span>
                  </div>
                </div>
              </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default Events
