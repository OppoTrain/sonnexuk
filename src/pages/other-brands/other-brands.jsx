import React from "react";
import "./other-brands.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/navBar/navBar";
import aboutUsImage from "../../assets/green-01.png"; // استيراد الصورة
import { useTranslation } from "react-i18next"; // إضافة الترجمة

const AboutUs = () => {
  const { t } = useTranslation(); // استخدام الترجمة

  return <h>comming soon </h>;
};

export default AboutUs;
