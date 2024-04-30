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
                  اولاد کے لیے وظیفہ{" "}
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
                    اولاد کے لیے وظیفہ (یا) باری 313 بار اول آخر 11 دفعہ درود
                    شریف 21 دن آپ پڑھیں پانی کے او پردم کر کے میاں بیوی دونوں
                    پییں انشاء اللہ نیک اولاد اللہ پاک عطا کرے گا۔{" "}
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
                  ہر طرح کا ڈر خوف ختم کرنے کا وظیفہ{" "}
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
                    کمزوری بر طرح کا ڈر اور خوف ختم کرنے کا وظیفہ یا حفیظ یا
                    اللہ 313 دفعہ روز پڑھے اول آخر 11 بار درود شریف پڑھ کر پانی
                    پردم کرکے پییں انشاء اللہ ہر طرح کے ڈر خوف سے آپ کو نجات مل
                    جائے گی اور اس کے ساتھ نیلم پہنے ۔{" "}
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
                  گمشدہ چیز کا معلوم کرنے کا وظیفہ{" "}
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
                    گم شده چیز معلوم کرنے کے لیے 313 دفعہ (اناللہ وانا علیہ
                    عاجعون) پڑھے اور دعا فرما ہے آپ کو مل جائے گی یا معلومات ہو
                    جائے گی اور اس کے ساتھ زرقون اور سلمانی عقیق پہنے۔{" "}
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
                  بے روز گاری ختم کرنے کا وظیفہ{" "}
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
                    جو بھی اس وظیفے کو 313 مرتبہ روزانہ صبح پڑھے گا یا اللہ یا
                    رزاق یا گنی اول آخر 11 دفعہ درود شریف انشاء اللہ اس کا ہے
                    روزگاری کا مسئلہ حل ہو جائے گا اس کے ساتھ حسین فیر وزہ اور
                    عقیق یمنی بھی پہنے ۔{" "}
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
                  کالے جادو اور بندش کے توڑ کا وظیفہ{" "}
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
                    جس کسی پر کالا جادو اور بندش ہو گئی ہو اس کو چاہیے کہ بر روز
                    عشاء کی نماز کے بعد چاروں کل سات مرتبہ آیت الکرسی سات مرتبه
                    اول آخر 11 دفعه درود شریف 21 دن تک پڑھے انشاء اللہ سب ختم ہو
                    جائے گا اور حقیق اور زرقون کی انگوٹھی پہنے ۔{" "}
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
                  شادی اور رشتے کا وظیفہ{" "}
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
                    جن بچیوں کے رشتے میں رکاوٹ ہو رہی بیان کے لیے وظیفہ سورہ
                    اخلاص 41 مرتبہ 21 دن اول آخر 11 مرتبہ درود شریف آپ باقائدگی
                    سے پڑھیں انشاء اللہ آپ کے رشتے کی رکاعث ختم ہو جائے گی اور
                    غیب سے اللہ پاک اسباب پیدا کرے گا اور اس کے ساتھ مرجان اور
                    پکھراج پتھرا پہن سکتے ہیں آپ کا رشتہ جلدی ہو جائے گا۔{" "}
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
                  دشمن کے شُر سے محفوظ رہنے کا وظیفہ{" "}
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
                    دشمن ظالم ہو اس کے ظلم سے بچنے کے لیے یا قہار ہو یا جبار ہو
                    1100 بار روزانہ پڑھ کے آپ اس کا تصور کر کے پھوک ماریں انشاء
                    اللہ آپ محفوظ رہیں گے۔{" "}
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
                  بڑی سے بڑی لاعلاج بیماری ختم{" "}
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
                    تمام بیماریوں سے نجات کے لیے یہ وظیفہ 313 مرتبہ آپ نے پڑھنا
                    ہے یا شافی یا معافی یا کافی یا باقی اول آخر 11 مرتبہ درود
                    شریف 21 دن متواتر آپ نے پڑھنا ہے اور اس وظیفے کو آپ نے پانی
                    کے اوپردم کر کے ہر روزیہ دم شدہ پانی پینا ہے انشاء اللہ بڑی
                    سے بڑی بیماری سے انشاء اللہ آپ کو نجات ہو گی۔{" "}
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
                  پیپروں میں کامیابی کا وظیفہ{" "}
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
                    پیپروں میں کامیابی کا وظیفہ ہر روز 1100 مرتبہ یا حسیب اول
                    آخر 11 مرتبہ درود پاک پڑھیں اور دعا کرے انشاء اللہ پیپروں
                    میں کامیابی ہو گی۔{" "}
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
