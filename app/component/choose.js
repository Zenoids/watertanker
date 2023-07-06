
function FeautreP({title, para, bg}){
    return(<>
            <div className="flex gap-4 drop-shadow-xl md:gap-6 hover:bg-gray-50 transition-colors hover:scale-105   bg-cover  rounded-md" style={{ 
        backgroundImage: `url(${bg})`,  }}>
         
          <div style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}} className="rounded p-5">
            <h3 className="mb-2 text-lg font-semibold md:text-xl text-white ">{title}</h3>
            <p className="mb-2 text-white">
             {para}
            </p>
            {/* <a
              href="#"
              className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a> */}
          </div>
        </div>
            </>
        
     )}

export default function Choose(){
    return(
 <>
 <div className="bg-white py-6 sm:py-8 lg:py-12">
 <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   {/* text - start */}
   <div className="mb-10 md:mb-16">
     <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
      Our Services
     </h2>
     <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
      We provide our 24/7 service accross riyadh 
     </p>
   </div>
   {/* text - end */}
   <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
     {/* feature - start */}
     <FeautreP title={"Residential"} para={" Reliable and uninterrupted water supply for your home, ensuring pure and refreshing water at your fingertips, day and night"} bg={"home.webp"} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Commercial"} para={"Empower your business with Sweet Water Supply's seamless water solutions, ensuring uninterrupted and quality water supply for your commercial needs."} bg={"commercial.webp"}/>
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Swimming Pools"} para={"Dive into perfection with Sweet Water Supply, delivering crystal-clear water for your swimming pool, creating a refreshing oasis for your enjoyment"} bg={"swim1.webp"}/>
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Special Ocasions"} para={"Elevate your special occasions with Sweet Water Supply, providing impeccable water service that adds a touch of elegance and sophistication to your memorable events"} bg={"special.webp"} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Shopping Malls"} para={"Enhance the shopping experience at your mall with Sweet Water Supply, offering a reliable and hygienic water solution for patrons, keeping them refreshed throughout their visit."} bg={"mall.webp"} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Construction Sites"} para={"Keep your construction site hydrated and efficient with Sweet Water Supply, delivering a constant flow of clean water to support your project's needs, ensuring smooth operations on-site"} bg={"construction.webp"}/>
     {/* feature - end */}
   </div>
 </div>
</div></>


    )
}