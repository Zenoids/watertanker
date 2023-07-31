import Choosesimple from '@/app/component/choosesimple'
import Cta from '@/app/component/cta'
import Features from '@/app/component/feature'
import TwoService from '@/app/component/twoservice'
import React from 'react'
export const metadata = {
    title: 'Services Sweet Water Supply Riyadh - وايت ماء شمال الرياض',
    description: 'وايت ماء شمال الرياض Explore our comprehensive water services tailored to meet the diverse needs of residential and commercial clients. We provide uninterrupted access to high-quality water through our reliable delivery and maintenance solutions.',
}
export default function Service() {
  return (<>
    <Features/>
   <TwoService/>
   <Cta/>
   <Choosesimple/>
   </>
  )
}
