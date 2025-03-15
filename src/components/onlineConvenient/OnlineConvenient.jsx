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
    <section className="mt-[160px] relative">
      <img src={onlineBg} alt="Online Convenient" />
      <div className="absolute top-[79px] w-full px-[130px]">
        <div className="flex">
          <div className="w-full">
            <p className="text-5xl font-anton tracking-wide leading-snug">100% Online,</p>
            <p className="text-5xl font-anton tracking-wide leading-snug">100% Convenient</p>
          </div>
          <ul className="w-full flex flex-col gap-4">
            {benefits.map((item) => (
              <li key={item.id}>
                <div className="flex gap-[30px] items-center">
                  <img src={rightArrow} alt="Right arrow." />
                  <p>{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OnlineConvenient;
