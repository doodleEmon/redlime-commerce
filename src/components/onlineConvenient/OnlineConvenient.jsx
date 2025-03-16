import React from "react";
import onlineBg from "../../assets/onlineBg.png";
import rightArrow from "../../assets/rightArrow.png";

const benefits = [
  {
    id: 1,
    title: "Chat with a provider 24/7",
  },
  {
    id: 2,
    title: "Fast, discreet shipping",
  },
  {
    id: 3,
    title: "Clinically proven ingredients and FDA-approved treatments.",
  },
];

const OnlineConvenient = () => {
  return (
    <section className="max-sm:mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[140px] xl:mt-[160px] relative">
      <img src={onlineBg} alt="Online Convenient" />
      <div className="absolute max-sm:top-5 sm:top-8 md:top-10 lg:top-16 xl:top-[79px] w-full max-sm:px-5 sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[130px]">
        <div className="flex">
          <div className="w-full">
            <p className="max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-anton tracking-wide leading-snug">
              100% Online,
            </p>
            <p className="max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-anton tracking-wide leading-snug">
              100% Convenient
            </p>
          </div>
          <ul className="w-full flex flex-col gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[30px]">
            {benefits.map((item) => (
              <li key={item.id}>
                <div className="flex items-center max-sm:gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[30px]">
                  <img
                    src={rightArrow}
                    alt="Right arrow."
                    className=""
                  />
                  <p className="max-sm:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {item.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* <ul className="w-full flex flex-col gap-4">
            {benefits.map((item) => (
              <li key={item.id}>
                <div className="flex gap-[30px] items-center">
                  <img src={rightArrow} alt="Right arrow." />
                  <p>{item.title}</p>
                </div>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default OnlineConvenient;
