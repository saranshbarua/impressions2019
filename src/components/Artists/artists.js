import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'

const Artists = () => {
  return (
      <div className="artist-container" id="artistsSection">
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>02</span> PREVIOUS ARTISTS</span>
        <Fade duration={700} top cascade><span className="pf-400 section-heading">Superstars</span></Fade>
        <Slide bottom>
            <p className="lato-400 about artist">
            Over the years, Impressions has witnessed the presence of celebrities like Nikhil D’souza with Band, SUNBURN Campus, Vh1 Supersonic 101 with prominent artists performing there. 
            Nikhil Chinapa, who is a VJ, RJ and actor as well as a host of reality shows such as MTV Splitsvilla 
            and India’s Got Talent has graced the stage at Impressions. Extremely well known Punjabi artists like Yo Yo Honey Singh and Musical Doctorz Sukh E with mass fan following have also performed here as well as Kailash Kher, 
            which is a name that needs no introductions. 
            Bands like The Local Train and EDM artists like Tatva K, Van Moon, Zaeden and Sartek, Anish Sood, RDB, K.K., Euphoria, Parikrama, Bombay Rockers, and Neeraj Sridhar have also joined this stage. 
            The fest has also seen international artists like Rave Radio, Candice Redding and Club Banditz.
            </p>
          </Slide>
      </div>
  )
}

export default Artists
