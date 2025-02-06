import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faDownload } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/green-01.png";
import "./navBar.css";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import englishFlag from "../../assets/en.png";
import arabicFlag from "../../assets/pl.png";
function NavBar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleDownload = () => {
     const fileUrl = "https://drive.google.com/file/d/1gV3CwQeV3V8MjPhYxES5HKv3rXHpx8GV/view?usp=drive_link"
     const link = document.createElement("a");
     link.href = fileUrl;
     link.download = "brochure.pdf";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
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
          { 
            <FontAwesomeIcon
              icon={faDownload}
              className="icon download-icon"
              onClick={handleDownload}
              title="Download brochure"
            /> }

          <div className="logo-container" onClick={handleLogoClick}>
            <img src={img} alt="Logo" className="logo" />
          </div>

          <div className="button-container">
            <button
              className="button products-button"
              onClick={() => navigate("/products")}
            >
              {t("navbar.products")}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
