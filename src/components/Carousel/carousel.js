import React, { Component } from "react";
import Slider from "react-slick";

export default class ArtistCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: this.props.dots,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="caro">
        <Slider {...settings}>
            <div className="artist-card" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img height="300px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img height="300px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img height="300px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img height="300px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>

            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>
          
        </Slider>
      </div>
    );
  }
}
