import Whatsapp from './component/whatsapp'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Sweet Water Supply - Reliable and Clean Water Solutions for Residential and Commercial Needs',
  description: ' Discover Sweet Water Supply - your trusted source for reliable and clean water solutions. We cater to residential and commercial requirements, ensuring uninterrupted access to quality water.',
  
}

export default function RootLayout({ children }) {

  return ( <html lang="en">
    <head> 
    <link rel="icon" href="favicon.ico"  />

    </head>
      <body className={inter.className} >

       
      {children}
      <Whatsapp/>

      
      </body>
    </html>

  )
}
