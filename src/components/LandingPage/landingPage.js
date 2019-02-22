import React from 'react'
import Fade from 'react-reveal/Fade'
import { Component } from 'react'
import Clock from '../Clock/clock'
import ParticlesDiv from '../Particles/particles'

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Feb, 23, 2019'
    }
  }

  render() {
    return (
      <div className="lp-container">
        <ParticlesDiv hover={false} />
        <div className="lp-main pf-400">
        <div className="frame frame-container">
            <div className="frame-photo">
              <img height="100%" width="100%" src="./picthree.jpg" alt="eiffel tower"/>
            </div>
          </div>
          <div className="frame">
            <div className="frame-photo">
              <img height="100%" width="100%" src="./picthree.jpg" alt="eiffel tower"/>
            </div>
            <span className="pf-400 photo-text" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black'
            }}>
              #eiffel-tower #love
            </span>
          </div>
          <div className="frame-one frame-one-container">
            <div className="frame-photo">
              <img height="100%" width="100%" src="./pictwo.jpg" alt="Dal lake"/>
            </div>
          </div>
          <div className="frame-one">
            <div className="frame-photo">
              <img height="100%" width="100%" src="pictwo.jpg" alt="Dal lake"/>
            </div>
            <span className="pf-400 photo-text" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black'
            }}>
              #dal-lake #wanderlust
            </span>
          </div>
          <div className="frame-2 frame-2-container">
            <div className="frame-photo">
              <img height="100%" width="100%" src="./picone.jpg" alt="nature"/>
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-photo">
              <img height="100%" width="100%" src="./picone.jpg" alt="nature"/>
            </div>
            <span className="pf-400 photo-text" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black'
            }}>
              #nature #love
            </span>
          </div>
          <Fade duration={700} delay={1500} top cascade>
            <div className="log"></div>
          </Fade>
          <div className="tagline-container appear-top-2">
              {/* <div style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transition: 'transform .5s cubic-bezier(.215, .61, .355, 1), box-shadow .5s cubic-bezier(.215, .61, .355, 1)'              }}> */}
                <span className="ftw">Feel the Wanderlust</span>
              {/* </div>             */}
          </div>
          <div className="lp-link-box">
            <div className="lp-link-boxes lp-link-box-two appear-top">
              <div className="timer">
                <Clock deadline = {this.state.deadline} />
              </div>
              <span style={{marginBottom: '-10px', marginTop: '10px'}} className="lato-400 small-lato">THE WAIT IS OVER</span>

            </div>
          </div>          
        </div>
    </div>
    )
  }
}
