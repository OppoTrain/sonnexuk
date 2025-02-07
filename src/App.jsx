import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n"; // تأكد من وجود هذا السطر

import Footer from "./components/footer/footer"; // استيراد الفوتر
import HomePage from "./pages/home-page/homePage";
import Contact from "./pages/contact/contact";
import About from "./pages/about-us/aboutUs";
import Proteen from "./pages/proTeen/proTeen";
import Classic from "./pages/classic/classic";
import Mom from "./pages/mom/mom";
import Becontrol from "./pages/becontrol/becontrol";
import Ultratin from "./pages/ultra-thin/ultraThin";
import ProductsPage from "./pages/productsPage/productsPage";


import Brands from "./pages/products/products";
import Applicat from "./pages/applicat/applicat";
import Other from "./pages/other-brands/other-brands";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home-Page" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/pro-teen" element={<Proteen />} />
            <Route path="/classic" element={<Classic />} />
            <Route path="/mom" element={<Mom />} />
            <Route path="/becontrol" element={<Becontrol />} />
            <Route path="/ultra-thin" element={<Ultratin />} />
            <Route path="/products" element={<ProductsPage />} />
            
            <Route path="/brands" element={<Brands />} />
            <Route path="/application" element={<Applicat />} />
            <Route path="/other-brands" element={<Other />} />
          </Routes>
        </div>
        {/* إضافة الفوتر أسفل كل الصفحات */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
