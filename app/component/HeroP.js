import Image from "next/image"
import img1 from "../../public/watertanker1.png"

export default function HeroP({ar=false}){
    return(<>{ar==false?
  <div className="  bg-cover h-4/5 bg-left" style={{ 
        backgroundImage: `url("/hero.jpeg")` }}>
    <div className="py-6 sm:py-8 lg:py-12  px-4 md:px-8 " style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
    {/* content - start */}
    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-start xl:w-5/12 xl:py-24">
      {/* <p className="mb-4 font-semibold text-blue-500 md:mb-6 md:text-lg xl:text-xl">
 Sweet Water Supply      </p> */}
      <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl"> Sweet Water Supply
 </h1>
      <h3 className="mb-8 leading-relaxed text-white md:mb-12 lg:w-4/5 xl:text-lg">
      We have the solution for your water needs, Our round the clock service will take care of your water needs<br/> 
      </h3>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
      <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-blue-500 border-blue-500 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-md text-lg hover:text-white">
          Book Now 
          </button></a>
      </div>
    </div>
    {/* content - end */}
    {/* image - start */}
    {/* <div className="h-48  lg:h-auto xl:w-5/12">
      <Image
        src="/herol.jpg"
        loading="lazy"
        alt="droplet"
        className="h-full w-full object-cover object-center rounded-xl"
        width={350}
        height={350}
      />
    </div> */}
    {/* image - end */}
  </section>
  </div>
  </div>
  </div>
  :
  <div className="  bg-cover h-4/5 bg-left" style={{ 
    backgroundImage: `url("/herol.jpg")` }}>
<div className="py-6 sm:py-8 lg:py-12  px-4 md:px-8 " style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
<section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
{/* content - start */}
<div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-start xl:w-5/12 xl:py-24">

  <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">وايت ماء شمال الرياض
   </h1>
  <h3 className="mb-8 leading-relaxed text-white md:mb-12 lg:w-4/5 xl:text-lg">
  لدينا الحل لاحتياجاتك من المياه
  خدمتنا على مدار الساعة ستهتم باحتياجاتك من المياه
<br/> 
  </h3>
  <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
  <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-blue-500 border-blue-500 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-md text-lg hover:text-white">
  احجز الآن
 
      </button></a>
  </div>
</div>
{/* content - end */}
{/* image - start */}
{/* <div className="h-48  lg:h-auto xl:w-5/12">
  <Image
    src="/herol.jpg"
    loading="lazy"
    alt="droplet"
    className="h-full w-full object-cover object-center rounded-xl"
    width={350}
    height={350}
  />
</div> */}
{/* image - end */}
</section>
</div>
</div>
</div>}
    </>

    )}