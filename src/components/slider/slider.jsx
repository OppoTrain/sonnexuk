import React from "react";
import bella1 from "../../assets/png-01.png";
import { useTranslation } from "react-i18next";
import "./slider.css";

export default function Slider() {
  const { t } = useTranslation();

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bella1} className="d-block w-100" alt="Pastel Blue Image" />

          <h3 className="carousel-caption">{t("slider.caption1")}</h3>
        </div>

        <div className="carousel-item">
          <img src={bella1} className="d-block w-100" alt="Pastel Blue Image" />

          <h3 className="carousel-caption">{t("slider.caption2")}</h3>
        </div>
      </div>

      <button
        className="carousel-control-prev custom-arrow"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next custom-arrow"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
