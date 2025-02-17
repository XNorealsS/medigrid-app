import React from 'react'
import Image from "next/image";
import Link from "next/link";
import stylesx from "../styles/footer.module.css";


function footer() {
  return (
  


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
  )
}

export default footer
