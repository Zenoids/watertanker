import Foot from "../component/foot"
import NewHeader from "../component/newHeader"

export const metadata = {
    title: "وايت ماء شمال الرياض - حلول موثوقة ونقية لتوريد المياه السكنية والتجارية ",

    description: 'Sweet Water Supply Riyadh  اكتشف وايت ماء شمال الرياض - مصدرك الموثوق لحلول توريد المياه النقية والموثوقة. نلبي الاحتياجات السكنية والتجارية، ونضمن الوصول المستمر إلى مياه ذات جودة عالية '
}

export default function ArLayout({ children }) {
    return (
        <div lang="ar" dir="rtl">
            <NewHeader ar={true} />
            {children}
            <Foot ar={true} />
        </div>

    )
}
