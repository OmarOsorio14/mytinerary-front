import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderElement from "./SliderElement";
import "../styles/Carousel.css"
export default function Carousel({title,data, load, redirection}) {
	
  var settings = {
		autoplay: true,
		//variableWidth: true,
		autoplaySpeed: 5000,
    dots: true,
		arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: load,
    slidesToScroll: load,
		rows: load
  };
  return (
		<div className="px-4 pb-14">
			<h2 className="text-4xl md:text-7xl font-bold py-6">{title}</h2>
			<Slider {...settings} className="px-6 pb-8">
				{data.map((card,index)=> <SliderElement key={index} id={card._id} title={card.name} subtitle={card.country} image={card.image} redirection={redirection} />)}
    	</Slider>
		</div>
    
  );
}