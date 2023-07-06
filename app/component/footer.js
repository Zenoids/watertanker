import Link from "next/link";
import Image from "next/image";
export default function Footer({ar}){
  return (<>
    {
    ar == true ? 
    <div className="bg-gray-900">
    <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 lg:pt-12">
        <div className="col-span-full lg:col-span-2">
          {/* logo - start */}
          <div className="mb-4 lg:-mt-2">
            <Link
              href="/ar"
              className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
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
          <p className="mb-6 text-gray-400 sm:pr-8">
          الحل لاحتياجاتك من المياه

          </p>
          <p className="mb-6 text-gray-400 sm:pr-8">
            <span className="text-bold">نحن موجودون في
</span>
ستريت أل منسيه, رياض, سعودي عربية

          </p>
          {/* social - start */}
          {/* <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div> */}
          {/* social - end */}
        </div>
        {/* nav - start */}
        {/* <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
            Products
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Overview
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Solutions
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Pricing
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Customers
              </a>
            </div>
          </nav>
        </div> */}
        {/* nav - end */}
        {/* nav - start */}
        {/* <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
            Company
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Investor Relations
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Jobs
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Press
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Blog
              </a>
            </div>
          </nav>
        </div> */}
        {/* nav - end */}
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          خريطة الموقع
          </div>
          <nav className="flex flex-col gap-4">
          <div>
              <Link
                href="/ar"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                الصفحة الرئيسية

              </Link>
            </div>
            <div>
              <Link
                href="/ar/about"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                معلومات عنا

              </Link>
            </div>
            <div>
              <Link
                href="/ar/service"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                خدماتنا

              </Link>
            </div>
            <div>
              <Link
                href="/ar/contact"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                تواصل معنا

              </Link>
            </div>
           
           
           
          </nav>
        </div>
        {/* nav - end */}
        {/* nav - start */}
        <div>
          <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          قانوني
          </div>
          <nav className="flex flex-col gap-4">
            <div>
              <Link
                href="/terms-and-conditions"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                شروط الخدمة

              </Link>
            </div>
            <div>
              <Link
                href="/privacy-policy"
                className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
سياسة الخصوصية
              </Link>
            </div>
           
          </nav>
        </div>
        {/* nav - end */}
      </div>
      <div className="container px-5 pb-1 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      {/*   */}
      <span className="ml-3 text-xl text-white">وايت ماء شمال الرياض
  </span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 مشغل بواسطة
-
      <a
        href="https://zenoids.com"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        zenoids.com
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
      <a className="ml-3 text-gray-500">
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
      <a className="ml-3 text-gray-500">
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
      <a className="ml-3 text-gray-500">
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
  
    </footer>
  </div>:<div className="bg-gray-900">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
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
        <p className="mb-6 text-gray-400 sm:pr-8">
        The solution for your water needs
        </p>
        <p className="mb-6 text-gray-400 sm:pr-8">
          <span className="text-bold">Located at </span>
        Street Al munsiyah, Riyadh, Saudi Arabia
        </p>
        {/* social - start */}
        {/* <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div> */}
        {/* social - end */}
      </div>
      {/* nav - start */}
      {/* <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Products
        </div>
        <nav className="flex flex-col gap-4">
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Overview
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Solutions
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Customers
            </a>
          </div>
        </nav>
      </div> */}
      {/* nav - end */}
      {/* nav - start */}
      {/* <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Company
        </div>
        <nav className="flex flex-col gap-4">
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Investor Relations
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Jobs
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Press
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Blog
            </a>
          </div>
        </nav>
      </div> */}
      {/* nav - end */}
      {/* nav - start */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Site-Map
        </div>
        <nav className="flex flex-col gap-4">
        <div>
            <Link
              href="#"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              href="/service"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Service
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Contact
            </Link>
          </div>
         
         
         
        </nav>
      </div>
      {/* nav - end */}
      {/* nav - start */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
          Legal
        </div>
        <nav className="flex flex-col gap-4">
          <div>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Terms of Service
            </Link>
          </div>
          <div>
            <Link
              href="/privacy-policy"
              className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
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
    <span className="ml-3 text-xl text-white">Sweet Water Supply
</span>
  </a>
  <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    © 2023 powered by-
    <a
      href="https://zenoids.com"
      className="text-gray-600 ml-1"
      rel="noopener noreferrer"
      target="_blank"
    >
      zenoids.com
    </a>
  </p>
  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
    <a className="ml-3 text-gray-500">
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
    <a className="ml-3 text-gray-500">
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
    <a className="ml-3 text-gray-500">
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

  </footer>
</div>
}</>
    )
}