import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./products.css";
import img from "../../assets/png blue_.png";

function Products() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // استخدم الترجمة

  // بيانات المنتجات مع استخدام مفاتيح الترجمة من ar.json و en.json
  const products = [
    {
      name: t("products.ultraThin"), // استخدام المفتاح من ملفات الترجمة
      image: img,
      path: "/ultra-thin",
    },
    {
      name: t("products.teen"),
      image: img,
      path: "/pro-teen",
    },
    {
      name: t("products.classic"),
      image: img,
      path: "/classic",
    },
    {
      name: t("products.mom"),
      image: img,
      path: "/mom",
    },
    {
      name: t("products.becontrol"),
      image: img,
      path: "/becontrol",
    },
  ];

  return (
    <div className="page-container">
      <div className="products-container">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => navigate(product.path)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
