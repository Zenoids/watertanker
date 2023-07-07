export default function ContactForm({ ar = false }) {
  const title=ar?"أين تجدنا؟ ":"Where to find us?"
   const adtitle=ar?"عنوان  ":"ADDRESS";
  const address=ar?"ستريت أل منسيه, رياض, سعودي عربية  ":"Street Al munsiyah, Riyadh, Saudi Arabia  ";
  const phtitle=ar?"الاتصال":"PHONE";
  const phone=ar?"+۹٦٦ ۰٥۰۹۲۰۱٥٦۹|+۹٦٦ ۰٥۹۷٤۲٤۷۹٦":"+966 0509201569 | +966 0597424796";
  return (
      <section className="text-gray-600 body-font relative bg-white ">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl py-3">{title}</h2>
        <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap  " style={{ height: "80vh" }}>
          <div className="lg:w-full  bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9409455006767!2d46.76553961500223!3d24.831693084067595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff543bcc4e5d%3A0x203bc655825b0c6!2sAl%20munsiyah%20riyadh!5e0!3m2!1sen!2sin!4v1688558095814!5m2!1sen!2sin"
              width={"100%"}
              className="absolute inset-0"

              height={600}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="bg-gray-800 relative flex  flex-col  flex-wrap py-6 rounded shadow-md w-full " >
              <div className="lg:w-full px-6 ">
                <h3 className="font-bold  text-white text-center tracking-widest text-xl">
                 {adtitle}
                </h3>
                <h4 className="mt-1 text-white text-center">
                  {address}

                </h4>
              </div>
              <div className="lg:w-full px-6 text-white mt-4 lg:mt-0 ">

                <h3 className="title-font font-semibold text-white text-center tracking-widest text-xl mt-4">
                 {phtitle}
                </h3>
                <h4 className="leading-relaxed text-center">{phone}</h4>
              </div>
            </div>
          </div>

        </div>
      </section>)
}