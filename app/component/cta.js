import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cta({ar=false}) {
  return (<>{ar==false?
  
    <section className="text-white body-font bg-cover bg-center 	" style={{backgroundImage:`url("/night.jpeg")` , }}>
    <div className=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center  "  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
     
      <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-center md:text-center items-center text-center">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Book Your Water tanker Now!!
          <br className="hidden lg:inline-block" />
          Call us or WhatsApp us.
        </h2>
        <h3 className="mb-8 text-white leading-relaxed">
         We will try to fulfill your order as soon as possible 
        </h3>
        <div className="flex ">
          <Link href='/contact'><button className="hover:scale-105 inline-flex transition-all text-blue-500 border-blue-500 bg-white border-2 py-2 px-6 focus:outline-none mx-2 hover:bg-blue-600 rounded-md text-lg hover:text-white">
                   Contact Us 

          </button></Link>
          <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-green-500 border-green-500 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-md text-lg hover:text-white">
          WhatsApp Us</button></a>
        </div>
      </div>
    </div>
  </section>:
   <section className="text-white body-font bg-cover bg-center" style={{backgroundImage:`url("/night.jpeg")`}}>
   <div className=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center  " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    
     <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-center md:text-center items-center text-center">
       <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        احجز صهريج المياه الآن
!!
          <br className="hidden lg:inline-block" />
          اتصل بنا أو WhatsApp لنا.
        </h2>
        <h3 className="mb-8 text-white leading-relaxed">
        سنحاول تلبية طلبك في أقرب وقت ممكن
        </h3>
        <div className="flex ">
          <Link href='/contact'><button className="hover:scale-105 inline-flex transition-all text-blue-500 border-blue-500 bg-white border-2 py-2 px-6 focus:outline-none mx-2 hover:bg-blue-600 rounded-md text-lg hover:text-white">
          تواصل معنا
          </button></Link>
          <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-green-500 border-green-500 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-md text-lg hover:text-white">
          WhatsApp معنا</button></a>
        </div>
      </div>
    </div>
  </section>
  }
 </> )
}
