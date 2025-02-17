import Link from "next/link";
import Image from "next/image";
import stylesx from "../styles/harga.module.css";


const Harga = () => {
    return (
        <>
        <nav className={stylesx["first-nav"]}>
            <div className={stylesx['bahasa-faq']}>
                <p>IND <span></span></p>
                <Link href="">FAQ</Link>
            </div>
            <div className={stylesx['contact1']}>
                <Link href="">Contact Us</Link>
            </div>
        </nav>
    <section className={stylesx['container']}>
        <nav className={stylesx['second-nav']}>
            <div className={stylesx['navbar']}>
                <div className={stylesx['logo']}>
                  <Link href="/"><Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={stylesx['navigation']}>
                    <Link href="/" className={stylesx['hove']}>Tentang Kami</Link>
                    <Link href="/fitur" className={stylesx['hove']}>Fitur</Link>
                    <Link href="/harga" className={`${stylesx['hove']} ${stylesx['active']}`}>Harga</Link>
                    <Link href="" className={stylesx['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>
    <section className={stylesx['main']}>
        <div className={stylesx['head']}>
            <header>
                <div className={stylesx['header']}>
                    <h1>Harga</h1>
                    <h2><span className={stylesx['trans']}>Tranparasi Harga</span> untuk Aplikasi <br/><span className={stylesx['klinik']}>Klinik Anda</span></h2>
                    <p>MediGrid menyediakan harga yang kompetitif dan memastikan tidak akan ada biaya tersembunyi bagi pengguna. Paket yang ditawarkan mencakup fitur lengkap yang dirancang untuk meningkatkan produktivitas dan kualitas layanan kesehatan dari klinik Anda.</p>
                </div>
            </header>
           <div className={stylesx['list-harga']}>
            <div className={stylesx['card1']}>
                <div className={stylesx['list']}>
                    <div className={stylesx['bulan']}>
                        <h3>Bulanan</h3>
                        <p><strong>Rp <span>500.000</span></strong>/bln</p>
                    </div>
                    <div className={stylesx['garis1']}></div>
                    <div className={stylesx['bulan2']}>
                        <h3>Atau setara dengan</h3>
                        <p><strong>Rp <span>6.000.000</span></strong>/bln</p>
                    </div>
                    <button className={stylesx['btn']}>Berlangganan Sekarang</button>
                </div>
            </div>
                <div className={stylesx['card2']}>
                    <div className={stylesx['list']}>
                        <div className={stylesx['tahun']}>
                            <h3>Tahunan</h3>
                            <p><strong>Rp <span>250.000</span></strong>/bln</p>
                        </div>
                        <div className={stylesx['garis2']}></div>
                        <div className={stylesx['tahun2']}>
                            <h3>Atau setara dengan</h3>
                            <p><strong>Rp <span>3.000.000</span></strong>/bln</p>
                        </div>
                         <button className={stylesx['btn']}>Berlangganan Sekarang</button>
                        </div>
                    </div>
                </div>
                <div className={stylesx['fitur']}>
                    <div className={stylesx['judul']}>
                        <h1>Fitur</h1>
                    </div>
                    <div className={stylesx['fitur-content']}>

                    </div>
                </div>
                <div className={stylesx['fitur']}>
                    <div className={stylesx['judul']}>
                        <h1>Fitur</h1>
                    </div>
                    <div className={stylesx['fitur-content']}>

                    </div>
                </div>
               
           </div>
    </section>




    <footer className={stylesx['footer-body']}>
        <div className={stylesx['footer-body2']}>
            <div className={stylesx['alamat-logo']}>
                <div className={stylesx['image-logo']}>
                    <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ducimus quis, dolorem nulla pariatur excepturi eum, nesciu</p>
                </div>
                <div className={stylesx['media-sosial']}>
                    <div className={stylesx['header-medsos']}>
                        <h3>Media Sosial</h3>
                    </div>
                    <div className={stylesx['medlog']}>
                        <div className={stylesx['medsos-logo']}>
                            <Link href=""><i className='bx bxl-instagram' ></i></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href="" ><i className='bx bxl-facebook' ></i></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href="" ><i className='bx bxl-twitter' ></i></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href=""><i className='bx bxl-youtube' ></i></Link>
                        </div>
                    </div>
                </div>
                <div className={stylesx['hubungi-kami']}>
                    <div className={stylesx['hubungi']}>
                        <h3>Hubungi Kami</h3>
                    </div>
                    <div className={stylesx['kami']}>
                        <Link href=""><i className='bx bxs-phone'></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bxl-whatsapp' ></i>Hubungi kami</Link>
                        <Link href=""><i className='bx bx-envelope' ></i>Hubungi Kami</Link>
                    </div>
                        </div>
                    </div>
                    <div className={stylesx['info-layan-bis-lain']}>
                        <div className={stylesx['top-sections']}>
                            <div className={stylesx['info-section']}>
                                <header className={stylesx['head-info']}>
                                    <h3>Informasi Perusahaan</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={stylesx['info-section']}>
                                <header className={stylesx['head-info']}>
                                    <h3>Produk & Layanan</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={stylesx['info-section']}>
                                <header className={stylesx['head-info']}>
                                    <h3>Bisnis & Pembaruan</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={stylesx['bottom-section']}>
                            <div className={`${stylesx['info-section']} ${stylesx['lainnya']}`}>
                                <header className={stylesx['head-info']}>
                                    <h3>Lainnya</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                        <li><Link href="">Tentang Kami</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={stylesx['menu-footer']}>
                        <div className={stylesx['list-menu']}>
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