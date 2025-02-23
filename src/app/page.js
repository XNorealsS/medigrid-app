import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles["first-nav"]}>
        <div className={styles["bahasa-faq"]}>
          <p>
            IND <span></span>
          </p>
          <Link href="">FAQ</Link>
        </div>
        <div className={styles["contact1"]}>
          <Link href="">Contact Us</Link>
        </div>
      </nav>
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
              <Link href="/fitur" className={styles["hove"]}>
                Fitur & Layanan
              </Link>
              <Link href="/harga" className={styles["hove"]}>
                Harga
              </Link>
              <Link href="/blog" className={styles["hove"]}>
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </section>
   
    {/* MAIN Page */}

      <section className={styles["main"]}>
        <div className={styles["obat"]}></div>
        <div className={styles["obat2"]}></div>
        <div className={styles["kotak"]}></div>

        <div className={styles["header-1"]}>
          <h1 className={styles["head-1"]}>MEDIGRID</h1>
          <h1 className={styles["head-2"]}>
              ELECTRONIC{" "}
            <span className={styles["highlight-text"]}>
              {" "}
              MEDICAL RECORD
            </span>
          </h1>

          <p className={styles["lorem"]}>
            MediGrid adalah sebuah aplikasi digital berbasis web yang dirancang untuk membantu klinik dan fasilitas kesehatan dalam mengelola operasional secara lebih efisien dan modern. MediGrid hadir sebagai solusi inovatif untuk mendukung digitalisasi layanan kesehatan di Indonesia.
          </p>
          <Link href="" className={styles["button"]}>
            Coba Sekarang <span className={styles["arrow"]}>→</span>
          </Link>
        </div>
        <div className={styles["Logo-kementrian"]}>
          <h2>Terintegrasi SATUSEHAT, BPJS, PSE Kominfo</h2>
          <div className={styles["logo-kemen"]}>
            <div className={styles["satusehat"]}>
              <Image
                src="/img/satusehat.png"
                alt="Logo"
                width={140}
                height={100}
              />
            </div>
            <div className={styles["bpjs"]}>
              <Image src="/img/bpjs.png" alt="Logo" width={140} height={100} />
            </div>
            <div className={styles["pse"]}>
              <Image src="/img/pse.png" alt="Logo" width={140} height={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Berita */}

      <section className={styles["berita"]}>
        <header className={styles["news-head"]}>
          <div className={styles['imag']}>
        <Image src='/img/vector1.png' 
        alt="logo"
        width={100} height={100}></Image>
        </div>
          <div className={styles["hiasan"]}></div>
          <div className={styles["news-header"]}>
            <div className={styles["sub-nama"]}>
              <p className={styles["beri"]}>
                <span className={styles["bulat"]}></span>Berita
                <span className={styles["bulat"]}></span>
              </p>
              <h2>Info Terkini</h2>
              <article className={styles["ocehan"]}>
                <p>
                  t Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda reprehenderiat deleniti, rem eaque eligendi fugit
                  quaerat dignissimos ipsum ducimus facere voluptates laborum,
                  repudiandae dicta expedita, labore libero consequuntur harum.
                </p>
              </article>
            </div>
    
          </div>
        </header>
        <div className={styles["card-berita"]}>
          <div className={styles["card-group"]}>
            <div className={styles["card1"]}>
              <Image
                src="/img/kopi.jpg"
                alt="Logo"
                width={400}
                height={100}
              />
              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>
                <h5 className={styles["card-title"]}>Manfaat Kopi Untuk Kesehatan</h5>
                <p className={styles["card-text"]}>
                  Kopi adalah salah satu minuman paling diminati banyak orang, dan memiliki banyak khasiat... 
                </p>
              </div>
              <div className={styles["card-footer"]}>
                <small className={styles["text-muted"]}>
                  Last updated 3 mins ago
                </small>
              </div>
            </div>

            <div className={styles["card1"]}>
              <Image src="/img/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg" alt="Logo" width={400} height={100} />

              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>
                <h5 className={styles["card-title"]}>Bahaya Banyak Makan-makanan Junkfood</h5>
                <p className={styles["card-text"]}>
                   Junkfood atau lebih sering dikenal sebagai makananan cepat saji, adalah makanan yang memilki cita rasa gurih...
                </p>
              </div>
              <div className={styles["card-footer"]}>
                <small className={styles["text-muted"]}>
                  Last updated 5 mins ago
                </small>
              </div>
            </div>
            <div className={styles["card1"]}>
              <Image src="/img/allergic-rhinitis-symptom-of-odor-pollen-flowering-portrait-asian-young-woman-hand-in-sneeze-blowing-runny-nose-after-smell-smelly-from-bloom-flower-holding-away-pink-flora-on-white-background-free-photo.jpg" alt="Logo" width={400} height={100} />
              <div className={styles["card-body"]}>
                <h6>
                  <span>indodev</span>
                  <span>November 13, 2025</span>
                </h6>
                <h5 className={styles["card-title"]}>Rhintis Penyebab Dan Cara Mengobati</h5>
                <p className={styles["card-text"]}>
                   Rhinitis adalah kondisi peradangan pada selaput lendir hidung yang menyebabkan penyumbatan pada hidung dan tenggorokkan....
                </p>
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
            <div className={styles["gambar"]}>
              <Image
                src="/img/bulat.png"
                alt="Logo"
                width={150}
                height={100}
              ></Image>
            </div>
            <div className={styles["testimoni-wrapper"]}>
              <div className={styles["testi-card1"]}>
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
              <div className={styles["testi-card2"]}>
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

              <div className={styles["testi-card3"]}>
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