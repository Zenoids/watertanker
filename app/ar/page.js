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



export default function ArHome() {
  return (


<>
<HeroP ar={true}/>
<Features ar={true}/>
<Stats ar={true}/>
<Choosesimple ar={true}/>
<Cta ar={true}/>
<Review ar={true}/>
<Gallery ar={true}/>
<ContactForm ar={true}/>
</>
  )
}
