import Foot from "../component/foot"
import Footer from "../component/footer"
import Header from "../component/header"

export const metadata = {
    title: "وايت ماء شمال الرياض - حلول موثوقة ونقية لتوريد المياه السكنية والتجارية ",

    description: 'اكتشف وايت ماء شمال الرياض - مصدرك الموثوق لحلول توريد المياه النقية والموثوقة. نلبي الاحتياجات السكنية والتجارية، ونضمن الوصول المستمر إلى مياه ذات جودة عالية '}

export default function ArLayout({ children }) {
    return (
        <div lang="ar" dir="rtl">
            <Header ar={true} />
            {children}
            {/* <Footer ar={true} /> */}
<Foot ar={true}/>
        </div>

    )
}
