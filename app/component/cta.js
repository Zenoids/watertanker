import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cta({ ar = false }) {
  const title = ar ? "احجز صهريج المياه الآن" : "Book Your Water tanker Now";
  const sub = ar ? "اتصل بنا أو WhatsApp لنا " : "Call us or WhatsApp us.";
  const sub1 = ar ? "        سنحاول تلبية طلبك في أقرب وقت ممكن  " : "         We will try to fulfill your order as soon as possible   ";
  const b1 = ar ? "تواصل معنا    " : "Contact Us   ";
  const b2 = ar ? "  WhatsApp معنا" : "WhatsApp Us   ";

  return (
    <section className="text-white body-font bg-cover bg-center 	" style={{ backgroundImage: `url("/night.webp")`, }}>
      <div className=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center  " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-center md:text-center items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {title}
            <br className="hidden lg:inline-block" />
            {sub}
          </h2>
          <h3 className="mb-8 text-white leading-relaxed">
            {sub1}
          </h3>
          <div className="flex ">
            <Link href='/contact'><button className="hover:scale-105 inline-flex transition-all text-[#145CAA] border-[#145CAA] bg-white border-2 py-2 px-6 focus:outline-none mx-2 hover:bg-[#145CAA] rounded-md text-lg hover:text-white">
              {b1}

            </button></Link>
            <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-green-500 border-green-500 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-md text-lg hover:text-white">
              {b2}</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}
