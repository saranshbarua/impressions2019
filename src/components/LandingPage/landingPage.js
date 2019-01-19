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
              <img height="100%" width="100%" src="https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg" alt=""/>
            </div>
          </div>
          <div className="frame">
            <div className="frame-photo">
              <img height="100%" width="100%" src="https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg" alt=""/>
            </div>
            <span className="pf-400" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black',
              fontSize: '25px'
            }}>
              #eiffel-tower #love
            </span>
          </div>
          <div className="frame-one frame-one-container">
            <div className="frame-photo">
              <img height="100%" width="100%" src="http://myhappiness.club/wp-content/uploads/2016/12/Norway-from-a-Kayak-wcth01.jpg" alt=""/>
            </div>
          </div>
          <div className="frame-one">
            <div className="frame-photo">
              <img height="100%" width="100%" src="http://myhappiness.club/wp-content/uploads/2016/12/Norway-from-a-Kayak-wcth01.jpg" alt=""/>
            </div>
            <span className="pf-400" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black',
              fontSize: '25px'
            }}>
              #dal-lake #wanderlust
            </span>
          </div>
          <div className="frame-2 frame-2-container">
            <div className="frame-photo">
              <img height="100%" width="100%" src="https://i.pinimg.com/originals/8b/da/60/8bda60d18f7a66f2fa0cc6532bbc236a.jpg" alt=""/>
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-photo">
              <img height="100%" width="100%" src="https://i.pinimg.com/originals/8b/da/60/8bda60d18f7a66f2fa0cc6532bbc236a.jpg" alt=""/>
            </div>
            <span className="pf-400" style={{
              alignSelf: 'flex-start',
              margin: '10px 20px',
              color: 'black',
              fontSize: '25px'
            }}>
              #eiffel-tower #love
            </span>
          </div>
          <Fade duration={700} delay={1500} top cascade>
            {/* <h2 className="lato-300 logo">IMPRESSIONS</h2> */}
            <div className="log"></div>
          </Fade>
          <div className="tagline-container">
            {/* <Fade delay={2000} distance={'50px'} bottom> */}
              <div style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                transition: 'transform .5s cubic-bezier(.215, .61, .355, 1), box-shadow .5s cubic-bezier(.215, .61, .355, 1)'              }}>
                <span className="ftw">Feel the Wanderlust</span>
                {/* <img src='./clock.png' alt=""/> */}
              </div>
            {/* </Fade> */}
            
          </div>
          <Fade duration={700} delay={1500} bottom cascade>
          <div className="lp-link-box">
            {/* <AnchorLink className="lp-link-boxes lp-link-box-one wow appear-box-one">
              <span className="pf-400 date">
                24th Feb 2019
              </span>
            </AnchorLink> */}
            <div className="lp-link-boxes lp-link-box-two">
              <div className="timer">
                <Clock deadline = {this.state.deadline} />
              </div>
              <span style={{marginBottom: '-10px', marginTop: '10px'}} className="lato-400 small-lato">COMING SOON</span>

            </div>
          </div>
          </Fade>
          
        </div>
    </div>
    )
  }
}


// const landingPage = () => {
//   return (
    
//   )
// }

// export default landingPage
