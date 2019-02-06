import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'
import eventsInfo from './eventStore'

export default class HubEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hub: this.props.match.params.hubId
    }
  }

  mapEvents() {
    let remainingEvents = eventsInfo[this.state.hub].events.slice(1);
    return (
      remainingEvents.map((item,i) => {
        let desc = item.desc;
        let newText = desc.split('\n').map((item, i) => {
            return <p key={i} className="lato-400 ep-desc">{item}</p>;
        });
        return (
          <div className="event-box ep-ex-box" key={i}>
            <span className="ep-heading pf-400">
              <Slide bottom>{item.name}</Slide>
            </span>
            <Slide>
              {/* <span > */}
                {newText}
              {/* </span> */}
              <span className="lato-400 ep-desc"> <b>Time: {item.time}</b></span>
              <span className="lato-400 ep-desc"> <b>Venue: {item.room}</b></span>
              <a href={item.link} className="ep-register pf-400">Register now</a>
            </Slide>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="ep-cont">
        <span className="pf-400 ep-hub-name"><Slide top cascade>{eventsInfo[this.state.hub].hubName}</Slide></span>
        <div className="ep-top">
          <div className="ep-logo">
            <img width="100%" src="https://media.licdn.com/dms/image/C4E0BAQExLsnLuNFZ8w/company-logo_200_200/0?e=2159024400&v=beta&t=_WDOcKLT02xVQmDxJ_F2r9rO0YMzYpfx0lBSA7sL6Tg" alt="hub logo" />
          </div>
          <div className="event-box">
            <span className="ep-heading pf-400">
              <Slide bottom>{eventsInfo[this.state.hub].events[0].name}</Slide>
            </span>
            <Slide>
              <span className="lato-400 ep-desc">
                {eventsInfo[this.state.hub].events[0].desc}
              </span>
              <span className="lato-400 ep-desc"> <b>Time: {eventsInfo[this.state.hub].events[0].time}</b></span>
              <span className="lato-400 ep-desc"> <b>Venue: {eventsInfo[this.state.hub].events[0].room}</b></span>
              <a href={eventsInfo[this.state.hub].events[0].link} className="ep-register pf-400">Register now</a>
            </Slide>
          </div>
        </div>

        <div className="more-events">
          {this.mapEvents()}
        </div>


      </div>
    )
  }
}

