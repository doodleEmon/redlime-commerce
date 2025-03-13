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
    <section className='mt-[160px] px-[137px] bg-[#31428c43] py-[55px]'>
      <ul className='flex justify-between'>
        {
            services.map(item => (
                <li key={item.id} className='flex items-center gap-8'>
                    <img src={item.image} alt={item.title} />
                    <p className='text-xl'>{item.title}</p>
                </li>
            ))
        }
      </ul>
    </section>
  )
}

export default Services
