import Image from "next/image"

export default function TextImage({ ar }) {
  const title = ar ? "معلومات عنا" : "About us  ";
  const sub = ar ? "وايت ماء شمال الرياض" : "Sweet Water Suppy  ";
  const img = ar ? "/hero.webp" : "/herol.webp";
  const para = ar ? "Sweet Water Supply هي شركة رائدة موثوق بها في صناعة إمدادات المياه ، حيث تقدم خدمة لا مثيل لها وجودة لا تضاهى. مع التزامنا الراسخ بتقديم مياه نظيفة وآمنة ، فإننا لا نقبل أبدًا بأي شيء أقل من التميز. يضمن فريقنا المتخصص أن كل قطرة ماء تفي بالمعايير الصارمة ، مما يمنحك راحة البال ويضمن لك مصدرًا موثوقًا للمياه. سواء كان ذلك لاحتياجات المناسبات السكنية أو التجارية أو الخاصة ، فإننا نفخر بقدرتنا على تلبية متطلباتك بدقة وكفاءة. اختر Sweet Water Supply للحصول على موثوقية لا مثيل لها وخدمة عملاء متميزة وتجربة منعشة تفوق التوقعات. " : "                  Sweet Water Supply is a trusted leader in the water supply industry, providing unparalleled service and uncompromising quality. With a firm commitment to delivering clean and safe water, we never settle for anything less than excellence. Our dedicated team ensures that every drop of water meets rigorous standards, giving you peace of mind and the assurance of a reliable water source. Whether its for residential, commercial, or special event needs, we pride ourselves on our capacity to meet your requirements with precision and efficiency. Choose Sweet Water Supply for unmatched reliability, outstanding customer service, and a refreshing experience that surpasses expectations.  ";
  return (<>

    <div className="bg-white py-6 sm:py-8 lg:py-12" >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                src={img}
                loading="lazy"
                width={600}
                height={500}
                alt="water tanker image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="md:pt-8">
            <p className="text-center font-bold text-blue-500 md:text-start">
              {sub
              }
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-start">
              {title}
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}