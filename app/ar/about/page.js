

import Gallery from "@/app/component/gallery"
import Stats from "@/app/component/stats"
import Review from "@/app/component/testimonial"

const { default: TextImage } = require("../../component/textimage")

export const metadata = {
    title: 'حول وايت ماء شمال الرياض - التزامنا بتوصيل المياه النظيفة والآمنة',
    description:" تعرف على وايت ماء شمال الرياض، المزود الرائد لتوصيل المياه النظيفة والآمنة. اكتشف التزامنا الثابت بالجودة والموثوقية ورضا العملاء"


}
const Aboutus =()=>{
    return(<>
        <TextImage ar={true}/>
        <Stats ar={true} />
        <Review ar={true}/>
        <Gallery ar={true}/>
         <br>
          </br>       </>
    )
}
export default Aboutus