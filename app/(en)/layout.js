import Foot from "../component/foot"
import NewHeader from "../component/newHeader"

export const metadata = {
    title: 'Sweet Water Supply Riyadh - وايت ماء شمال الرياض',
    description: 'وايت ماء شمال الرياض Discover Sweet Water Supply - your trusted source for reliable and clean water solutions. We cater to residential and commercial requirements, ensuring uninterrupted access to quality water.',
}

export default function EnLayout({ children }) {
    return (
       <div >
       <NewHeader/>
        {children}
        <Foot />
       </div>

    )
}
