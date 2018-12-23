import React from 'react'
// import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'

const Sponsors = () => {
  return (
    <div className="sponsors-container">
       <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> SPONSORS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Our Partners</span></Fade>
        
    </div>
  )
}

export default Sponsors
