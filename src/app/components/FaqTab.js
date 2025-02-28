"use client";

import { useState } from "react";
import stylesf from "../styles/faq.module.css"; // Pastikan file CSS ada

const FAQTab = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("faq1");

  return (
    <div className={stylesf["faq-overlay"]}>
      <div className={stylesf["faq-container"]}>
        <button className={stylesf["close-btn"]} onClick={onClose}>✖</button>

        <div className={stylesf["tab-buttons"]}>
          <button
            className={`${stylesf["tab-btn"]} ${
              activeTab === "faq1" ? stylesf["active"] : ""
            }`}
            onClick={() => setActiveTab("faq1")}
          >
            Apa itu MediGrid?
          </button>
          <button
            className={`${stylesf["tab-btn"]} ${
              activeTab === "faq2" ? stylesf["active"] : ""
            }`}
            onClick={() => setActiveTab("faq2")}
          >
            Bagaimana cara menggunakan MediGrid?
          </button>
          <button
            className={`${stylesf["tab-btn"]} ${
              activeTab === "faq3" ? stylesf["active"] : ""
            }`}
            onClick={() => setActiveTab("faq3")}
          >
            Apakah MediGrid gratis?
          </button>
        </div>

        <div className={stylesf["tab-content-wrapper"]}>
          <div
            className={`${stylesf["tab-content"]} ${
              activeTab === "faq1" ? stylesf["active"] : ""
            }`}
          >
            <p>MediGrid adalah aplikasi digital untuk mengelola operasional klinik dan fasilitas kesehatan secara lebih efisien.</p>
          </div>
          <div
            className={`${stylesf["tab-content"]} ${
              activeTab === "faq2" ? stylesf["active"] : ""
            }`}
          >
            <p>Anda bisa mulai dengan mendaftar akun, lalu mengelola data pasien, rekam medis, dan laporan kesehatan.</p>
          </div>
          <div
            className={`${stylesf["tab-content"]} ${
              activeTab === "faq3" ? stylesf["active"] : ""
            }`}
          >
            <p>Ya, MediGrid menyediakan paket gratis dan juga opsi premium dengan fitur lebih lengkap.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQTab;
