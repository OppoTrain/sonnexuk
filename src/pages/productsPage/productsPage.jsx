import React, { useState } from "react";
import Products from "../products/products";
import Contact from "../contact/contact";
import Tips from "../tips/tips";
import "./productsPage.css";
import NavBar from "../../components/navBar/navBar";
import { useTranslation } from "react-i18next";

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
          {t("tabs.products")}
        </button>
        <button
          className={`tab-button ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          {t("tabs.contact")}
        </button>
        <button
          className={`tab-button ${activeTab === "tips" ? "active" : ""}`}
          onClick={() => setActiveTab("tips")}
        >
          {t("tabs.tips")}
        </button>
      </div>

      {/* المحتوى الخاص بالتبويب النشط */}
      <div className="tab-content">
        {activeTab === "products" && <Products />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "tips" && <Tips />}
      </div>
    </div>
  );
}

export default TabsPage;
