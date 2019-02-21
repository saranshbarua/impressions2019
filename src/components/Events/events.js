import React from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

const hubInfo = [
  {
    name: 'Jhankar',
    eventCount: '3',
    link: '/jhankar',
    logo: './jhanka.jpg'
  },
  {
    name: 'JPEG',
    eventCount: '2',
    link: '/jpeg',
    logo: './jpeg.png'
  },
  {
    name: 'CICE',
    eventCount: '3',
    link: '/cice',
    logo: './cice.png'
  },
  {
    name: 'Graphicas',
    eventCount: '1',
    link: '/graphicas',
    logo: './grafi.jpg'
  },
  {
    name: 'Cresendo',
    eventCount: '4',
    link: '/cresendo',
    logo: './cresendo.png'
  },
  {
    name: 'IOE',
    eventCount: '2',
    link: '/ioe',
    logo: './ioe.png'
  },
  {
    name: 'Kalakriti',
    eventCount: '2',
    link: '/kalakriti',
    logo: './kala.jpg'
  },
  {
    name: 'DSC',
    eventCount: '2',
    link: '/dsc',
    logo: './dsc.png'
  },
  {
    name: 'Knuth',
    eventCount: '3',
    link: '/knuth',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQExLsnLuNFZ8w/company-logo_200_200/0?e=2159024400&v=beta&t=_WDOcKLT02xVQmDxJ_F2r9rO0YMzYpfx0lBSA7sL6Tg'
  },
  {
    name: 'Parola',
    eventCount: '2',
    link: '/parola',
    logo: './paro.jpg'
  },
  {
    name: 'UCR',
    eventCount: '4',
    link: '/ucr',
    logo: './ucr.png'
  },
  {
    name: 'Game development hub',
    eventCount: '3',
    link: '/gdh',
    logo: './gdh.png'
  },
  {
    name: 'Radiance',
    eventCount: '1',
    link: '/radiance',
    logo: './radiance.jpg'
  },
  {
    name: 'Page turner society',
    eventCount: '2',
    link: '/pts',
    logo: './pts.jpg'
  },
  {
    name: 'Thespian',
    eventCount: '3',
    link: '/thespian',
    logo: './thesp.png'
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
              <Link style={{outline: 'none', textDecoration: 'none', color: 'white'}} to={`/events${item.link}`} key={i}>
                <div className="hub-card">
                  <div className="hub-img">
                    <img src={item.logo}
                    alt="logo"
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
