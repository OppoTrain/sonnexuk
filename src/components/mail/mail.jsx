import React, { useState } from "react";
import "./mail.css";
import Footer from "../footer/footer";
import Nav from "../navBar/navBar";
import { useTranslation } from "react-i18next";

const Letter = () => {
  const { t, i18n } = useTranslation(); // الترجمة
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.form.thankYou")); // رسالة شكر عند الإرسال
    setFormData({ name: "", email: "", country: "", message: "" }); // إعادة ضبط الحقول
  };

  return (
    <div id="contact-page">
      <div className="contact-header">
        <h1>join our mail system </h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.form.placeholder.email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Letter;
