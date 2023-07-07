import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Foot({ ar = false }) {
  const homeLink = ar ? '/ar' : '/';
  const allright = ar ? '© 2023 مشغل بواسطة' : '© 2023  All Rights Reserved.';
  const navItems = ar
    ? [
      { title: 'الصفحة الرئيسية', link: '/ar' },
      { title: 'معلومات عنا', link: '/ar/about' },
      { title: 'خدماتنا', link: '/ar/service' },
      { title: 'تواصل معنا', link: '/ar/contact' }
    ]
    : [
      { title: 'Home', link: '/' },
      { title: 'About us', link: '/about' },
      { title: 'Our Services', link: '/service' },
      { title: 'Contact Us', link: '/contact' }
    ];

  return (

    <footer className="bg-gray-800  ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href={homeLink} className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/logowhite.png"
              className=" me-3"
              alt="Flowbite Logo"
              width={130}
              height={130}
            />
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="me-4 hover:underline md:me-6 ">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400 px-2">
          {allright}
          <a href="https://zenoids.com/" className=" px-2  hover:underline">
            Zenoids.com
          </a>
        </span>
      </div>
    </footer>


  )
}
