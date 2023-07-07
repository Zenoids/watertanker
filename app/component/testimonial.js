
import Image from "next/image"



 function Test({para, name, area, img}) {
  return (
    <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8 hover:scale-105 transition-all">
        <div className=" text-gray-600">
       {para}
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <Image
              src={`${img}`}
              loading="lazy"
              alt=" a man"
              className="h-full w-full object-cover object-center"
              width={50}
              height={50}
            />
          </div>
          <div>
            <div className="text-center text-sm font-bold text-[#145CAA] sm:text-start md:text-base">
{name}            </div>
            <p className="text-center text-sm text-[#666666] sm:text-start md:text-sm">
             {area}
            </p>
          </div>
        </div>
      </div>
  )
}


export default function Review({ar=false}){
    return(<>{ar==false?
        <div className="bg-white py-6 sm:py-8 lg:py-12 ">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
     Trusted by the Best
    </h2>
    <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
      
      <Test para={"When it comes to quality water, Sweet Water Supply never compromises. Their commitment to delivering clean and safe water, along with reliable service, has made them an invaluable partner for our construction projects"} name={"Abdullah Mansoor"} area={"Construction Project Manager"} img={"/test1.webp"} />
      <Test para={" For our events, Sweet Water Supply has consistently exceeded our expectations. Their exceptional service, combined with their unwavering dedication to providing clean water and punctual deliveries, has made them an indispensable choice."} name={" Naveed Shaikh"} area={"Event Organizer"} img={"/test3.webp"} />
      <Test para={"Sweet Water Supply has been a game-changer for my household. Their reliable deliveries of clean and safe water, coupled with their affordable pricing, have made them our go-to provider. I highly recommend them to anyone seeking a trustworthy water solution"} name={"Alia hafsa"} area={"Resident | Abi Bakr Al-Siddiq Road"} img={"/testf.webp"} />
   
    </div>
  </div>
</div>
:
<div className="bg-white py-6 sm:py-8 lg:py-12 ">
<div className="mx-auto max-w-screen-xl px-4 md:px-8">
  <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
  موثوق به من قبل الأفضل
  </h2>
  <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
    
    <Test para={"عندما يتعلق الأمر بجودة المياه ، فإن Sweet Water Supply لا تساوم أبدًا. إن التزامهم بتوفير المياه النظيفة والآمنة ، إلى جانب الخدمة الموثوقة ، جعلهم شريكًا لا يقدر بثمن لمشاريع البناء لدينا"} name={"عبدلله منصور"} area={"مدير مشروع البناء"} img={"/test1.webp"} />
    <Test para={" بالنسبة لفعالياتنا ، فقد تجاوزت Sweet Water Supply توقعاتنا باستمرار. خدمتهم الاستثنائية ، جنبًا إلى جنب مع تفانيهم الذي لا يتزعزع لتوفير المياه النظيفة والتسليم في الموعد المحدد ، جعلتهم خيارًا لا غنى عنه."} name={" نفيد شيخ"} area={"منظم الحدث"} img={"/test3.webp"} />
    <Test para={"لقد كان Sweet Water Supply بمثابة تغيير لقواعد اللعبة في أسرتي. إن عمليات تسليمهم الموثوقة للمياه النظيفة والآمنة ، إلى جانب أسعارها المعقولة ، جعلتهم مزودنا المفضل. أوصي بها بشدة لأي شخص يبحث عن حل مياه جدير بالثقة"} name={"على حفصة"} area={"مقيم | طريق ابي بكر الصديق"} img={"/testf.webp"} />
 
  </div>
</div>
</div>
}</>
    )
}