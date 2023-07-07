import Link from "next/link";
import Image from "next/image";
export default function Footer({ar}){
  return (<>
    {
    ar == true ? <footer className="bg-gray-900">
    <div className="container mx-auto   ">
      <div className="container mb-8 grid grid-cols-4  pt-10 md:grid-cols-4 lg:grid-cols-4 lg:pt-12 px-20 md:px-20 ">
        <div className=" mx-auto">
          {/* logo - start */}
          <div className="mb-4 lg:-mt-2">
            <Link
              href="/ar"
              className="inline-flex items-center  text-xl font-bold text-gray-100 md:text-2xl"
              aria-label="logo"
            >
            <Image
              alt="logo"
              src={"/logowhite.png"}
              // className="ps-1"  
              height={130}
                width={130} />
                
            </Link>
          </div>
          {/* logo - end */}
          <p className="mb-6 text-gray-400 ">
          الحل لاحتياجاتك من المياه

          </p>
        </div>
        <div>
          <p className="mb-6 text-gray-400 pt-12 ">
          وايت ماء شمال الرياض: شركة رائدة موثوق بها في مجال توفير المياه ، وتقديم الامتياز ، والمياه النظيفة ، وموثوقية لا مثيل لها للمناسبات السكنية والتجارية والخاصة. استمتع بخدمة لا مثيل لها وراحة بال مع كل قطرة.

          </p>
          </div>
        <div className="">
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          خريطة الموقع
          </div>
          <nav className="flex flex-col gap-4">
          <div>
              <Link
                href="/ar"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
                الصفحة الرئيسية

              </Link>
            </div>
            <div>
              <Link
                href="/ar/about"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
                معلومات عنا

              </Link>
            </div>
            <div>
              <Link
                href="/ar/service"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
                خدماتنا

              </Link>
            </div>
            <div>
              <Link
                href="/ar/contact"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
                تواصل معنا

              </Link>
            </div>
           
           
           
          </nav>
        </div>
        {/* nav - end */}
        {/* nav - start */}
        <div className="">
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          قانوني
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <Link
                href="/terms-and-conditions"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
                شروط الخدمة

              </Link>
            </div>
            <div>
              <Link
                href="/privacy-policy"
                className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
              >
سياسة الخصوصية
              </Link>
            </div>
           
          </nav>
        </div>
      </div>

      <div className=" px-20 pb-1 mx-auto flex items-center sm:flex-row flex-col justify-center ">
   
    <p className="text-sm text-gray-500  sm:py-2 sm:mt-0 mt-4">
      © 2023 مشغل بواسطة
-
      <a
        href="https://zenoids.com"
        className="text-gray-200 ms-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        Zenoids
      </a>
    </p>
    <span className="inline-flex  px-20  sm:mt-0 mt-4 justify-center sm:justify-end">
      <a className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ms-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ms-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ms-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
  </div>
    </footer>:<footer className="bg-gray-900">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
    <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 lg:pt-12">
      <div className="col-span-full lg:col-span-2">
        {/* logo - start */}
        <div className="mb-4 lg:-mt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
            aria-label="logo"
          >
           <Image
              alt="logo"
              src={"/logowhite.png"}
                height={130}
                width={130} />
           
          </Link>
        </div>
        {/* logo - end */}
        <p className="mb-6 text-gray-400 sm:pe-8">
        The solution for your water needs
        </p>
        <p className="mb-6 text-gray-400 sm:pe-8">
          <span className="text-bold">Located at </span>
        Street Al munsiyah, Riyadh, Saudi Arabia
        </p>
      
      </div>
    
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Site-Map
        </div>
        <nav className="flex flex-col gap-4">
        <div>
            <Link
              href="#"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              href="/service"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              Service
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              Contact
            </Link>
          </div>
         
         
         
        </nav>
      </div>
   
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Legal
        </div>
        <nav className="flex flex-col gap-4">
          <div>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              Terms of Service
            </Link>
          </div>
          <div>
            <Link
              href="/privacy-policy"
              className="text-gray-400 transition duration-100 hover:text-[#145CAA] active:text-[#145CAA]"
            >
              Privacy Policy
            </Link>
          </div>
         
        </nav>
      </div>
      {/* nav - end */}
    </div>
    <div className="container px-5 pb-1 mx-auto flex items-center sm:flex-row flex-col">
  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    {/*   */}
    <span className="ms-3 text-xl text-white">Sweet Water Supply
</span>
  </a>
  <p className="text-sm text-gray-500 sm:ms-4 sm:ps-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    © 2023 powered by-
    <a
      href="https://zenoids.com"
      className="text-gray-600 ms-1"
      rel="noopener noreferrer"
      target="_blank"
    >
      Zenoids
    </a>
  </p>
  <span className="inline-flex sm:ms-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a className="text-gray-500">
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    </a>
    <a className="ms-3 text-gray-500">
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    </a>
    <a className="ms-3 text-gray-500">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    </a>
    <a className="ms-3 text-gray-500">
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0}
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        />
        <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
    </a>
  </span>
</div>
</div>
  </footer>
}</>
    )
}