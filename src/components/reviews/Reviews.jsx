import React, { useRef } from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    name: "Jonathan",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Software engineer",
  },
  {
    id: 2,
    name: "Jonathan",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Software engineer",
  },
  {
    id: 3,
    name: "Jonathan",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Software engineer",
  },
  {
    id: 4,
    name: "Jonathan",
    message:
      "I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.",
    star: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1720253089384-6876aba379e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Software engineer",
  },
];

const Reviews = () => {
  const sliderNav = useRef(null);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "20%",  // for partially view previous & next slide
  };

  return (
    <div className="slider-container mt-[160px]">
      <Slider {...settings} ref={sliderNav}>
        {data.map((d) => (
          <div key={d.id} className="p-8 review-card rounded-xl">
            <p>{d.message}</p>
            <div>stars</div>
            <div>
              <img className="h-24 w-24" src={d.image} alt={d.name} />
              <div>
                <h3>{d.name}</h3>
                <h3>{d.designation}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
