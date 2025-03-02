"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import stylesh from '../styles/blog.module.css';
import Footer from "../components/footer";
import AOS from 'aos';
import "aos/dist/aos.css"


const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch berita dari backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();

        // Sesuaikan URL gambar
        const updatedNews = data.map((item) => ({
          ...item,
          image_url: item.image_url
            ? item.image_url.includes("http")
              ? item.image_url
              : `http://localhost:5000${item.image_url}`
            : "/img/bakc.jpg",
        }));

        setNews(updatedNews);
      } catch (error) {
        console.error("Gagal mengambil berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <nav className={stylesh["first-nav"]}>
        <div className={stylesh["bahasa-faq"]}>
          <p>IND <span></span></p>
          <Link href="">FAQ</Link>
        </div>
        <div className={stylesh["contact1"]}>
          <Link href="">Contact Us</Link>
        </div>
      </nav>
      <nav className={stylesh['mobileNav']}>
        <div className={stylesh['hamburger']} onClick={() => setMenuOpen(true)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className={stylesh['logo-kecil']}>
          <Link href="/">
            <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
          </Link>
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`${stylesh['sideMenu']} ${menuOpen ? stylesh['open'] : ""}`}>
        <div className={stylesh['closeBtn']} onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6l-12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <ul className={stylesh['navList']}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Tentang Kami</Link>
          </li>
          <li>
            <Link href="/fitur" onClick={() => setMenuOpen(false)}>Fitur & Layanan</Link>
          </li>
          <li>
            <Link href="/harga" onClick={() => setMenuOpen(false)}>Harga</Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          </li>
        </ul>
      </div>
      
      <section className={stylesh["container"]}>
        <nav className={stylesh["second-nav"]}>
          <div className={stylesh["navbar"]}>
            <div className={stylesh["logo"]}>
              <Link href="/">
                <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
              </Link>
            </div>
            <div className={stylesh["navigation"]}>
              <Link href="/" className={stylesh["hove"]}>Tentang Kami</Link>
              <Link href="/fitur" className={stylesh["hove"]}>Fitur & Layanan</Link>
              <Link href="/harga" className={stylesh["hove"]}>Harga</Link>
              <Link href="" className={`${stylesh["hove"]} ${stylesh["active"]}`}>Blog</Link>
            </div>
            <div className={stylesh["search"]}>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </nav>
      </section>

      <section className={stylesh["main"]}>
        <div className={stylesh["header"]}>
          <h1>BLOG</h1>
          <p>
            <span className={stylesh["gradi"]}>
              Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi layanan dan fasilitas kesehatan terkini
            </span> yang kami sediakan untuk Anda
          </p>
        </div>

        {loading ? (
          <p>Memuat berita...</p>
        ) : (
          // Menggunakan grid layout agar card memiliki ukuran konsisten
<div className={stylesh["blog-grid"]}>
  {news.map((item) => (
    <div key={item.id} className={stylesh["card1"]}>
      <div className={stylesh["card-image"]}>
        <Image
          src={item.image_url}
          alt={item.title}
          width={400}
          height={200}
        />
      </div>
      <div className={stylesh["card-body"]}>
        <h6>
          <span>{item.author || "Admin"}</span>
          <span>{new Date(item.created_at).toLocaleDateString("id-ID")}</span>
        </h6>
        <h5 className={stylesh["card-title"]}>{item.title}</h5>
        <p className={stylesh["card-text"]}>
          {item.subtitle ? item.subtitle : item.content.substring(0, 100) + "..."}
        </p>
        <Link href={`/blog/${item.id}`} className={stylesh["baca"]}>Baca Selengkapnya</Link>
      </div>
    </div>
  ))}
</div>

        )}
      </section>

      <Footer />
    </>
  );
};

export default Blog;
