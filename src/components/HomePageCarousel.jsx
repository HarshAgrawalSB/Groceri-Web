import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow } from "./carousel/PrevArrow";
import { NextArrow } from "./carousel/NextArrow";
import CAROUSEL1 from "../assets/carousel-1.webp";
import CAROUSEL2 from "../assets/carousel-2.webp";
import CAROUSEL3 from "../assets/carousel-3.webp";
import CAROUSEL4 from "../assets/carousel-4.webp";

const HomePageCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Your pet choice for fresh healthy food",
      image: CAROUSEL1,
    },
    { id: 2, title: "Spring cleaning for home appliances", image: CAROUSEL2 },
    { id: 3, title: "Washing item with discount product", image: CAROUSEL3 },
    { id: 3, title: "Fresh Quality meat item with discount", image: CAROUSEL4 },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className=" mx-10 relative ">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-between">
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">Get your clean on supplies</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageCarousel;
