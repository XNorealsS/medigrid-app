"use client"
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Link from "next/link";
import Image from 'next/image';

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (


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


    )
  }
}

export default Footer