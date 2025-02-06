import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./tips.css";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";

function Tips() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // الترجمة

  return (
    <div className="tips-container">
      <NavBar />

      <div className="tips-row">
        {/* Teenagers Section */}
        <div className="tips-section" onClick={() => navigate("")}>
          <div className="tips-overlay light-gray">
            <div className="tips-content">
              <h1 className="tips-title">{t("tips.teenagers.title")}</h1>
              <button className="tips-button light-gray">
                {t("tips.teenagers.button")}
              </button>
            </div>
          </div>
        </div>

        {/* For All of Us Section */}
        <div className="tips-section" onClick={() => navigate("")}>
          <div className="tips-overlay light-blue">
            <div className="tips-content">
              <h1 className="tips-title">{t("tips.forAllOfUs.title")}</h1>
              <button className="tips-button light-blue">
                {t("tips.forAllOfUs.button")}
              </button>
            </div>
          </div>
        </div>

        {/* Menopause Section */}
        <div className="tips-section" onClick={() => navigate("")}>
          <div className="tips-overlay light-pink">
            <div className="tips-content">
              <h1 className="tips-title">{t("tips.menopause.title")}</h1>
              <button className="tips-button light-pink">
                {t("tips.menopause.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tips;
