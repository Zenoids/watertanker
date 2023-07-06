
function HeaderP(){
    return(<>
     <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
        {/* logo - start */}
        <a
          href="/"
          className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
          aria-label="logo"
        >
          <svg
            width={95}
            height={94}
            viewBox="0 0 95 94"
            className="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Flowrift
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <a href="#" className="text-lg font-semibold text-indigo-500">
            Home
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Features
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
        </nav>
        {/* nav - end */}
        {/* buttons - start */}
        <a
          href="#"
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          Contact Sales
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/* buttons - end */}
      </header>
    </>

    )}
    
function HeroP(){
        return(<>
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* content - start */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
            Very proud to introduce
          </p>
          <h2 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Revolutionary way to build the web
          </h2>
          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Start now
            </a>
            <a
              href="#"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Take tour
            </a>
          </div>
        </div>
        {/* content - end */}
        {/* image - start */}
        <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* image - end */}
      </section>
        </>
    
        )}

function FeautreP({title, para}){
    return(<>
            <div className="flex gap-4 md:gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
            <p className="mb-2 text-gray-500">
             {para}
            </p>
            <a
              href="#"
              className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>
        </div>
            </>
        
     )}

            
     function NewsLetterP(){
                return(<>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
        <div className="mb-4 sm:mb-8">
          <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
            Get the latest updates
          </h2>
          <p className="text-center text-gray-500">
            Sign up for our newsletter
          </p>
        </div>
        <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
          <input
            placeholder="Email"
            className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
          <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
            Send
          </button>
        </form>
        <p className="text-center text-xs text-gray-400">
          By signing up to our newsletter you agree to our{" "}
          <a
            href="#"
            className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            Term of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  </div>
                </>
            
                )}
            
   function QuoteP({para, name, position, img="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"}){
                return(<>
                <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
          <div className="text-center text-gray-600">
           {para}
          </div>
          <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
              <img
                src={img}
                loading="lazy"
                alt="Photo by Ayo Ogunseinde"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                {name}
              </div>
              <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
               {position}
              </p>
            </div>
          </div>
        </div>
                </>
            
                )}
            
   function StatP({number, atribute}){
                return(<>
                <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
            {number}
          </div>
          <div className="text-sm font-semibold sm:text-base">{atribute}</div>
        </div>
                </>
            
                )}
            
   function TrustP(){
                return(<>
                <svg
            className="h-6 w-auto sm:h-8 lg:h-10"
            width={154}
            height={39}
            viewBox="0 0 154 39"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M35.0227 31H39.9432V21.3864H49.4091V17.3295H39.9432V11.7841H50.4318V7.72727H35.0227V31ZM58.4915 7.72727H53.6506V31H58.4915V7.72727ZM70.2557 31.3409C75.5511 31.3409 78.8466 27.7159 78.8466 22.3409C78.8466 16.9318 75.5511 13.3182 70.2557 13.3182C64.9602 13.3182 61.6648 16.9318 61.6648 22.3409C61.6648 27.7159 64.9602 31.3409 70.2557 31.3409ZM70.2784 27.5909C67.8352 27.5909 66.5852 25.3523 66.5852 22.3068C66.5852 19.2614 67.8352 17.0114 70.2784 17.0114C72.6761 17.0114 73.9261 19.2614 73.9261 22.3068C73.9261 25.3523 72.6761 27.5909 70.2784 27.5909ZM85 31H90.1136L93.1136 20.0227H93.3295L96.3295 31H101.455L106.193 13.5455H101.307L98.6477 25.2045H98.5L95.6364 13.5455H90.8295L88.0114 25.2727H87.8523L85.1477 13.5455H80.25L85 31ZM108.776 31H113.616V21.125C113.616 18.9773 115.185 17.5 117.321 17.5C117.991 17.5 118.912 17.6136 119.366 17.7614V13.4659C118.935 13.3636 118.332 13.2955 117.844 13.2955C115.889 13.2955 114.287 14.4318 113.651 16.5909H113.469V13.5455H108.776V31ZM121.869 31H126.71V13.5455H121.869V31ZM124.301 11.2955C125.744 11.2955 126.926 10.1932 126.926 8.84091C126.926 7.5 125.744 6.39773 124.301 6.39773C122.869 6.39773 121.688 7.5 121.688 8.84091C121.688 10.1932 122.869 11.2955 124.301 11.2955ZM139.974 13.5455H136.509V12.375C136.509 11.1932 136.986 10.5 138.406 10.5C138.986 10.5 139.577 10.625 139.963 10.75L140.815 7.11364C140.213 6.93182 138.884 6.63636 137.395 6.63636C134.111 6.63636 131.668 8.48864 131.668 12.2841V13.5455H129.202V17.1818H131.668V31H136.509V17.1818H139.974V13.5455ZM152.216 13.5455H148.932V9.36364H144.091V13.5455H141.705V17.1818H144.091V26.2727C144.068 29.6932 146.398 31.3864 149.909 31.2386C151.159 31.1932 152.045 30.9432 152.534 30.7841L151.773 27.1818C151.534 27.2273 151.023 27.3409 150.568 27.3409C149.602 27.3409 148.932 26.9773 148.932 25.6364V17.1818H152.216V13.5455Z" />
            <path d="M24 8V20L12 32H0V20L12 8H24Z" />
          </svg>
                </>
            
                )}
            



