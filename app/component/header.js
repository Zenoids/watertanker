import Image from "next/image";
// import logo from "@/public/logo.png"
import Link from "next/link";


export default function Header({ ar }) {

  const styleNav = "inline-flex items-center text-white border-0 py-1 px-5 focus:outline-none rounded text-base mt-4 md:mt-0 hover:scale-115 hover:border-b-4 hover:border-b-[#666666] transition-all hover:pb-3"

  return (<>
    {
      ar == true ?
        <header className="text-gray-600 body-font bg-gray-800"   >
          {/* <div className="bg-slate-600 text-white  px-8  "><div>الاتصال :۹٦٦ ۰٥۰۹۲۰۱٥٦۹|+۹٦٦ ۰٥۹۷٤۲٤۷۹٦ </div></div> */}

          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <Link href="/ar" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              alt="logo"
                src={"/logowhite.png"}
                height={100}
                width={130} />
              {/* <span className="ml-3 text-xl">وايت ماء شمال الرياض</span> */}
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={'/ar'}> <button className={styleNav}>الصفحة الرئيسية
              </button></Link>
              <Link href={'/ar/about'}> <button className={styleNav}>معلومات عنا
              </button></Link>
              <Link href={'/ar/service'}> <button className={styleNav}>خدماتنا
              </button></Link>
              <Link href={'/ar/contact'}> <button className={styleNav}>تواصل معنا
              </button></Link>


            </nav>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            </nav>
            <Link href={'/'}> <button className={styleNav}>
              English


            </button></Link>
          </div>
        </header>
        :
        <header className="text-gray-600 body-font bg-gray-800"   >
          {/* <div className="bg-slate-600 text-white  px-8  "><div>CALL: +966 0509201569 | +966 0597424796</div></div> */}

          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
              alt="logo"
              src={"/logowhite.png"}
                height={100}
                width={130} 
              />
              {/* <span className="ml-3 text-xl">SWEET WATER SUPPLY!</span> */}
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={'/'}> <button className={styleNav}>Home</button></Link>
              <Link href={'/about'}> <button className={styleNav}>About us</button></Link>
              <Link href={'/service'}> <button className={styleNav}>Our Services</button></Link>
              <Link href={'/contact'}> <button className={styleNav}>Contact Us</button></Link>


            </nav>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            </nav>
            <Link href={'/ar'}> <button className={styleNav}>
            العربية

            </button></Link>
          </div>
        </header>}</>
  );
}