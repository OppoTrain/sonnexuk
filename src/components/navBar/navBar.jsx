import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

import img from "../../assets/black.png";
import "./navBar.css";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import englishFlag from "../../assets/en.png";
import arabicFlag from "../../assets/pl.png";

function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لتبديل القائمة

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Dropdown className="globe-container">
            <Dropdown.Toggle variant="light" className="icon globe-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                <img src={englishFlag} alt="English" className="flag-icon" />
                English
              </Dropdown.Item>

              <Dropdown.Item onClick={() => changeLanguage("ar")}>
                <img src={arabicFlag} alt="Arabic" className="flag-icon" />
                Arabic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="logo-container" onClick={handleLogoClick}>
            <img src={img} alt="Logo" className="logo" />
          </div>

          <div className="button-container">
            <button
              className="button products-button"
              onClick={() => navigate("/brands")}
            >
              {t("navbar.products")}
            </button>
            <FontAwesomeIcon
              icon={faBars}
              className="icon-menu"
              onClick={() => navigate("/products")}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
