import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';


export default function about() {
  const { t ,i18n} = useTranslation();

  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="pattern-layer">
        <div className="pattern-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
        <div className="pattern-4" style={{ backgroundImage: 'url(assets/images/shape/shape-10.png)' }}></div>
        <div className="pattern-5" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                <div className="shape float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                <div className="icon-one"><i className="icon-13"></i></div>
                <div className="icon-two"><i className="icon-14"></i></div>
                <div className="text-box">
                  <h3>Wade Warren</h3>
                  <span>Medical Assistant</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <span className="sub-title">{t("aboutUs_key")}</span>
                  <h2>{t("serviceDiagnostics_key")}</h2>
                </div>
                <div className="text-box mb_40">
                  <h6>{t("commitedTo_key")}</h6>
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <ul className="list-style-one clearfix">
                    <li>{t("ambulanceServices_key")}</li>
                    <li>{t("oxizen_key")}</li>
                    <li>{t("pharmacyClinic_key")}</li>
                    <li>{t("dutyDoctors_key")}</li>
                    <li>{t("medicalEmergency_key")}</li>
                  </ul>
                </div>
                <div className="btn-box">
                  <Link href="/#" className="theme-btn btn-one"><span>{t("discoverMore_key")}</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
