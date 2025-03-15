import React, { useRef } from "react";
import Slider from "react-slick";
import invertedComma from "../../assets/invertedComma.png";
import reviewer from "../../assets/reviewer.png";
import starFilled from "../../assets/starFilled.png";
import starUnfilled from "../../assets/starUnfilled.png";

const data = [
  {
    id: 1,
    name: "John Williams",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 4,
    image: reviewer,
    designation: "Lead designer",
  },
  {
    id: 2,
    name: "John Williams",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 3,
    image: reviewer,
    designation: "Lead designer",
  },
  {
    id: 3,
    name: "John Williams",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 5,
    image: reviewer,
    designation: "Lead designer",
  },
  {
    id: 4,
    name: "John Williams",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 4,
    image: reviewer,
    designation: "Lead designer",
  },
];

const Reviews = (props) => {
  const sliderNav = useRef(null);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "20%", // for partially view previous & next slide
  };

  return (
    <div className="slider-container mt-[160px]">
      <p className="text-5xl capitalize font-anton text-center tracking-wide">Hear what <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C1842D] to-[#ECC974]">rizz</span> patients have to say</p>
      <Slider {...settings} ref={sliderNav}>
        {data.map((d) => (
          <div key={d.id} className="p-10 review-card rounded-xl relative mt-14">
            <img
              className="absolute top-8 left-8"
              src={invertedComma}
              alt="Inverted Comma"
            />
            <p className="pt-10 tracking-wider leading-7 text-[16px] text-left font-thin">
              {d.message}
            </p>
            <div className="flex justify-center items-center gap-x-3 my-9">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < d.star ? starFilled : starUnfilled}
                  alt={index < d.star ? "Filled Star" : "Unfilled Star"}
                  className="w-6 h-6"
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-5">
              <img src={d.image} alt={d.name} height="60px" width="60px" />
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl">{d.name}</h3>
                <h3 className="font-semibold text-[#FFFFFF] opacity-50">{d.designation}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
