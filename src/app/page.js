"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import styles from "./styles/home.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqTab from "./components/FaqTab";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleScrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once:   false,
      mirror: false, 
      offset: 200,
    });
  }, []);
  return (
    <>
      <nav className={styles["first-nav"]}>
        <div className={styles["bahasa-faq"]}>
          <p>
            IND <span></span>
          </p>
          <button onClick={() => setShowFAQ(true)}>FAQ</button>
        </div>
        <div className={styles["contact1"]}>
        <button onClick={handleScrollToFooter}>Contact Us</button>
        </div>
      </nav>

      {showFAQ && <FaqTab onClose={() => setShowFAQ(false)} />}

      <nav className={styles['mobileNav']}>
        <div className={styles['hamburger']} onClick={() => setMenuOpen(true)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className={styles['logo-kecil']}>
          <Link href="/">
            <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
          </Link>
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`${styles.sideMenu} ${menuOpen ? styles['open'] : ""}`}>
        <div className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6l-12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <ul className={styles['navList']}>
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
        

      <section className={styles["container"]}>
        <nav className={styles["second-nav"]}>
          <div className={styles["navbar"]}>
            <div className={styles["logo"]}>
              <Link href="/">
                <Image
                  src="/img/medigrid.jpg"
                  alt="Logo"
                  width={140}
                  height={100}
                />
              </Link>
            </div>
            <div className={styles["navigation"]}>
              <Link
                href="/"
                className={`${styles["hove"]} ${styles["active"]}`}
              >
                Tentang Kami
              </Link>
              <Link
               href="/fitur"
               className={styles["hove"]}
                >
                Fitur & Layanan
              </Link>
              <Link href="/harga"
               className={styles["hove"]}
               >
                Harga
              </Link>
              <Link 
              href="/blog"
               className={styles["hove"]}
               >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </section>

      <section className={styles["main"]}>
        <div className={styles["obat"]}></div>
        <div className={styles["obat2"]}></div>
        <div className={styles["kotak"]}></div>

        <div className={styles["header-1"]}>
          <h1 className={styles["head-1"]}>MEDIGRID</h1>
          <h2 className={styles["head-2"]}>
              ELECTRONIC{" "}
            <span className={styles["highlight-text"]}>
              {" "}
              MEDICAL RECORD
            </span>
          </h2>

          <p className={styles["lorem"]} >
            MediGrid adalah sebuah aplikasi digital berbasis web yang dirancang untuk membantu klinik dan fasilitas kesehatan dalam mengelola operasional secara lebih efisien dan modern. MediGrid hadir sebagai solusi inovatif untuk mendukung digitalisasi layanan kesehatan di Indonesia.
          </p>
          <Link href="" className={styles["button"]}>
            Coba Sekarang <span className={styles["arrow"]}>→</span>
          </Link>
        </div>
        <div className={styles["Logo-kementrian"]}>
          <h3>Terintegrasi SATUSEHAT, BPJS, PSE Kominfo</h3>
          <div className={styles["logo-kemen"]}>
            <div className={styles["satusehat"]}>
              <Image
                src="/img/satusehat.png"
                alt="Logo"
                width={140}
                height={100}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              />
            </div>
            <div className={styles["bpjs"]}>
              <Image 
              src="/img/bpjs.png" 
              alt="Logo" 
              width={140} 
              height={100} 
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              />
            </div>
            <div className={styles["pse"]}>
              <Image 
              src="/img/pse.png" 
              alt="Logo"
              width={140} 
              height={100} 
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              />
            </div>
          </div>
        </div>
      </section>
   
      <section className={styles["berita"]}>
        <header className={styles["news-head"]}>
          <div className={styles['imag']}>
        <Image src='/img/vector1.png' 
        alt="logo"
        width={100}
        height={100}></Image>
        </div>
          <div className={styles["hiasan"]}></div>
          <div className={styles["news-header"]}>
            <div className={styles["sub-nama"]}>
              <p className={styles["beri"]} data-aos="fade-up-right">
                <span className={styles["bulat"]}></span>
                Berita
                <span className={styles["bulat"]}></span>
              </p>
              <h2 data-aos="fade-up-right">Info Terkini</h2>
              <article className={styles["ocehan"]}>
                <p data-aos="fade-up-right">
                Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi layanan dan fasilitas kesehatan terkini yang kami sediakan untuk Anda
                </p>
              </article>
            </div>
          </div>
        </header>
        <div className={styles["card-berita"]}>
          <div className={styles["card-group"]}>
            <div 
              className={styles["card1"]}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Image
                src="/img/kopi.jpg"
                alt="Logo"
                width={400}
                height={100}
                className={styles['image']}
              />
              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>          
      
                <h5 className={styles['card-title']}>Manfaat Kopi Untuk Kesehatan</h5>
                <p className={styles["card-text"]}>
                Kopi adalah salah satu minuman paling diminati banyak orang, dan memiliki banyak khasiat...
                </p>
              <Link href="" className={styles['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
              </div>
              <div className={styles["card-footer"]}>
                <small className={styles["text-muted"]}>
                  Last updated 3 mins ago
                </small>
              </div>
            </div>

            <div
              className={styles["card1"]} 
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
             >
              <Image 
              src="/img/th (1).jpg"
               alt="Logo" 
               width={400} 
               height={100} 
               />

              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>
                <h5 className={styles['card-title']}>Bahaya Begadang</h5>
                <p className={styles["card-text"]}>
                Banyak orang yang memilki hobi begadang tanpa mengetahui resikonya..
                </p>
              <Link href="" className={styles['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
              </div>
              <div className={styles["card-footer"]}>
                <small className={styles["text-muted"]}>
                  Last updated 5 mins ago
                </small>
              </div>
            </div>
            <div className={styles["card1"]} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <Image 
              src="/img/th.jpg"
              alt="Logo"
              width={400}
              height={100}
      
              />
              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>
                <h5 className={styles['card-title']}>Kenali Kanker, Penyebab,Gejala, dan Cara Mencegah</h5>
                <p className={styles["card-text"]}>
                Kanker adalah penyakit yang disebabkan oleh sel-sel abnormal yang membelah tak terkendali....
                </p>
              <Link href="" className={styles['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
              </div>
              <div className={styles["card-footer"]}>
                <small className={styles["text-muted"]}>
                  Last updated 10 mins ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["testimoni"]}>
        <header className={styles["header-testi"]}>
          <h2>Cerita dan Testimoni dari user</h2>
        </header>
        <div className={styles["testi"]}>
          <div className={styles["back"]}>
            <div className={styles["gambar"]} data-aos="zoom-in-down">
              <Image
                src="/img/bulat.png"
                alt="Logo"
                width={150}
                height={100}
              ></Image>
            </div>
            <div className={styles["testimoni-wrapper"]}>
              <div className={styles["testi-card1"]} data-aos="zoom-in">
                <div className={styles["image"]}>
                  <Image
                    src="/img/bpjs.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div className={styles["testi-text"]}>
                  <h4>alkawiyu</h4>
                  <p>
                    "Medigrid sangat berperan penting dalam menyelesaikan
                    permasalahan yang ada pada klinik kami”
                  </p>
                </div>
              </div>
              <div className={styles["testi-card2"]} data-aos="zoom-in">
                <div className={styles["image"]}>
                  <Image
                    src="/img/satusehat.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div className={styles["testi-text"]}>
                  <h4>Muhammad yusa</h4>
                  <p>MediGrid sangat membantu kami dalam hal kesehatan”</p>
                </div>
              </div>

              <div className={styles["testi-card3"]} data-aos="zoom-in">
                <div className={styles["image"]}>
                  <Image
                    src="/img/pse.png"
                    alt="Logo"
                    width={100}
                    height={100}
                  ></Image>
                </div>
                <div className={styles["testi-text"]}>
                  <h4>andrianto</h4>
                  <p>MediGrid sangat bermanfaat!”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </>
    
  );
}