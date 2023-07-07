import Image from 'next/image'
import Review from '../component/testimonial'
import HeroP from '../component/HeroP'
import TwoService from '../component/twoservice'
import Features from '../component/feature'
import Stats from '../component/stats'
import Cta from '../component/cta'
import Choosesimple from '../component/choosesimple'
import Gallery from '../component/gallery'
import ContactForm from '../component/contactform'
import Whatsapp from '../component/whatsapp'





export default function Home() {
  return (


<>
<HeroP/>
{/* <TwoService/> */}
<Features/>
<Stats/>
<Choosesimple/>
<Cta/>
<Review/>
<Gallery/>
<ContactForm/>
</>
  )
}