export default function FullPage(){
    return(

    <>
  {/* hero - start */}
  <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
     {/* <HeaderP/> */}
      <HeroP/>
    </div>
  </div>
  {/* hero - end */}
  {/* features - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our competitive advantage
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      {/* text - end */}
      <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
        {/* feature - start */}
        <FeautreP title={"Security"} para={" Filler text is dummy text which has no meaning however looks very similar to real text."} />
        {/* feature - end */}
        {/* feature - start */}
        <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
        {/* feature - end */}
        {/* feature - start */}
        <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
        {/* feature - end */}
        {/* feature - start */}
        <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
        {/* feature - end */}
        {/* feature - start */}
        <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
        {/* feature - end */}
        {/* feature - start */}
        <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
        {/* feature - end */}
      </div>
    </div>
  </div>
  {/* features - end */}
  {/* logo cloud - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
        Trusted by the best
      </h2>
      <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
        {/* logo - start */}
        <div className="flex justify-center text-gray-400">
         <TrustP/>
        </div>
        {/* logo - end */}
        {/* logo - start */}
        <div className="flex justify-center text-gray-400">
          <TrustP/>
        </div>
        {/* logo - end */}
        {/* logo - start */}
        <div className="flex justify-center text-gray-400">
        <TrustP/>

        </div>
        {/* logo - end */}
        {/* logo - start */}
        <div className="flex justify-center text-gray-400">
        <TrustP/>

        </div>
        {/* logo - end */}
      </div>
    </div>
  </div>
  {/* logo cloud - end */}
  {/* stats - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our Team by the numbers
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      {/* text - end */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
        {/* stat - start */}
        <StatP number={`200 `} atribute={"People"} />

        {/* stat - end */}
        {/* stat - start */}
        <StatP number={`500 +`} atribute={"People"} />

        {/* stat - start */}
        <StatP number={`1000 +`} atribute={"People"} />
        {/* stat - end */}
        {/* stat - start */}
<StatP number={" A couple"} atribute={" Coffee breaks"}/>
        {/* stat - end */}
      </div>
    </div>
  </div>
  {/* stats - end */}

  {/* testemonials - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
        What others say about us
      </h2>
      <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
        {/* quote - start */}
        
        <QuoteP para={`“This is a section of some simple filler text, also known as placeholder text.”`}  name={"Kate Berg"}    position={"CFO / Dashdash"} img="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"  />

        {/* quote - end */}
        {/* quote - start */}
        <QuoteP para={`“This is a section of some simple filler text, also known as placeholder text.”`}  name={"John McCulling"}    position={"CEO / Datadrift"}   />
        
        {/* quote - end */}
        {/* quote - start */}
        <QuoteP para={`“This is a section of some simple filler text, also known as placeholder text.”`}  name={"Greg Jackson"}    position={"CTO / Uptime"} img={"https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"}   />
        {/* quote - end */}
      </div>
    </div>
  </div>
  {/* testemonials - end */}
  {/* newsletter - start */}
  {/* <NewsLetterP/> */}
  {/* newsletter - end */}

</>

        
     
    )
}