import React from 'react'
import payment from "../../assets/payment.png"
import shipping from "../../assets/shipping.png"
import support from "../../assets/support.png"
import badge from "../../assets/badge.png"

const services = [
    {
        id: 1,
        title: "Secure Payment",
        image: payment
    },
    {
        id: 2,
        title: "Online Support",
        image: support
    },
    {
        id: 3,
        title: "Free Shipping",
        image: shipping
    },
    {
        id: 4,
        title: "Best Value",
        image: badge
    },
]

const Services = () => {
  return (
    <section className='max-sm:mt-[50px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] xl:mt-[160px] max-sm:px-5 sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[130px] bg-[#31428c43] py-[55px]'>
      <ul className='flex justify-between gap-[68px] overflow-hidden overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {
            services.map(item => (
                <li key={item.id} className='flex items-center max-sm:gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8'>
                    <img src={item.image} alt={item.title} />
                    <p className='max-sm:text-sm md:text-base lg:text-lg xl:text-xl'>{item.title}</p>
                </li>
            ))
        }
      </ul>
    </section>
  )
}

export default Services
