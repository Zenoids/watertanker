import Choosesimple from '@/app/component/choosesimple'
import Cta from '@/app/component/cta'
import Features from '@/app/component/feature'
import TwoService from '@/app/component/twoservice'
import React from 'react'
export const metadata = {
    title:" خدمات المياه بواسطة وايت ماء شمال الرياض - حلول موثوقة للاحتياجات السكنية والتجارية",
    description:" استكشف خدمات المياه الشاملة التي نقدمها في وايت ماء شمال الرياض والتي تلبي احتياجات العملاء السكنية والتجارية. نوفر الوصول المستمر إلى مياه عالية الجودة من خلال حلولنا الموثوقة في التوصيل والصيانة"


}
export default function Service() {
  return (<>
    <Features ar={true}/>
   <TwoService ar={true}/>
   <Cta ar={true}/>
   <Choosesimple ar={true}/>
   </>
  )
}
