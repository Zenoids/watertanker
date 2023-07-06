import Image from "next/image"
import img1 from "../../public/watertanker1.png"

export default function TextImage({ar}){
  return (<>
    {
    ar == true ? 
        <div className="bg-white py-6 sm:py-8 lg:py-12" >
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image
            src={img1}
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="md:pt-8">
        <p className="text-center font-bold text-blue-500 md:text-right">
        من نحن

        </p>
        {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-right">
        ميزتنا التنافسية

        </h2>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        هذا قسم من بعض نصوص الحشو البسيطة ، والمعروف أيضًا باسم
          نص العنصر النائب. تشترك في بعض خصائص كتاب حقيقي
          نص ولكنه عشوائي أو تم إنشاؤه بطريقة أخرى. يمكن استخدامه لعرض ملف
          عينة من الخطوط أو إنشاء نص للاختبار. نص الحشو وهمية
          النص الذي ليس له معنى يبدو مشابهًا جدًا للنص الحقيقي.
          <br />
          <br />
          هذا قسم من بعض نصوص الحشو البسيطة ، والمعروف أيضًا باسم
          نص العنصر النائب. تشترك في بعض خصائص كتاب حقيقي
          نص ولكن{" "}
          <a
            href="#"
            className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
          >
            عشوائي

          </a>{" "}
          أو تم إنشاؤها بطريقة أخرى. يمكن استخدامه لعرض عينة من الخطوط أو
          توليد نص للاختبار. نص الحشو هو نص وهمي لا يحتوي على
          ومع ذلك ، يبدو المعنى مشابهًا جدًا للنص الحقيقي.
        </p> */}
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-start">
        معلومات عنا

        </h1>
        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Sweet Water Supply هي شركة رائدة موثوق بها في صناعة إمدادات المياه ، حيث تقدم خدمة لا مثيل لها وجودة لا تضاهى. مع التزامنا الراسخ بتقديم مياه نظيفة وآمنة ، فإننا لا نقبل أبدًا بأي شيء أقل من التميز. يضمن فريقنا المتخصص أن كل قطرة ماء تفي بالمعايير الصارمة ، مما يمنحك راحة البال ويضمن لك مصدرًا موثوقًا للمياه. سواء كان ذلك لاحتياجات المناسبات السكنية أو التجارية أو الخاصة ، فإننا نفخر بقدرتنا على تلبية متطلباتك بدقة وكفاءة. اختر Sweet Water Supply للحصول على موثوقية لا مثيل لها وخدمة عملاء متميزة وتجربة منعشة تفوق التوقعات.

        </p>
      </div>
    </div>
  </div>
</div>
:       <div className="bg-white py-6 sm:py-8 lg:py-12">
<div className="mx-auto max-w-screen-xl px-4 md:px-8">
  <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
    <div>
      <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
        <Image
          src={"/herol.jpg"}
          loading="lazy"
          alt="Photo by Martin Sanchez"
          width={600}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div className="md:pt-8">
      <p className="text-center font-bold text-blue-500 md:text-start">
        Sweet Water Suppy
      </p>
      {/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-start">
        Our competitive advantage
      </h2>
      <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        This is a section of some simple filler text, also known as
        placeholder text. It shares some characteristics of a real written
        text but is random or otherwise generated. It may be used to display a
        sample of fonts or generate text for testing. Filler text is dummy
        text which has no meaning however looks very similar to real text.
        <br />
        <br />
        This is a section of some simple filler text, also known as
        placeholder text. It shares some characteristics of a real written
        text but is{" "}
        <a
          href="#"
          className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
        >
          random
        </a>{" "}
        or otherwise generated. It may be used to display a sample of fonts or
        generate text for testing. Filler text is dummy text which has no
        meaning however looks very similar to real text.
      </p> */}
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-start">
        About us
      </h1>
      <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
      Sweet Water Supply is a trusted leader in the water supply industry, providing unparalleled service and uncompromising quality. With a firm commitment to delivering clean and safe water, we never settle for anything less than excellence. Our dedicated team ensures that every drop of water meets rigorous standards, giving you peace of mind and the assurance of a reliable water source. Whether its for residential, commercial, or special event needs, we pride ourselves on our capacity to meet your requirements with precision and efficiency. Choose Sweet Water Supply for unmatched reliability, outstanding customer service, and a refreshing experience that surpasses expectations.
      </p>
    </div>
  </div>
</div>
</div>

}</>
    )
}