import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';


export default function feature() {

  const { t ,i18n} = useTranslation();

  return (
    <section className="feature-section pt_120 pb_90">
    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-9"></i></div>
              <h3><Link href="/">{t("qualifiedDoctor_key")}</Link></h3>
              <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-10"></i></div>
              <h3><Link href="/">{t("emergencyHelp_key")}</Link></h3>
              <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-11"></i></div>
              <h3><Link href="/">{t("modernEquipment_key")}</Link></h3>
              <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-12"></i></div>
              <h3><Link href="/">{t("familyMedicine_key")}</Link></h3>
              <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
