import Image from "next/image"

function Serv({ title, para, img }) {
  return (
    <>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover  h-full w-full"
            src={img}
            width={1000}
            height={100}
            style={{ objectPosition: "center -160px  " }}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          {title}      </h2>
        <p className="leading-relaxed text-base">
          {para}        </p>

      </div>
    </>
  )
}
export default function TwoService({ ar = false }) {
  return (
    <>{ar == false ?
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <Serv title={"Water Tanker 1"} img={"/long.webp"} para={"32000 liters of fresh Water, along with water pump for faster filling."}/>
            <Serv title={"Water Tanker 2"} img={"/herob.webp"} para={" 18000 liters of normal potable water for swimming and other purposes with motor."}/>
          </div>
        </div>
      </section> : <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <Serv title={"صهريج مياه 1"} img={"/long.webp"} para={"32000 لتر من المياه العذبة مع مضخة مياه لتعبئة أسرع."}/>
            <Serv title={"صهريج مياه 2"} img={"/long.webp"} para={"18000 لتر من مياه الشرب العادية للسباحة ولأغراض أخرى مع الموتور."}/>
          </div>
        </div>
      </section>}

    </>
  )
}