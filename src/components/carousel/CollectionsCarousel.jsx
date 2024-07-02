import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow } from "./PrevArrow";
import { NextArrow } from "./NextArrow";
import COLLECTION1 from "../../assets/collection-1.webp";
import COLLECTION2 from "../../assets/collection-2.webp";
import COLLECTION3 from "../../assets/collection-3.webp";
import COLLECTION4 from "../../assets/collection-4.webp";

const CollectionsCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Feel the Thirst in summer anytime",
      description: "Your body's way of telling you that it's make strong",
      image: COLLECTION1,
    },
    {
      id: 2,
      title: "Most popular item for Fast food",
      image: COLLECTION2,
      description: "Tasty and spicy fast food with different flavors.",
    },
    {
      id: 3,
      title: "Authentic japanese food in real taste",
      image: COLLECTION3,
      description: "Your body's way of telling you that it's make strong",
    },
    {
      id: 3,
      title: "Explore our family of freshest Foods",
      description: "Your pet’s way of telling you that it's make taste",
      image: COLLECTION4,
    },
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 hover:text-[#02b290]">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollectionsCarousel;
