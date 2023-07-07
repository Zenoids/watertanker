import Header from "../component/header"
import Footer from "../component/footer"
import Foot from "../component/foot"
import NewHeader from "../component/newHeader"

export const metadata = {
    title: 'Sweet Water Supply - Reliable and Clean Water Solutions for Residential and Commercial Needs',
    description: ' Discover Sweet Water Supply - your trusted source for reliable and clean water solutions. We cater to residential and commercial requirements, ensuring uninterrupted access to quality water.',
}

export default function EnLayout({ children }) {
    return (
       <div >
        {/* <Header  /> */}
       <NewHeader/>
        {children}
        <Foot />
       </div>

    )
}
