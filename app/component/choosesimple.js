import React from 'react'


 function Sim({title="Quality of water", para= " Each drop of our water is meticulously purified and safeguarded, ensuring unrivaled cleanliness and safety. Experience peace of mind with every sip."}) {
  return (<>
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="border border-gray-200 p-6 rounded-lg bg-gray-100 hover:scale-105 transition-all" >
         
          <h3 className="mb-6 text-center text-xl font-bold text-gray-800 md:mb-6 lg:text-xl">
          {  title}
          </h3>
          <p className="leading-relaxed text-base">
         {  para}
          </p>
        </div>
      </div>
          </>
  )
}


export default function Choosesimple({ar=false}) {
  return (
    <>
    {ar==false?
    <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap  w-full mb-20 flex-col items-center text-center">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
       Why Choose Us?
      </h2>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
      Delivering Uncompromising Quality, Capacity, and Reliability: Your Trusted Water Tanker Supplier in Riyadh, ensuring safe and timely deliveries while offering cost-effective solutions that exceed expectations
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <Sim/>
     <Sim title='Capacity' para='Our tankers have enough capacity to meet our customers needs, whether it is for a small construction site or a large event.'/>
    <Sim title='Reliability' para='We, as your water tanker supplier in Riyadh have a reliable delivery schedule and we are able to meet our customers’ needs in a timely manner.'/>

    <Sim title='Safety and maintenance' para='We always make sure our water tankers are maintained & cleaned regularly and are in good condition to ensure the safety of the drivers and the customers'/> 
    <Sim title='Cost-effective' para='We never charge extra rather we offer reasonable prices & provide good value for money by making it easy for our customers.

'/><Sim title='
Customer Satisfaction' para='We prioritize customer satisfaction and strive to exceed expectations, ensuring a seamless experience with prompt customer support and personalized service.'/>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
      Button
    </button> */}
  </div>
</section>
: <section className="text-gray-600 body-font bg-white">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
    لماذا أخترتنا؟
    </h2>
    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
    تقديم جودة وسعة وموثوقية لا هوادة فيها: مورد صهاريج المياه الموثوق به في الرياض ، مما يضمن عمليات تسليم آمنة وفي الوقت المناسب مع تقديم حلول فعالة من حيث التكلفة تتجاوز التوقعات
    </p>
  </div>
  <div className="flex flex-wrap -m-4">
    <Sim title='جودة المياه' para='كل قطرة ماء لدينا يتم تنقيتها وحمايتها بدقة ، مما يضمن نظافة وأمان لا مثيل لهما. اختبر راحة البال مع كل رشفة.'/>
   <Sim title='سعة' para='تتمتع صهاريجنا بسعة كافية لتلبية احتياجات عملائنا ، سواء كان ذلك لموقع بناء صغير أو حدث كبير.'/>
  <Sim title='مصداقية' para='نحن ، بصفتنا مورد صهاريج المياه في الرياض ، لدينا جدول تسليم موثوق به ونحن قادرون على تلبية احتياجات عملائنا في الوقت المناسب.'/>

  <Sim title='السلامة والصيانة' para='نتأكد دائمًا من صيانة صهاريج المياه الخاصة بنا وتنظيفها بانتظام وفي حالة جيدة لضمان سلامة السائقين والعملاء'/> 
  <Sim title='فعاله من حيث التكلفه' para='نحن لا نفرض رسومًا إضافية أبدًا ، بل نقدم أسعارًا معقولة ونقدم قيمة جيدة مقابل المال من خلال تسهيل الأمر على عملائنا.'/>
  <Sim title='
رضا العملاء' para='نحن نعطي الأولوية لرضا العملاء ونسعى جاهدين لتجاوز التوقعات ، مما يضمن تجربة سلسة مع دعم العملاء الفوري والخدمة الشخصية.'/>
  </div>
  {/* <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
    Button
  </button> */}
</div>
</section>

}
 </> )
}
