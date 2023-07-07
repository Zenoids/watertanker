"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function Sim({ title = "Quality of water", para = " Each drop of our water is meticulously purified and safeguarded, ensuring unrivaled cleanliness and safety. Experience peace of mind with every sip." }) {
  return (<>
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
      <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 hover:scale-105 transition-all" >

        <h3 className="mb-6 text-center text-xl font-bold text-[#145CAA] md:mb-6 lg:text-xl">
          {title}
        </h3>
        <p className="leading-relaxed text-base">
          {para}
        </p>
      </div>
    </div>
  </>
  )
}

export default function Choosesimple({ ar = false }) {
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
  const ttitle = ar ? "    لماذا أخترتنا؟  " : "        Why Choose Us?  ";
  const tsubtitle = ar ? "         تقديم جودة وسعة وموثوقية لا هوادة فيها: مورد صهاريج المياه الموثوق به في الرياض ، مما يضمن عمليات تسليم آمنة وفي الوقت المناسب مع تقديم حلول فعالة من حيث التكلفة تتجاوز التوقعات  " : "            Delivering Uncompromising Quality, Capacity, and Reliability: Your Trusted Water Tanker Supplier in Riyadh, ensuring safe and timely deliveries while offering cost-effective solutions that exceed expectations ";
  const card = ar
    ? [
      { title: 'جودة المياه', para: 'كل قطرة ماء لدينا يتم تنقيتها وحمايتها بدقة ، مما يضمن نظافة وأمان لا مثيل لهما. اختبر راحة البال مع كل رشفة.' },
      { title: 'سعة', para: 'تتمتع صهاريجنا بسعة كافية لتلبية احتياجات عملائنا ، سواء كان ذلك لموقع بناء صغير أو حدث كبير.' },
      { title: 'مصداقية', para: 'نحن ، بصفتنا مورد صهاريج المياه في الرياض ، لدينا جدول تسليم موثوق به ونحن قادرون على تلبية احتياجات عملائنا في الوقت المناسب.' },
      { title: 'السلامة والصيانة', para: 'نتأكد دائمًا من صيانة صهاريج المياه الخاصة بنا وتنظيفها بانتظام وفي حالة جيدة لضمان سلامة السائقين والعملاء' },
      { title: 'فعاله من حيث التكلفه', para: 'نحن لا نفرض رسومًا إضافية أبدًا ، بل نقدم أسعارًا معقولة ونقدم قيمة جيدة مقابل المال من خلال تسهيل الأمر على عملائنا.' },
      { title: '  رضا العملاء', para: 'نحن نعطي الأولوية لرضا العملاء ونسعى جاهدين لتجاوز التوقعات ، مما يضمن تجربة سلسة مع دعم العملاء الفوري والخدمة الشخصية.' },
    ] : [

      { title: 'Quality of water', para: 'Each drop of our water is meticulously purified and safeguarded, ensuring unrivaled cleanliness and safety. Experience peace of mind with every sip.' },
      { title: 'Capacity', para: 'Our tankers have enough capacity to meet our customers needs, whether it is for a small construction site or a large event.' },
      { title: 'Reliability', para: 'We, as your water tanker supplier in Riyadh have a reliable delivery schedule and we are able to meet our customers needs in a timely manner.' },
      { title: 'Safety and maintenance', para: 'We always make sure our water tankers are maintained & cleaned regularly and are in good condition to ensure the safety of the drivers and the customers' },
      { title: 'Cost-effective', para: 'We never charge extra rather we offer reasonable prices & provide good value for money by making it easy for our customers.' },
      { title: ' Customer Satisfaction', para: 'We prioritize customer satisfaction and strive to exceed expectations, ensuring a seamless experience with prompt customer support and personalized service.' },
    ];

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap  w-full mb-10 flex-col items-center text-center">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            {ttitle}      </h2>
          <p className="lg:w-1/2 w-full leading-relaxed text-[#666666]">
            {tsubtitle}      </p>
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
              <SwiperSlide>
                <Sim key={index} title={item.title} para={item.para} bg={item.bg} />
              </SwiperSlide>))}


            </Swiper>
            :    <div className="flex flex-wrap -m-4">
          {card.map((item, index) => {
            return (
              <Sim key={index} title={item.title} para={item.para} />)
          })}
          </div>
        }
        </div>

      </div>
    </section>
  )
}







 
