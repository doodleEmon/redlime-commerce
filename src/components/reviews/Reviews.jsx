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
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "20%", // Allows partial view of previous/next slide
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480, // Phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5%",
        },
      },
    ],
  };

  // const settings = {
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoPlay: true,
  //   arrows: false,
  //   dots: true,
  //   centerMode: true,
  //   centerPadding: "20%", // for partially view previous & next slide
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //         autoPlay: true
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         autoPlay: true
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoPlay: true
  //       },
  //     },
  //     {
  //       breakpoint: 320,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoPlay: true
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="slider-container max-sm:mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] xl:mt-[160px]">
      <p className="max-sm:text-2xl sm:text-2xl md:text-3xl lg:text-5xl capitalize font-anton text-center tracking-wide">
        Hear what{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C1842D] to-[#ECC974]">
          rizz
        </span>{" "}
        patients have to say
      </p>
      <Slider {...settings} ref={sliderNav}>
        {data.map((d) => (
          <div
            key={d.id}
            className="max-sm:p-4 sm:p-4 md:p-5 lg:p-10 review-card rounded-xl relative   max-sm:mt-5 sm:mt-5 md:mt-10 lg:mt-14"
          >
            <img
              className="absolute max-sm:top-4 sm:top-4 md:top-5 lg:top-8 max-sm:left-4 sm:left-4 md:left-5 lg:left-8"
              src={invertedComma}
              alt="Inverted Comma"
            />
            <p className="pt-10 tracking-wider leading-7 text-[16px] text-left font-thin">
              {d.message}
            </p>
            <div className="flex justify-center items-center gap-x-3 max-sm:my-5 sm:my-5 md:my-5 lg:my-9">
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
              <div className="flex flex-col max-sm:gap-0 sm:gap-1 md:gap-1 lg:gap-2">
                <h3 className="font-semibold text-xl">{d.name}</h3>
                <h3 className="font-semibold text-[#FFFFFF] opacity-50">
                  {d.designation}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
