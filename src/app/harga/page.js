import Link from "next/link";
import Image from "next/image";
import styles from "../styles/harga.module.css";


const Harga = () => {
    return (
        <>
        <nav className={styles["first-nav"]}>
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
                  <Link href="/"><Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={styles['navigation']}>
                    <Link href="/" className={styles['hove']}>Tentang Kami</Link>
                    <Link href="/fitur" className={styles['hove']}>Fitur</Link>
                    <Link href="/harga" className={`${styles['hove']} ${styles['active']}`}>Harga</Link>
                    <Link href="" className={styles['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>
    <section className={styles['main']}>
        <div className={styles['head']}>
            <header>
                <div className={styles['header']}>
                    <h1>Harga</h1>
                    <h2><span className={styles['trans']}>Tranparasi Harga</span> untuk Aplikasi <br/><span className={styles['klinik']}>Klinik Anda</span></h2>
                    <p>MediGrid menyediakan harga yang kompetitif dan memastikan tidak akan ada biaya tersembunyi bagi pengguna. Paket yang ditawarkan mencakup fitur lengkap yang dirancang untuk meningkatkan produktivitas dan kualitas layanan kesehatan dari klinik Anda.</p>
                </div>
            </header>
           <div className={styles['list-harga']}>
            <div className={styles['card1']}>
                <div className={styles['list']}>
                    <div className={styles['bulan']}>
                        <h3>Bulanan</h3>
                        <p><strong>Rp <span>500.000</span></strong>/bln</p>
                    </div>
                    <div className={styles['garis1']}></div>
                    <div className={styles['bulan2']}>
                        <h3>Atau setara dengan</h3>
                        <p><strong>Rp <span>6.000.000</span></strong>/bln</p>
                    </div>
                    <button className={styles['btn']}>Berlangganan Sekarang</button>
                </div>
            </div>
                <div className={styles['card2']}>
                    <div className={styles['list']}>
                        <div className={styles['tahun']}>
                            <h3>Tahunan</h3>
                            <p><strong>Rp <span>250.000</span></strong>/bln</p>
                        </div>
                        <div className={styles['garis2']}></div>
                        <div className={styles['tahun2']}>
                            <h3>Atau setara dengan</h3>
                            <p><strong>Rp <span>3.000.000</span></strong>/bln</p>
                        </div>
                         <button className={styles['btn']}>Berlangganan Sekarang</button>
                        </div>
                    </div>
                </div>
                <div className={styles['fitur']}>
                    <div className={styles['judul']}>
                        <h1>Fitur</h1>
                    </div>
                    <div className={styles['fitur-content']}>

                    </div>
                </div>
                <div className={styles['fitur']}>
                    <div className={styles['judul']}>
                        <h1>Fitur</h1>
                    </div>
                    <div className={styles['fitur-content']}>

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
                            <div className={`${styles['info-section']} ${styles['lainnya']}`}>
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

export default Harga;