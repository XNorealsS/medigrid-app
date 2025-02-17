
import Image from "next/image";
import Link from "next/link";
import styles from './styles/home.module.css'

export default function Home() {
  return(
    <>
        <nav className={styles['first-nav']}>
            <div className={styles['bahasa-faq']}>
                <p>IND <span></span></p>
                <Link href="">FAQ</Link>
            </div>
            <div className={styles['contact1']}>
                <Link href="">Contact Us</Link>
            </div>
        </nav>
  <section className={styles['container']}>
        <nav className={styles['second-nav']}>
            <div className={styles['navbar']}>
                <div className={styles['logo']}>
                  <Link href="/"><Image  src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={styles['navigation']}>
                    <Link href="/" className={`${styles['hove']} ${styles['active']}`}>Tentang Kami</Link>
                    <Link href="/fitur" className={styles['hove']}>Fitur</Link>
                    <Link href="/harga" className={styles['hove']}>Harga</Link>
                    <Link href="" className={styles['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>
    
    <section className={styles['main']}>
    <div className={styles['obat']}></div>
    <div className={styles['obat2']}></div>
    <div className={styles['kotak']}></div>

    <div className={styles['header-1']}>
          <h1 className={styles['head-1']}>HIDUP ITU GAMPANG</h1>
          <h1 className={styles['head-2']}>PAKAI KLINIK INI <span className={styles['highlight-text']}> SAJA BIAR MAKIN GAMPANG</span></h1>
          
        <p className={styles['lorem']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo nobis nihil doloribus quasi aspernatur omnis, mollitia ex autem! Ab, odit! Ipsam consequuntur nemo eaque, et illum atque aut neque.</p>
        <Link href=""className={styles['button']} >Coba Sekarang <span className={styles['arrow']}>→</span></Link>
       
    </div>
    <div className={styles['Logo-kementrian']}>
        <h2>Terintegrasi SATUSEHAT, BPJS, PSE Kominfo</h2>
        <div className={styles['logo-kemen']}>
             <div className={styles['satusehat']}>
             <Image src="/img/satusehat.png" alt="Logo" width={140} height={100} />
             </div>
             <div className={styles['bpjs']}>
             <Image src="/img/bpjs.png" alt="Logo" width={140} height={100} />
             </div>
             <div className={styles['pse']}>
             <Image src="/img/pse.png" alt="Logo" width={140} height={100} />
             </div>
        </div>
    </div>
</section>
<section className={styles['berita']}>
        <header className={styles['news-head']}>
            <div className={styles['hiasan']}>

            </div>
            <div className={styles['news-header']}>
                <div className={styles['sub-nama']}>
                    <p className={styles['beri']}><span className={styles['bulat']}></span>Berita<span className={styles['bulat']}></span></p>
                    <h2>Info Terkini</h2>
                    <article className={styles['ocehan']}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit at deleniti, rem eaque eligendi fugit quaerat dignissimos ipsum ducimus facere voluptates laborum, repudiandae dicta expedita, labore libero consequuntur harum.</p>
                    </article>
                </div>
                <div className={styles['all-news']}>
                    <Link href="">All News</Link>
                </div>
            </div>
        </header>

        <div className={styles['card-berita']}>
            <div className={styles['card-group']}>
                <div className={styles['card']}>
             <Image src="/img/satusehat.png" alt="Logo" width={400} height={100} />
                    <div className={styles['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={styles['card-title']}>Card Title 1</h5>
                        <p className={styles['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={styles['card-footer']}>
                        <small className={styles['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>

                <div className={styles['card']}>
             <Image src="/img/bpjs.png" alt="Logo" width={400} height={100} />
                  
                    <div className={styles['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={styles['card-title']}>Card Title 2</h5>
                        <p className={styles['card-text']}>This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className={styles['card-footer']}>
                        <small className={styles['text-muted']}>Last updated 5 mins ago</small>
                    </div>
                </div>
                <div className={styles['card']}>
             <Image src="/img/pse.png" alt="Logo" width={400} height={100} />
                    <div className={styles['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={styles['card-title']}>Card Title 3</h5>
                        <p className={styles['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className={styles['card-footer']}>
                        <small className={styles['text-muted']}>Last updated 10 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className={styles['testimoni']}>
        <header className={styles['header-testi']}>
        <h2>Cerita dan Testimoni dari user</h2>
        </header>
        <div className={styles['testi']}>
            <div className={styles['back']}>
                <div className={styles['gambar']}>
                    <Image src="/img/bulat.png" alt="Logo" width={150} height={100}></Image>
                </div>
                <div className={styles['testimoni-wrapper']}>

                    <div className={styles['testi-card1']}>
                      <div className={styles['image']}>
                    <Image src="/img/bpjs.png" alt="Logo" width={100} height={100}></Image>
                       
                      </div>
                      <div className={styles['testi-text']}>
                        <h4>alkawiyu</h4>
                        <p>
                          “MedicIni sangat berperan penting dalam menyelesaikan permasalahan 
                          yang ada pada klinik kami”
                        </p>
                      </div>
                    </div>
                    <div className={styles['testi-card2']}>
                      <div className={styles['image']}>
                    <Image src="/img/satusehat.png" alt="Logo" width={100} height={100}></Image>
                        
                      </div>
                      <div className={styles['testi-text']}>
                        <h4>Muhammad yusa</h4>
                        <p>
                          “MedicIni sangat membantu kami dalam hal kesehatan”
                        </p>
                      </div>
                    </div>
              
                    <div className={styles['testi-card3']}>
                      <div className={styles['image']}>
                    <Image src="/img/pse.png" alt="Logo" width={100} height={100}></Image>
                      </div>
                      <div className={styles['testi-text']}>
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
    

    <footer className={styles['footer-body']}>
        <div className={styles['footer-body2']}>
            <div className={styles['alamat-logo']}>
                <div className={styles['image-logo']}>
                    <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ducimus quis, dolorem nulla pariatur excepturi eum, nesciu</p>
                </div>
                <div className={styles['media-sosial']}>
                    <div className={styles['header-medsos']}>
                        <h3>Media Sosial</h3>
                    </div>
                    <div className={styles['medlog']}>
                        <div className={styles['medsos-logo']}>
                            <Link href=""><i className='bx bxl-instagram' ></i></Link>
                        </div>
                        <div className={styles['medsos-logo']}>
                            <Link href="" ><i className='bx bxl-facebook' ></i></Link>
                        </div>
                        <div className={styles['medsos-logo']}>
                            <Link href="" ><i className='bx bxl-twitter' ></i></Link>
                        </div>
                        <div className={styles['medsos-logo']}>
                            <Link href=""><i className='bx bxl-youtube' ></i></Link>
                        </div>
                    </div>
                </div>
                <div className={styles['hubungi-kami']}>
                    <div className={styles['hubungi']}>
                        <h3>Hubungi Kami</h3>
                    </div>
                    <div className={styles['kami']}>
                        <Link href=""><i className='bx bxs-phone'></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bxl-whatsapp' ></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bx-envelope' ></i>Hubungi Kami</Link>
                    </div>
                        </div>
                    </div>
                    <div className={styles['info-layan-bis-lain']}>
                        <div className={styles['top-sections']}>
                            <div className={styles['info-section']}>
                                <header className={styles['head-info']}>
                                    <h3>Informasi Perusahaan</h3>
                                </header>
                                <div className={styles['list-info']}>
                                    <ul className={styles['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles['info-section']}>
                                <header className={styles['head-info']}>
                                    <h3>Produk & Layanan</h3>
                                </header>
                                <div className={styles['list-info']}>
                                    <ul className={styles['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles['info-section']}>
                                <header className={styles['head-info']}>
                                    <h3>Bisnis & Pembaruan</h3>
                                </header>
                                <div className={styles['list-info']}>
                                    <ul className={styles['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles['bottom-section']}>
                            <div className={styles['info-section lainnya']}>
                                <header className={styles['head-info']}>
                                    <h3>Lainnya</h3>
                                </header>
                                <div className={styles['list-info']}>
                                    <ul className={styles['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['menu-footer']}>
                        <div className={styles['list-menu']}>
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

