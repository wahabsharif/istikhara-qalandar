import React, { useState } from "react";

const WazaifAr = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="accordion" id="accordion">
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 0 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingOne">
                <button
                  className={
                    (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  منحة دراسية للأطفال{" "}
                </button>
              </h5>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse${
                  imgTab === 0 ? " show " : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    الواقف للأطفال (أو) الباري 313 مرة الأولى والأخيرة 11 مرة
                    دورود شريف 21 يوما يجب أن تقرأ الماء والماء للزوج والزوجة
                    اشربوا إن شاء الله، الله يرزقكم أولاداً صالحين.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 1 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingTwo">
                <button
                  className={
                    (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  منحة دراسية لإنهاء جميع أنواع الخوف
                </button>
              </h5>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse${
                  imgTab === 1 ? " show " : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    وزيفة أو حفيظ للقضاء على كل أنواع الخوف والضعف اقرؤوا الله
                    313 مرة في اليوم، الأولى والأخيرة 11 مرة بعد قراءة الدرود
                    الشريف والماء اشربه بعد شربه إن شاء الله تتحرر من كل أنواع
                    الخوف سوف أذهب وأرتدي معها الياقوت{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 2 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingThree">
                <button
                  className={
                    (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  وزيفة للعثور على جسم مفقود{" "}
                </button>
              </h5>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse${
                  imgTab === 2 ? " show " : ""
                }`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    313 مرة للعثور على الشيء المفقود عجون) إقرأ وأدعو لك أن تحصل
                    على معلومة سوف يذهب ويلبس معه الزركون والسلماني العقيق.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 3 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  راتب لإنهاء البطالة{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 3 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    من قرأ هذه الوزيفة 313 مرة يوميا في الصباح أو الله أو الرزاق
                    أو جيني الأول والأخير 11 مرة دورود شريف إن شاء الله له مشكلة
                    العمالة ستحل مع حسين فر وازا و كما يلبس العقيق اليمني{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 4 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  وظيفة السحر الاسود وفك الحجب{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 4 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    يجب على أي شخص تأثر بالسحر الأسود والسحر الأسود آية الكرسي
                    سبع مرات بعد صلاة العشاء أولا وأخيرا إقرأ دورود شريف 11 مرة
                    لمدة 21 يوما إن شاء الله سينتهي كل شيء هيذهب ويلبس خاتم
                    حقيقي وزركون{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 5 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 5 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  منحة الزواج والعلاقات{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 5 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    سورة وزيفة للفتيات اللاتي تعطلت علاقتهن الإخلاص 41 مرة 21
                    يوما الأولى والأخيرة 11 مرة دورود شريف أب باجيدجي إقرأ من إن
                    شاء الله علاقتك ستنتهي و ومن الغيب يخلق الله به الأسباب
                    والمرجان يمكنك ارتداء أحجار التوباز وستكون علاقتك سريعة.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 6 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 6 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 6 ? -1 : 6)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  وزيفة للأمن من شر العدو{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 6 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    سواء كان العدو قاسياً لتجنب قسوته، أو كان غاضباً أو مستبداً
                    إقرأها 1100 مرة يوميا وتخيلها الله يحفظك.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 7 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 7 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 7 ? -1 : 7)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  نهاية المرض العضال الرئيسي{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 7 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    إقرأ هذه الرقية 313 مرة تتخلص من كل الأمراض هل هو أم شافعي
                    أم استغفار أم كاف أم راحة أول وآخر 11 مرة شريف، عليك أن تدرس
                    لمدة 21 يومًا متواصلة وقد حصلت على هذه المنحة ولا بد من
                    التنفس عليه وشرب منقوع الماء يومياً إن شاء الله إن شاء الله
                    ستشفى من المرض الكبير{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "accordion-item content__space fade-top" +
                (imgTab === 8 ? " faq-one-active" : " ")
              }
            >
              <h5 className="accordion-header" id="headingFour">
                <button
                  className={
                    (imgTab == 8 ? "  " : " collapsed") + " accordion-button"
                  }
                  onClick={() => setImgTab(imgTab === 8 ? -1 : 8)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  منحة للنجاح في الأوراق{" "}
                </button>
              </h5>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse${
                  imgTab === 8 ? " show " : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    راتب نجاح الأوراق 1100 مرة أو حسيب 1 كل يوم وأخيرا إقرأ
                    دورود باك 11 مرة وصلى إن شاء الله سأنجح.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WazaifAr;
