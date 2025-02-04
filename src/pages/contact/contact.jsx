import React, { useState } from "react";
import "./contact.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/navBar/navBar";
import { useTranslation } from "react-i18next";

const Contact = () => {
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
      <Nav />
      <main
        className="contact-main"
        dir={i18n.language === "ar" ? "rtl" : "ltr"} // إضافة خاصية الاتجاه
        lang={i18n.language}
      >
        <h1>{t("contact.heading")}</h1>
        <p>{t("contact.description")}</p>

        <div className="contact-info">
          <h3>{t("contact.emailLabel")}</h3>
          <p>
            <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t("contact.form.name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.form.placeholder.name")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t("contact.form.email")}</label>
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

          <div className="form-group">
            <label htmlFor="country">{t("contact.form.country")}</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder={t("contact.form.placeholder.country")}
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contact.form.placeholder.message")}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {t("contact.form.submit")}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
