import Image from 'next/image'
import React from 'react'

function Gallery({ar=false}) {
  return (<>{ar==false?
    <section className="text-white body-font bg-gray-800 " >
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-10 flex-wrap">
      <h2 className="sm:text-3xl text-2xl  title-font font-bold text-white lg:w-full lg:mb-0 mb-4 text-center">
         Our Gallery
      </h2>
      {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
       Glimpses of our work
      </p> */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2 ">
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/night.jpeg"
            width={500}
            height={300}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/herob.jpeg"
            width={500}
            height={300}
          />
        </div>
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/hero.jpeg"
            width={600}
            height={360}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/long.jpeg"
            height={600}
            width={360}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">

        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </div>
    </div>
  </div>
</section>:
<section className="text-white body-font bg-gray-800 " >
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-10 flex-wrap">
      <h2 className="sm:text-3xl text-2xl  title-font font-bold text-white lg:w-full lg:mb-0 mb-4 text-center">
      معرضنا
      </h2>
      {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
       Glimpses of our work
      </p> */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2 ">
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/night.jpeg"
            width={500}
            height={300}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full object-cover h-full object-center block rounded-xl"
            src="/herob.jpeg"
            width={500}
            height={300}
          />
        </div>
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/hero.jpeg"
            width={600}
            height={360}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full hover:scale-105 transition-all ">
          <Image
            alt="gallery"
            className="w-full h-full object-cover object-center block rounded-xl"
            src="/long.jpeg"
            height={600}
            width={360}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">

        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid1.mp4" type="video/mp4" />
  متصفحك الحالي لا يدعم تشغيل الفيديو.
</video>
        </div>
        <div className="md:p-2 p-1 w-1/2 hover:scale-105 transition-all ">
        <video width={500} height={300} controls className='w-full object-cover h-full object-center block rounded-xl'>
  <source src="/vid2.mp4" type="video/mp4" />
  متصفحك الحالي لا يدعم تشغيل الفيديو.

</video>
        </div>
      </div>
    </div>
  </div>
</section>
}
</> )
}

export default Gallery