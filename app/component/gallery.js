import Image from 'next/image'
import React from 'react'

function Gallery({ar=false}) {
  const head=ar?"معرضنا":"Our Gallery";
  const viderr=ar?"  متصفحك الحالي لا يدعم تشغيل الفيديو.  ":"  Your browser does not support the video tag. ";
  return (<>
    <section className="text-white body-font bg-gray-800 " >
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-10 flex-wrap">
      <h2 className="sm:text-3xl text-2xl  title-font font-bold text-white lg:w-full lg:mb-0 mb-4 text-center">
         {head}
      </h2>
     
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2 ">
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <img
            alt="tanker 1"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/night.webp"
            width={500}
            height={300}
            loading='lazy'
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <img
            alt="watert tanker 2"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/herob.webp"
            width={500}
            height={300}
          />
        </div>
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <img
            alt="water tanker 3"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/hero.webp"
            width={600}
            height={360}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <img
            alt="water tanker 4"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/long.webp"
            height={600}
            width={360}
            loading="lazy"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">

        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid1.mp4" type="video/mp4" />
{viderr}</video>
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid2.mp4" type="video/mp4" />
{viderr}</video>
        </div>
      </div>
    </div>
  </div>
</section>
</> )
}

export default Gallery