export default function HeroP({ ar = false }) {

  const title = ar ? "وايت ماء شمال الرياض" : "Sweet Water Supply";
  const para = ar ? "  لدينا الحل لاحتياجاتك من المياه خدمتنا على مدار الساعة ستهتم باحتياجاتك من المياه" : "  We have the solution for your water needs, Our round the clock service will take care of your water needs"
  const book = ar ? "  احجز الآن" : "Book Now ";
  const imgsrc=ar? "/herol.webp":"/hero.webp";

  return (
    <div className="  bg-cover h-4/5 bg-left" style={{
      backgroundImage: `url(${imgsrc})`
    }}>
      <div className="py-6 sm:py-8 lg:py-12  px-4 md:px-8 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-start xl:w-5/12 xl:py-24">
             
              <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl"> {title}
              </h1>
              <h3 className="mb-8 leading-relaxed text-white md:mb-12 lg:w-4/5 xl:text-lg">
                {para}      </h3>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a href='http://wa.me/0509201569'><button className="hover:scale-105 inline-flex transition-all text-[#145CAA] border-[#145CAA] bg-white border-2 py-2 px-6 focus:outline-none hover:bg-[#145CAA] rounded-md text-lg hover:text-white">
                  {book}          </button></a>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>

  )
}