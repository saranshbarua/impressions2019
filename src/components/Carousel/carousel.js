import React, { Component } from "react";
import Slider from "react-slick";

export default class ArtistCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
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
          <div>
            <div className="artist-card">
            
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
