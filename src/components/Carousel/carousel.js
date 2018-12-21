import React, { Component } from "react";
import Slider from "react-slick";

export default class ArtistCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
        }
      ]
    };
    return (
      <div className="caro">
        <Slider {...settings}>
          <div>
            <div className="artist-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/NikhilDSouza_WikiCommons.jpg" alt="nikhil"/>
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
          <div>
            <div className="artist-card">
            
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
