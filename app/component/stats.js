function StatP({number, atribute}){
    return(<>
    <div className="flex flex-col items-center md:p-4 hover:scale-110" >
<h3 className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
{number}
</h3>
<h4 className="text-sm font-semibold text-white sm:text-base">{atribute}</h4>
</div>
    </>

    )}


export default function Stats({ar=false}){
    return(
        <>{ar==false?
  <div className="  bg-cover bg-fixed h-4/5 bg-left" style={{ 
        backgroundImage: `url("/hero.jpeg")` }}>
    <div className="py-6 sm:py-8 lg:py-12  px-4 md:px-8 " style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <div className="mb-10 md:mb-16 ">
        <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
          Our Team by the numbers
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
        <span className="font-semibold">Powerful Performance:</span> Overwhelming water supply, round the clock service, and a vast base of satisfied clients     </p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x mx-auto max-w-screen-xl">
        <StatP number={`100000 +`} atribute={"Liters of Water provided"} />

        <StatP number={`24/7 `} atribute={"Service"} />

       
        <StatP number={`500 +`} atribute={"Happy clients"} />

       
<StatP number={" 2 Tankers"} atribute={" 18000 and 32000 litres"}/>
      </div>
    </div>
  </div>
  :<div className="  bg-cover bg-fixed h-4/5 bg-left" style={{ 
    backgroundImage: `url("/hero.jpeg")` }}>
<div className="py-6 sm:py-8 lg:py-12  px-4 md:px-8 " style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
  <div className="mb-10 md:mb-16 ">
    <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
    فريقنا بالأرقام

    </h2>
    <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
    <span className="font-semibold">أداء قوي:
</span>إمداد كبير بالمياه وخدمة على مدار الساعة وقاعدة واسعة من العملاء الراضين

    </p>
  </div>

  <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x mx-auto max-w-screen-xl">
    <StatP number={`۱۰۰۰۰۰ +`} atribute={"يتم توفير لترات من الماء"} />

    <StatP number={`۲٤/۷ `} atribute={"خدماتنا"} />

   
    <StatP number={`٥۰۰ +`} atribute={"عملاء سعداء"} />

   
<StatP number={"  ۲ الناقلات"} atribute={" ۱۸۰۰۰ و ۳۲۰۰۰  لتر"}/>
  </div>
</div>
</div>
}
  
        </>
    )
}