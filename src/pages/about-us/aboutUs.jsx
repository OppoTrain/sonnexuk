import React from "react";
import "./aboutUs.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/navBar/navBar";
import aboutUsImage from "../../assets/green-01.png"; // استيراد الصورة
import { useTranslation } from "react-i18next"; // إضافة الترجمة

const AboutUs = () => {
  const { t } = useTranslation(); // استخدام الترجمة

  return (
    <div id="about-us-page">
      <Nav />
      <div className="about-us-container">
        {/* رأس الصفحة مع الصورة */}
        <div className="about-us-header">
          <div className="about-us-image-container">
            <img
              src={aboutUsImage}
              alt={t("aboutUs.imageAlt")}
              className="about-us-image"
            />
          </div>
          <div className="about-us-text">
            <h1>{t("aboutUs.heading")}</h1>
            <p className="about-us-tagline">{t("aboutUs.tagline")}</p>
          </div>
        </div>

        {/* محتوى الصفحة */}
        <div className="about-us-content">
          <p>{t("aboutUs.paragraph1")}</p>
          <p>{t("aboutUs.paragraph2")}</p>
          <p>{t("aboutUs.paragraph3")}</p>
          <p>{t("aboutUs.paragraph4")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
