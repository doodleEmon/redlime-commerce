import React from "react";
import Slider from "react-slick";

const Reviews = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="slider-container mt-[160px] h-[602px]">
      <Slider {...settings}>
        <div className="border">
          <h3>1</h3>
        </div>
        <div className="border">
          <h3>2</h3>
        </div>
        <div className="border">
          <h3>3</h3>
        </div>
        <div className="border">
          <h3>4</h3>
        </div>
        <div className="border">
          <h3>5</h3>
        </div>
        <div className="border">
          <h3>6</h3>
        </div>
        <div className="border">
          <h3>7</h3>
        </div>
        <div className="border">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;

// import React from 'react'

// const Reviews = () => {
//   return (
//     <section className='mt-[160px] h-[602px]'>
//       <h1>Hear What Rizz Patients Have To Say</h1>
//     </section>
//   )
// }

// export default Reviews
