import React, { useState } from "react";

const WazaifEn = () => {
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
                  Wazifa For Children
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
                    Wazif for children "YAA BAARI" 313 times first and last 11
                    times Durood Sharif 21 days you should read it with water
                    and blow it and drink both husband and wife Insha'Allah will
                    give good children.
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
                  Wazifa to end all kinds of fear.
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
                    Wazifa to eliminate fear and fear of weakness "Yaa Hafiz and
                    Yaa Allah" recite 313 times daily first and last 11 times
                    after reciting Durood Sharif after blowing the water and
                    drinking it Insha'Allah you will get relief from all kinds
                    of fear and fear and with it wear the Neelam.
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
                  Wazifa for locating a lost item
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
                    To find the lost things, read "Inallah wana alaihi ajajoon"
                    313 times and pray that you will find it or get information
                    and wear zircon and salmani aqeeq along with it.
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
                  Stipend to end unemployment.
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
                    Whoever recites this wazifa 313 times daily in the morning
                    "Yaa Allah, Yaa Razzaq, and Yaa Ghani" first and last 11
                    times Durood Sharif Insha'Allah is his job problem will be
                    solved with him Hussain Fir Also wearing waza and Yemeni
                    aqeeq.
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
                  Wazifa for breaking black magic and blockages{" "}
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
                    Whoever has black magic and black magic on him should recite
                    Ayat al-Kursi seven times, seven times Foru Qull first and
                    last, 11 times Durood Sharif for 21 days after Isha prayer.
                    Wear a ring of Zurqun and Haqiq.
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
                  Marriage and relationship{" "}
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
                    Wazifa Surah Ikhlas 41 times for 21 days first and last, 11
                    times read Durood Sharif regularly, Insha'Allah, the rakaat
                    of your relationship will end and Allah will create causes
                    from the unseen and this with coral and You can wear topaz
                    stones and your relationship will be quick.
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
                  Wazifa to be safe from the evil of the enemy.
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
                    In order to avoid the cruelty of the enemy, whether he is
                    angry or oppressive, recite it "Yaa Jabbar" 1100 times daily
                    and imagine it and blow it, Insha'Allah Will be safe.
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
                  The biggest incurable disease is over.
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
                    To get rid of all diseases, you have to read this wazifa 313
                    times "Yaa Shafi, Yaa Maafi, and Yaa Qaafi" or the rest
                    first, last 11 times, Durood Sharif, for 21 days
                    continuously, and you have to recite this wazifa on water
                    every day. Drinking water is to prevent major diseases,
                    Insha'Allah Allah will save you.
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
                  Wazifa for Success in Papers.
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
                    Wazifa for Success in Papers reciet "Yaa Haseed" 1100 times
                    every day first and last 11 times Drud Pak and pray for
                    success in papers.
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

export default WazaifEn;
