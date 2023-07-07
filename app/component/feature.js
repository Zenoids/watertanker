"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function FeatureP({ title, para, bg }) {
  return (
    <div className="flex gap-4 drop-shadow-xl md:gap-6 hover:bg-gray-50 hover:scale-105 transition-all bg-cover rounded-md" style={{ backgroundImage: `url(/${bg})` }}>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }} className="rounded p-12">
        <h3 className="mb-2 text-lg font-semibold md:text-xl text-white">{title}</h3>
        <p className="mb-2 text-white">{para}</p>
      </div>
    </div>
  );
}

export default function Features({ ar = false }) {

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      setIsMobileView(innerWidth <= 640); // Adjust the threshold as per your requirements
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = "grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16 md:scroll-p-8";
  const ttitle = ar ? "خدماتنا" : "Our Services";
  const tsubtitle = ar ? "نحن نقدم خدمتنا على مدار الساعة طوال أيام الأسبوع في جميع أنحاء الرياض" : "We provide our 24/7 service across Riyadh";
  const card = ar ? [
    { title: "سكني", para: "إمدادات مياه موثوقة وغير منقطعة لمنزلك ، مما يضمن مياه نقية ومنعشة في متناول يدك ، ليلاً ونهارًا", bg: "home.webp" },
    { title: "تجاري", para: "عزز أعمالك من خلال حلول المياه السلسة من Sweet Water Supply ، مما يضمن توفير إمدادات مياه عالية الجودة دون انقطاع لاحتياجاتك التجارية.", bg: "commercial.webp" },
    { title: "حوض سباحة", para: "انغمس في الكمال مع Sweet Water Supply ، مما يوفر مياه نقية للغاية لحمام السباحة الخاص بك ، مما يخلق واحة منعشة لاستمتاعك", bg: "swim1.webp" },
    { title: "مناسبات خاصة", para: "ارتقِ بمناسباتك الخاصة مع Sweet Water Supply ، مما يوفر خدمة مياه لا تشوبها شائبة تضيف لمسة من الأناقة والرقي إلى أحداثك التي لا تنسى", bg: "special.webp" },
    { title: "مراكز التسوق", para: "عزز تجربة التسوق في مركز التسوق الخاص بك باستخدام Sweet Water Supply ، مما يوفر حلاً موثوقًا وصحيًا للمياه للعملاء ، مما يحافظ على انتعاشهم طوال زيارتهم", bg: "mall.webp" },
    { title: "مواقع البناء", para: "حافظ على موقع البناء الخاص بك رطبًا وفعالًا مع Sweet Water Supply ، مما يوفر تدفقًا مستمرًا من المياه النظيفة لدعم احتياجات مشروعك ، مما يضمن عمليات سلسة في الموقع", bg: "construction.webp" },
  ] : [
    { title: "Residential", para: "Reliable and uninterrupted water supply for your home, ensuring pure and refreshing water at your fingertips, day and night", bg: "home.webp" },
    { title: "Commercial", para: "Empower your business with Sweet Water Supply's seamless water solutions, ensuring uninterrupted and quality water supply for your commercial needs.", bg: "commercial.webp" },
    { title: "Swimming Pools", para: "Dive into perfection with Sweet Water Supply, delivering crystal-clear water for your swimming pool, creating a refreshing oasis for your enjoyment", bg: "swim1.webp" },
    { title: "Special Occasions", para: "Elevate your special occasions with Sweet Water Supply, providing impeccable water service that adds a touch of elegance and sophistication to your memorable events", bg: "special.webp" },
    { title: "Shopping Malls", para: "Enhance the shopping experience at your mall with Sweet Water Supply, offering a reliable and hygienic water solution for patrons, keeping them refreshed throughout their visit.", bg: "mall.webp" },
    { title: "Construction Sites", para: "Keep your construction site hydrated and efficient with Sweet Water Supply, delivering a constant flow of clean water to support your project's needs, ensuring smooth operations on-site", bg: "construction.webp" },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            {ttitle}
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {tsubtitle}
          </p>
        </div>
        <div>
          {isMobileView ?
           
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              // navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // speed={1000}
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >{card.map((item, index) => (
              <SwiperSlide key={index}>
                <FeatureP  title={item.title} para={item.para} bg={item.bg} />
              </SwiperSlide>))}


            </Swiper>
            : <div className={style}>
              {card.map((item, index) => (
                <FeatureP key={index} title={item.title} para={item.para} bg={item.bg} />
              ))}
            </div>}


        </div>
      </div>
    </div>
  );
}
