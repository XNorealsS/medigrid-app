import React from 'react'
import Image from "next/image";
import Link from "next/link";
import stylesx from "../styles/footer.module.css";


function footer() {
  return (
    <footer id='footer' className={stylesx['footer-body']}>
        <div className={stylesx['footer-body2']}>
            <div className={stylesx['alamat-logo']}>
                <div className={stylesx['image-logo']}>
                    <Image src="/img/medigrid.jpg" alt="Logo" width={100} height={100}></Image>
                    <p>MediGrid menyatukan semua aspek operasional klinik dalam satu platform. Aplikasi ini memberikan nyaman dan efisien MediGrid memprioritaskan keamanan data pasien</p>

                </div>
                <div className={stylesx['media-sosial']}>
                    <div className={stylesx['header-medsos']}>
                        <h3>Media Sosial</h3>
                    </div>
                    <div className={stylesx['medlog']}>
                        <div className={stylesx['medsos-logo']}>
                            <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href="" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href="" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg></Link>
                        </div>
                        <div className={stylesx['medsos-logo']}>
                            <Link href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg></Link>
                        </div>
                    </div>
                </div>
                <div className={stylesx['hubungi-kami']}>
                    <div className={stylesx['hubungi']}>
                        <h3>Hubungi Kami</h3>
                    </div>
                    <div className={stylesx['kami']}>
                        <Link href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"/></svg>
                        +62 822 4141 4171</Link>
                        <Link href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg>marketing@medigrid.id</Link>
                       
                    </div>
                        </div>
                    </div>
                    <div className={stylesx['info-layan-bis-lain']}>
                        <div className={stylesx['top-sections']}>
                            <div className={stylesx['info-section']}>
                                <header className={stylesx['head-info']}>
                                    <h3>Produk & Layanan</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href="">Manajemen Data Pasien Terpadu</Link></li>
                                        <li><Link href="">Kartu Identitas Digital Pasien</Link></li>
                                        <li><Link href="">Portal Pasien dan Layanan Mandiri</Link></li>
                                        <li><Link href="">Analitik Data Kesehatan</Link></li>
                                        <li><Link href="">Dukungan IoT dan Integrasi Sistem</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={stylesx['info-section']}>
                                <header className={stylesx['head-info']}>
                                    <h3>Bisnis & Pembaruan</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href=""></Link></li>
                                        <li><Link href=""></Link></li>
                                        <li><Link href=""></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${stylesx['info-section']} ${stylesx['lainnya']}`}>
                                <header className={stylesx['head-info']}>
                                    <h3>Lainnya</h3>
                                </header>
                                <div className={stylesx['list-info']}>
                                    <ul className={stylesx['list']}>
                                        <li><Link href=""></Link></li>
                                        <li><Link href=""></Link></li>
                                        <li><Link href=""></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={stylesx['menu-footer']}>
                        <div className={stylesx['list-menu']}>
                        
                        </div>
                    </div>
                    <div className={stylesx['maps']}>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.038787499462!2d95.32758637503258!3d5.561269694419209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040373fcb6725bd%3A0xe612b746e161a427!2sJl.%20Syiah%20Kuala%20No.10d%2C%20Bandar%20Baru%2C%20Kec.%20Kuta%20Alam%2C%20Kota%20Banda%20Aceh%2C%20Aceh%2023125!5e0!3m2!1sid!2sid!4v1740309282658!5m2!1sid!2sid"
                    width="140%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen // Perbaikan untuk React
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                        <p>Jl. Syiah Kuala No.10D, Bandar Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23125</p>
                    </div>
            </div>
    </footer>  
  )
}

export default footer
