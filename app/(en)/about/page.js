import Gallery from "@/app/component/gallery"
import Stats from "@/app/component/stats"
import Review from "@/app/component/testimonial"

const { default: TextImage } = require("../../component/textimage")

export const metadata = {
    title: 'About SWS Riyadh - Clean & Safe Water Delivery ',
    description: ' Learn about Sweet Water Supply Riyadh, the leading provider of clean and safe water delivery. Discover our unwavering commitment to quality, reliability, and customer satisfaction.',
}
const Aboutus =()=>{
    return(<>
        <TextImage/>
        <Stats />
        <Review/>
        <Gallery/>  
          <br>
          </br> </>
    )
}
export default Aboutus