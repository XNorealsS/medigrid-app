
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <>
  <section className="container">
        <nav className="first-nav">
            <div className="bahasa-faq">
                <p>IND <span></span></p>
                <Link href="">FAQ</Link>
            </div>
            <div className="contact1">
                <Link href="">Contact Us</Link>
            </div>
        </nav>
        <nav className="second-nav">
            <div className="navbar">
                <div className="logo">
                  <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
                </div>
                <div className="navigation">
                    <Link href="">Tentang Kami</Link>
                    <Link href="">Fitur</Link>
                    <Link href="">Harga</Link>
                    <Link href="">Blog</Link>
                    <Link href="">kk</Link>
                </div>
            </div>
        </nav>
    </section>
    
    <section className="main">
    <div className="obat"></div>
    <div className="obat2"></div>
    <div className="kotak"></div>

    <div className="header-1">
          <h1 className="head-1">HIDUP ITU GAMPANG</h1>
          <h1 className="head-2">PAKAI KLINIK INI <span className="highlight-text"> SAJA BIAR MAKIN GAMPANG</span></h1>
          
        <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo nobis nihil doloribus quasi aspernatur omnis, mollitia ex autem! Ab, odit! Ipsam consequuntur nemo eaque, et illum atque aut neque.</p>
        <Link href=""className="button" >Coba Sekarang <span className="arrow">→</span></Link>
       
    </div>
    <div className="Logo-kementrian">
        <h2>Terintegrasi SATUSEHAT, BPJS, PSE Kominfo</h2>
        <div className="logo-kemen">
             <div className="satusehat">
             <Image src="/img/satusehat.png" alt="Logo" width={140} height={100} />
             </div>
             <div className="bpjs">
             <Image src="/img/bpjs.png" alt="Logo" width={140} height={100} />
             </div>
             <div className="pse">
             <Image src="/img/pse.png" alt="Logo" width={140} height={100} />
             </div>
        </div>
    </div>
</section>
<section className="berita">
        <header className="news-head">
            <div className="hiasan">

            </div>
            <div className="news-header">
                <div className="sub-nama">
                    <p className="beri"><div className="bulat"></div>Berita<div className="bulat"></div></p>
                    <h2>Info Terkini</h2>
                    <article className="ocehan">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit at deleniti, rem eaque eligendi fugit quaerat dignissimos ipsum ducimus facere voluptates laborum, repudiandae dicta expedita, labore libero consequuntur harum.</p>
                    </article>
                </div>
                <div className="all-news">
                    <Link href="">All News</Link>
                </div>
            </div>
        </header>
        <div className="card-berita">
            <div className="card-group">
                <div className="card">
             <Image src="/img/satusehat.png" alt="Logo" width={400} height={100} />
                    <div className="card-body">
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className="card-title">Card Title 1</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
             <Image src="/img/bpjs.png" alt="Logo" width={400} height={100} />
                  
                    <div className="card-body">
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className="card-title">Card Title 2</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 5 mins ago</small>
                    </div>
                </div>
                <div className="card">
             <Image src="/img/pse.png" alt="Logo" width={400} height={100} />
                    <div className="card-body">
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className="card-title">Card Title 3</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 10 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="testimoni">
        <header className="header-testi">
        <h2>Cerita dan Testimoni dari user</h2>
        </header>
        <div className="testi">
            <div className="back">
                <div className="gambar">
                    <Image src="/img/bulat.png" alt="Logo" width={150} height={100}></Image>
                </div>
                <div className="testimoni-wrapper">

                    <div className="testi-card1">
                      <div className="image">
                    <Image src="/img/bpjs.png" alt="Logo" width={100} height={100}></Image>
                       
                      </div>
                      <div className="testi-text">
                        <h4>alkawiyu</h4>
                        <p>
                          “MedicIni sangat berperan penting dalam menyelesaikan permasalahan 
                          yang ada pada klinik kami”
                        </p>
                      </div>
                    </div>
                    <div className="testi-card2">
                      <div className="image">
                    <Image src="/img/satusehat.png" alt="Logo" width={100} height={100}></Image>
                        
                      </div>
                      <div className="testi-text">
                        <h4>Muhammad yusa</h4>
                        <p>
                          “MedicIni sangat membantu kami dalam hal kesehatan”
                        </p>
                      </div>
                    </div>
              
                    <div className="testi-card3">
                      <div className="image">
                    <Image src="/img/pse.png" alt="Logo" width={100} height={100}></Image>
                      </div>
                      <div className="testi-text">
                        <h4>andrianto</h4>
                        <p>
                          “MedicIni sangat bermanfaat!”
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer-body">
        <div className="footer-body2">
            <div className="alamat-logo">
                <div className="image-logo">
                    <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ducimus quis, dolorem nulla pariatur excepturi eum, nesciu</p>
                </div>
                <div className="media-sosial">
                    <div className="header-medsos">
                        <h3>Media Sosial</h3>
                    </div>
                    <div className="medlog">
                        <div className="medsos-logo">
                            <Link href=""><i className='bx bxl-instagram' ></i></Link>
                        </div>
                        <div className="medsos-logo">
                            <Link href="" ><i className='bx bxl-facebook' ></i></Link>
                        </div>
                        <div className="medsos-logo">
                            <Link href="" ><i className='bx bxl-twitter' ></i></Link>
                        </div>
                        <div className="medsos-logo">
                            <Link href=""><i className='bx bxl-youtube' ></i></Link>
                        </div>
                    </div>
                </div>
                <div className="hubungi-kami">
                    <div className="hubungi">
                        <h3>Hubungi Kami</h3>
                    </div>
                    <div className="kami">
                        <Link href=""><i className='bx bxs-phone'></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bxl-whatsapp' ></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bx-envelope' ></i>Hubungi Kami</Link>
                    </div>
                        </div>
                    </div>
                    <div className="info-layan-bis-lain">
                        <div className="top-sections">
                            <div className="info-section">
                                <header className="head-info">
                                    <h3>Informasi Perusahaan</h3>
                                </header>
                                <div className="list-info">
                                    <ul className="list">
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info-section">
                                <header className="head-info">
                                    <h3>Produk & Layanan</h3>
                                </header>
                                <div className="list-info">
                                    <ul className="list">
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info-section">
                                <header className="head-info">
                                    <h3>Bisnis & Pembaruan</h3>
                                </header>
                                <div className="list-info">
                                    <ul className="list">
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <div className="info-section lainnya">
                                <header className="head-info">
                                    <h3>Lainnya</h3>
                                </header>
                                <div className="list-info">
                                    <ul className="list">
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-footer">
                        <div className="list-menu">
                            <Link href=""><i className='bx bx-location-plus'></i></Link>
                            <Link href=""><i className='bx bxs-phone'></i></Link>
                            <Link href=""><i className='bx bxs-contact' ></i></Link>
                            <Link href=""><i className='bx bx-message-rounded-detail'></i></Link>
                        </div>
                    </div>
            </div>
    </footer>
    </>
  )
}

