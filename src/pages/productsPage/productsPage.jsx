import React, { useState } from "react";
import Products from "../products/products";
import Contact from "../contact/contact";
import Tips from "../tips/tips";
import About from "../about-us/aboutUs";
import "./productsPage.css";
import NavBar from "../../components/navBar/navBar";
import { useTranslation } from "react-i18next";
import Applicat from "../applicat/applicat";
import Other from "../other-brands/other-brands";

function TabsPage() {
  const [activeTab, setActiveTab] = useState("products"); // حالة التاب النشط
  const { t } = useTranslation(); // الترجمة

  return (
    <div className="tabs-page">
      {/* شريط التنقل */}
      <NavBar />

      {/* جملة قبل التبويبات */}
      <div className="before-content">
        <p>{t("tabs.instruction")}</p>
      </div>

      {/* التبويبات */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === "products" ? "active" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          {t("tabs.Our Brands")}
        </button>
        <button
          className={`tab-button ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          {t("tabs.Why Sonnex")}
        </button>

        <button
          className={`tab-button ${activeTab === "tips" ? "active" : ""}`}
          onClick={() => setActiveTab("tips")}
        >
          {t("tabs.tips")}
        </button>
        <button
          className={`tab-button ${activeTab === "applicat" ? "active" : ""}`}
          onClick={() => setActiveTab("applicat")}
        >
          {t("tabs.Application")}
        </button>
        <button
          className={`tab-button ${activeTab === "other" ? "active" : ""}`}
          onClick={() => setActiveTab("other")}
        >
          {t("tabs.Other Brands")}
        </button>
        <button
          className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          {t("tabs.contact")}
        </button>
      </div>

      {/* المحتوى الخاص بالتبويب النشط */}
      <div className="tab-content">
        {activeTab === "products" && <Products />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "tips" && <Tips />}
        {activeTab === "about" && <About />}
        {activeTab === "applicat" && <Applicat />}
        {activeTab === "other" && <Other />}
      </div>
    </div>
  );
}

export default TabsPage;
