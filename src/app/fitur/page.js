"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import stylesf from '../styles/fitur.module.css';
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqTab from "../components/FaqTab";


const fitur = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [showFAQ, setShowFAQ] = useState(false);


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
       <nav className={stylesf['first-nav']}>
            <div className={stylesf['bahasa-faq']}>
                <p>IND <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#dc1f26" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4"/><path fill="#eee" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36z"/></svg></span></p>
                <button onClick={() => setShowFAQ(true)}>
                 FAQ <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26"><path fill="currentColor" d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2s1.218-.9 1.218-2s-.418-2-1.218-2"/></svg></span>
                </button>
            </div>
            <div className={stylesf['contact1']}>
                <Link href="">Contact Us</Link>
            </div>
        </nav>
        
        {showFAQ && <FaqTab onClose={() => setShowFAQ(false)} />}

        <nav className={stylesf['mobileNav']}>
        <div className={stylesf['hamburger']} onClick={() => setMenuOpen(true)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className={stylesf['logo-kecil']}>
          <Link href="/">
            <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
          </Link>
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`${stylesf['sideMenu']} ${menuOpen ? stylesf['open'] : ""}`}>
        <div className={stylesf['closeBtn']} onClick={() => setMenuOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6l-12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <ul className={stylesf['navList']}>
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

  <section className={stylesf['container']}>
        <nav className={stylesf['second-nav']}>
            <div className={stylesf['navbar']}>
                <div className={stylesf['logo-medi']}>
                  <Link href="/"><Image  src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={stylesf['navigation']}>
                    <Link href="/" className={stylesf['hove']}>Tentang Kami</Link>
                    <Link href="/fitur" className={`${stylesf['hove']} ${stylesf['active']}`}>Fitur & Layanan</Link>
                    <Link href="/harga" className={stylesf['hove']}>Harga</Link>
                    <Link href="/blog" className={stylesf['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>


    <section className="main">
            <div className={stylesf["obat"]}></div>
            <div className={stylesf["obat2"]}></div>
        <div className={stylesf['content']}>
            <aside className={stylesf['side']}>
                <header className={stylesf['header']}>
                    <h1>Fitur</h1>
                    <h2>PERMUDAHKAN DIRI ANDA DENGAN MENCOBA FITUR SEKARANG</h2>
                </header>
                <div className={stylesf['teks']}>
                    <p>Gunakan teknologi Rekam Medis Elektronik (EMR) terbaik 
                    untuk mengoptimalkan operasional klinik dan memberikan perawatan
                    berkualitas tinggi, sehingga meningkatkan 
                    kepuasan pasien.</p>
                </div>
                <div className={stylesf['btn']}>
                    <Link href='' className={stylesf['button']}>Coba Sekarang</Link>
                </div>
            </aside>
        </div>
    </section>

    <section className={stylesf['layanan']}>
        <div className={stylesf['layan']}>
            <header className={stylesf['header-layan']}>
                <h1 data-aos="fade-down">Layanan Yang Di Dapat</h1>
            </header>
            <div className={stylesf['layanan-isi']}>
                <div className={stylesf['layanan-1']}  data-aos="zoom-in-down">
                    <div className={stylesf['logo']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"/></svg>
                    </div>
                    <h2>Executive Dashboard</h2>
                    <p>Lengkap untuk memonitor bisnis dan pasien secara real time sebesar apa pun klinik anda</p>
                </div>
                <div className={stylesf['layanan-1']}  data-aos="zoom-in-down">
                <div className={stylesf['logo']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 56 56"><path fill="currentColor" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508H30.742c-3 0-4.406-1.43-4.406-4.43V2.875H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m15.258-31.828h16.64c-.164-.961-.844-1.899-1.945-3.047L32.57 5.102c-1.078-1.125-2.062-1.805-3.047-1.97v16.9c0 .843.446 1.265 1.29 1.265m-11.836 13.36c-.961 0-1.641-.68-1.641-1.594c0-.915.68-1.594 1.64-1.594h18.07c.938 0 1.665.68 1.665 1.593c0 .915-.727 1.594-1.664 1.594Zm0 8.929c-.961 0-1.641-.68-1.641-1.594s.68-1.594 1.64-1.594h18.07c.938 0 1.665.68 1.665 1.594s-.727 1.594-1.664 1.594Z"/></svg>
                    </div>
                    <h2>Rekam Medis Elektronik</h2>
                    <p>Sesuai standar <b>Kementrian Kesehatan RI</b> (Permenkes NO.24/2022 tentang Rekam Medis Elektronik).</p>
                </div>
                <div className={stylesf['layanan-1']}  data-aos="zoom-in-down">
                <div className={stylesf['logo']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h5M12 21h-5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21v-4"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"/></path><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-9v-12h18v12Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"/></path></g></svg>
                    </div>
                    <h2>Terintegrasi Penuh</h2>
                    <p>Sistem aplikasi <b>PCare & ICare BPJS</b> dan platform <b>SATUSEHAT</b> (Satu Data Kesehatan) Kementrian Kesehatan RI.</p>
                </div>
                <div className={stylesf['layanan-1']}  data-aos="zoom-in-down">
                <div className={stylesf['logo']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.25 4.8c0-1.373 1.07-2.55 2.464-2.55h8.572c1.395 0 2.464 1.177 2.464 2.55v14.4c0 1.373-1.07 2.55-2.464 2.55H7.714c-1.395 0-2.464-1.177-2.464-2.55zm5.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"/></svg>
                    </div>
                    <h2>Klinisia Mobile App</h2>
                    <p>Membantu pasien klinik menjangkau pelayanan dari jauh, kapan pun dan di mana pun.</p>
                </div>
                <div className={stylesf['layanan-1']} data-aos="flip-down">
                <div className={stylesf['logo']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17.03 14.758a1 1 0 0 1 1.962.37l-.022.115L18.28 18H19v-1a1 1 0 0 1 1.993-.116L21 17v1a1 1 0 0 1 .117 1.993L21 20v1a1 1 0 0 1-1.993.117L19 21v-1h-2a1 1 0 0 1-.993-1.113l.023-.13zM13.5 14a2.5 2.5 0 0 1 2.5 2.5v.325c0 .675-.241 1.327-.68 1.839L14.174 20H15a1 1 0 0 1 0 2h-3a1 1 0 0 1-.76-1.65l2.561-2.988a.83.83 0 0 0 .199-.537V16.5a.5.5 0 1 0-1 0a1 1 0 1 1-2 0a2.5 2.5 0 0 1 2.5-2.5M12 3a9 9 0 0 1 8.796 10.913a3 3 0 0 0-2.068-1.823a3 3 0 0 0-2.724.67A4.5 4.5 0 0 0 9 16.5c0 .886.384 1.682.994 2.23l-.272.318a3 3 0 0 0-.68 1.455A9 9 0 0 1 12 3m-1 3a1 1 0 0 0-1 1v3H9a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"/></g></svg>
                    </div>
                    <h2>24/7 Customer Service</h2>
                    <p>Sistem penanganan keluhan pelanggan yang transparan dan mudah ditelusuri.</p>
                </div>
                <div className={stylesf['layanan-1']} data-aos="flip-down">
                <div className={stylesf['logo']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 100 100"><path fill="currentColor" d="M37.328 0c-6.874 0-12.5 5.626-12.5 12.5S30.454 25 37.328 25c1.316 0 2.586-.208 3.78-.59l6.576 13.977c-8.125 5.119-12.366 15.123-9.754 24.87a22.4 22.4 0 0 0 1.959 4.901l-17.75 11.404l-.002-.001C19.839 76.78 16.367 75 12.5 75C5.626 75 0 80.626 0 87.5S5.626 100 12.5 100S25 94.374 25 87.5c0-1.577-.308-3.084-.848-4.477L42.104 71.49c5.418 6.747 14.504 10.055 23.382 7.676c11.98-3.21 19.12-15.577 15.91-27.557a22.35 22.35 0 0 0-5.525-9.77l9.877-12.808A9.9 9.9 0 0 0 90 30c5.493 0 10-4.507 10-10s-4.507-10-10-10s-10 4.507-10 10c0 2.539.97 4.859 2.549 6.629l-9.707 12.586c-5.3-3.826-12.213-5.335-19.002-3.516c-.892.24-1.754.535-2.59.871l-6.58-13.986c3.116-2.28 5.158-5.95 5.158-10.084c0-6.874-5.626-12.5-12.5-12.5m0 5c4.172 0 7.5 3.328 7.5 7.5S41.5 20 37.328 20a7.46 7.46 0 0 1-7.5-7.5c0-4.172 3.328-7.5 7.5-7.5M90 15c2.791 0 5 2.209 5 5s-2.209 5-5 5s-5-2.209-5-5s2.209-5 5-5M60.453 37.445c8.504.337 16.175 6.124 18.514 14.762l.015.05l.012.06C81.813 62.96 75.483 73.9 64.84 76.751c-10.663 2.857-21.637-3.478-24.494-14.14s3.48-21.64 14.142-24.497a20 20 0 0 1 5.965-.67m-.445 1.192q-.94-.017-1.89.064c.36.039.614.15.136.344l-.432-.027c-.383-.102-.504-.181-.482-.237c-.846.107-1.695.268-2.541.494l-.135.04a11 11 0 0 1 1.125-.145c.254.845.87 2.384-.809 2.773c-1.348.444-1.813 3.902-3.185 1.864c-.219-1.176 1.14-4.026-1.027-2.541c-.313.872.186 2.203-.801 2.295c-.011 1.301-1.148.832-1.477.357c-.382.387.59.858.18 1.357c1.204-1.38.452 1.204 1.445 1.551c-.595.985 1.367 2.57-.459 2.526c-1.625.169.684-2.294-1.006-.961c-1.127.59-.88 1.259.067 1.199c-.603.972-1.618 1.288-2.188 1.076a16.8 16.8 0 0 0-2.629 3.791c-1.461.466-.323 3.376-1.117 3.262c-.324-.898-.408-2.466-1.295-1.998c-.259-.015-.447.146-.58.406q-.1 1.436.026 2.898c.058.137.125.25.199.325c.862-1.893.385 1.095.834 1.533c1.051.936.358 3.297 2.23 3.215c.301-1.381 1.178-.438 1.278-.621c.548-.256 1.34 1.056 2.322.587c1.163-.446 1.2 2.066 2.902 1.89c2.149.043 2.66 2.77 4.944 2.513c1.501.412 5.228-.23 4.648 2.164c-1.513 1.156.407 3.961-2.26 4.027c-.509.307-.598.928-.908 1.41c2.405.328 4.913.194 7.406-.474a18.74 18.74 0 0 0 11.362-8.664c.102-1.139-.007-2.348.47-3.407c.035-1.684-1.864-2.37-1.334-4.062c-.77.309-2.436-.264-2.97 1.268c-1.004.283-1.669 1.7-2.766 1.347c-1.441-.405-3.099-.885-3.855-2.299c-.164-1.216-.93-2.626-1.11-3.746c.051-2.035 1.246-3.57 1.057-5.517c.098-.147.956-1.285.992-1.332c1.23-.697 2.459-3.301 3.818-1.385c.322.123 2.366.547 2.012-.125c-.256-1.13 2.89-1.323.967-2.375c-.184-.051-.835-.065-1.205.154c-.154.083-.652 1.057-1.54.166C69.266 45 71 47.953 69.31 46.64c1.17-.771-2.145-1.483-1.225-.8c1.466 1.443-.714.823-.69-.448c-1.678.236-.073 3.077-1.472 3.955c.01-.001.02-.007.031-.008l-.256.105l-.4.149c-.479-.283-1.588-.038-1.56-1.235c-1.013-1.012-.45-1.652.804-1.867c1.023-1.12-3.033-1.05-.701-2.117c-1.05.355-1.487.516-1.979-.766c.61 1.59-1.778 1.137-.906-.14c.354-.406-1.229-.618-.086-1.14c.79-.258 3.238 2.567 3.006.542c.497-.32-.835-1.08-.598-1.203c-1.297.832-2.377-1.546-2.638-2.475a5.5 5.5 0 0 0 1.234-.427a19 19 0 0 0-1.865-.127m2.662 1.134a.4.4 0 0 0-.137.008c-.18.064.546.386.137-.008m.057.563c-.325.056 1.485.72.625.082c-.362-.075-.55-.095-.625-.082m1.533.531c-.16.044-.1.208.494.504c.313.606.062 1.005.625.233c.015-.545-.854-.809-1.12-.737m-6.838.653c.623.011 1.087.292-.11.777c-.268.07-.574.103-.828-.037c-.241-.338-.025-.553.317-.66c.188-.06.413-.084.62-.08m3.53.23c.078 0 .505.494.081.211c-.095-.156-.108-.211-.082-.211m-1.243.033c.08-.064.384.403-.01.145c-.016-.087-.009-.13.01-.145m9.967.787c-.286.114 1.193 1.843 1.178.88c1.15-.507-.507-1.16-.657-.647c-.294-.199-.455-.259-.521-.233m-20.701.342q-.03-.016-.084.004c-.1.04-.266.181-.508.477c-.333.262-.817 1.457-.133.486c.552-.251.856-.89.725-.967m-1.936 1.258c-.16.03-.37.162-.643.437c-1.029.372-.465 2.705-.472 2.557c.256-.291.362-1.001.775-1.072c.732-.28 1.03-2.055.34-1.922m20.895.426a.1.1 0 0 0-.04.01c-.055.034.126.15.731.392c.166-.102 1.28.49.947.08c-.43-.246-1.412-.504-1.638-.482m2.8.183c-.088.07.549.602.387.139c-.247-.133-.357-.162-.387-.139m1.395 1.024c.239.059.475.564-.242.431c-.007-.269.058-.39.142-.425a.16.16 0 0 1 .1-.006m-5.125.935c.23-.102.383 1.042-.23.621c.068-.415.153-.587.23-.62M47.656 48.32c-.143.037.08.34.28.084c-.144-.077-.232-.096-.28-.084m-3.709.506c-.234.034.244 1.019.29.162c-.145-.127-.236-.17-.29-.162m.283.951c-.165.087.018 1.193.094.036c-.04-.04-.07-.048-.094-.036m13.967.887c.29-.05.36.421-.342.268c.125-.176.246-.251.342-.268m.93.063c.127.012.01.487-.213.187c.1-.144.17-.192.213-.187m-15.045.27c-.201.012-.4.762.13.134c-.037-.102-.084-.138-.13-.135m18.691.868c.112.055.136.474-.164.186c.038-.11.077-.165.112-.184a.06.06 0 0 1 .052-.002m1.565 1.096c.175-.047.505.624-.047.639c-.08-.448-.033-.618.047-.639m-.805.639c.435-.005.782.155-.07.414l-.385.103l-.076-.013c-.234-.226-.114-.368.11-.442c.122-.04.276-.06.421-.062m-20.15 3.627c.105-.03.552.697.054.35c-.088-.247-.09-.34-.054-.35m-.04.693c.112-.01.33 1.015-.048.453c-.013-.33.012-.45.049-.453m-.991.615c.11-.017.27-.018.494.002c.669.97 1.804 1.039 1.636 1.59c.83.098 2.305 1.227.366 1.064c-1.302-.158.167-1.007-1.323-1.01c-.21-.569-1.944-1.522-1.173-1.646m1.623.22c.082 0 .26.178.257.454l-.103-.033c-.186-.245-.217-.371-.184-.408a.04.04 0 0 1 .03-.012m18.841.643c.192-.054.277.548-.144.163c.05-.103.1-.15.144-.163m-1.101.04c.218-.034 1.007.223.256.273c-.335-.183-.355-.258-.256-.273m1.154.5c.168.035.06.5-.34.248c.103-.133.187-.204.252-.233a.14.14 0 0 1 .088-.015m-.568.222c.111-.017.19.526-.11.256c.032-.181.072-.25.11-.256m-19.016.324c.236-.013 1.076.532.264.473c-.354-.346-.371-.467-.264-.473m31.272.25c.111-.017.188.524-.112.254c.032-.181.074-.248.112-.254m-28.32.147c.277.049.615.533-.212.428c-.046-.262.01-.382.1-.418a.2.2 0 0 1 .111-.01m-5.01.217c.08.401.167.804.275 1.205a18.73 18.73 0 0 0 8.492 11.256c-1.383-1.243-3.108-2.08-4.209-3.637c-1.8-1.355-1.204-3.488-1.951-5.203c-.332-.925-.16.65-.797-.467c-.741-.853-1.254-2.107-1.81-3.154m6.632.838c.125.014.684 1.689.166.964l-.091-.275c-.111-.515-.116-.694-.075-.69M12.5 80c4.172 0 7.5 3.328 7.5 7.5S16.672 95 12.5 95A7.46 7.46 0 0 1 5 87.5c0-4.172 3.328-7.5 7.5-7.5" color="currentColor"/></svg>
                    </div>
                    <h2>Jejaring Luas</h2> 
                    <p>Terkoneksi dengan Sistem Informasi Puskesmas dan Dinas Kesehatan, laporan terkait bisa selesai lebih mudah.</p>
                </div>

            </div>
        </div>

    </section>

    <Footer></Footer>
</>
    )
}
export default fitur