import Image from "next/image"
import img1 from "../../public/watertanker1.png"
import img2 from "../../public/watertanker2.png"
export default function TwoService({ar=false}){
    return(
        <>{ar==false?
        <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={"/long.jpeg"}
            width={1000}
            height={100}
            
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          Water Tanker 1
        </h2>
        <p className="leading-relaxed text-base">
          32000 liters of fresh Water, along with water pump for faster filling.
        </p>
        {/* <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
          Click to book now.
        </button> */}
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="content"
            className="object-cover  h-full w-full"
            src={"/herob.jpeg"}
            width={1000}
            height={100}
            style={{objectPosition: "center -160px  "}}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
 Water Tanker 2        </h2>
        <p className="leading-relaxed text-base">
         18000 liters of normal potable water for swimming and other purposes with motor.
        </p>
        {/* <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
          Click to Book now
        </button> */}
      </div>
    </div>
  </div>
</section>:<section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={"/long.jpeg"}
            width={1000}
            height={100}
            
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        صهريج مياه 1
        </h2>
        <p className="leading-relaxed text-base">
        32000 لتر من المياه العذبة مع مضخة مياه لتعبئة أسرع.
        </p>
        {/* <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
          Click to book now.
        </button> */}
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="content"
            className="object-cover  h-full w-full"
            src={"/herob.jpeg"}
            width={1000}
            height={100}
            style={{objectPosition: "center -160px  "}}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
 صهريج مياه 2
         </h2>
        <p className="leading-relaxed text-base">
        18000 لتر من مياه الشرب العادية للسباحة ولأغراض أخرى مع الموتور.
        </p>
        {/* <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
          Click to Book now
        </button> */}
      </div>
    </div>
  </div>
</section>}

</>
    )
}