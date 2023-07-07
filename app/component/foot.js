import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Foot({ar=false}) {
  return (<>
  {ar==true?
    <footer className="bg-gray-800  ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/ar"
          className="flex items-center mb-4 sm:mb-0"
        >
          <Image
            src="/logowhite.png"
            className=" me-3"
            alt="Flowbite Logo"
            width={130}
            height={130}
          />
          {/* <span className="self-center p-2 text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
          وايت ماء شمال الرياض
          </span> */}
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/ar" className="me-4 hover:underline md:me-6 ">
            الصفحة الرئيسية            </Link>
          </li>
          <li>
            <Link href="/ar/about" className="me-4 hover:underline md:me-6">
            معلومات عنا            </Link>
          </li>
          <li>
            <Link href="/ar/service" className="me-4 hover:underline md:me-6 ">
            خدماتنا
            </Link>
          </li>
          <li>
            <Link href="/ar/contact" className="hover:underline">
            تواصل معنا

            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-white sm:text-center dark:text-gray-400 px-2">
      © 2023 مشغل بواسطة

        <a href="https://zenoids.com/" className=" px-2  hover:underline">
          Zenoids.com 
        </a>
        
      </span>
    </div>
  </footer>:
  <footer className="bg-gray-800  ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link
        href="/"
        className="flex items-center mb-4 sm:mb-0"
      >
        <Image
          src="/logowhite.png"
          className=" me-3"
          alt="Flowbite Logo"
          width={130}
          height={130}
        />
        {/* <span className="self-center p-2 text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
        وايت ماء شمال الرياض
        </span> */}
      </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
        <li>
          <Link href="/" className="me-4 hover:underline md:me-6 ">
          Home          </Link>
        </li>
        <li>
          <Link href="/about" className="me-4 hover:underline md:me-6">
About us            </Link>
        </li>
        <li>
          <Link href="/service" className="me-4 hover:underline md:me-6 ">
Services          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
Contact Us
          </Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-gray-400 px-2">
    © 2023  All Rights Reserved.

      <a href="https://zenoids.com/" className=" px-2  hover:underline">
        Zenoids.com 
      </a>
      
    </span>
  </div>
</footer>
  }
  
  </>
  )
}
