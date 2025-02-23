import React from 'react'
import Image from "next/image";
import Link from "next/link";
import stylesh from '../styles/blog.module.css';
import Footer from "../components/footer"; 




const blog = () => {

  return (
    <>
     <nav className={stylesh["first-nav"]}>
            <div className={stylesh['bahasa-faq']}>
                <p>IND <span></span></p>
                <Link href="">FAQ</Link>
            </div>
            <div className={stylesh['contact1']}>
                <Link href="">Contact Us</Link>
            </div>
        </nav>
    <section className={stylesh['container']}>
        <nav className={stylesh['second-nav']}>
            <div className={stylesh['navbar']}>
                <div className={stylesh['logo']}>
                  <Link href="/"><Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={stylesh['navigation']}>
                    <Link href="/" className={stylesh['hove']}>Tentang Kami</Link>
                    <Link href="/fitur" className={stylesh['hove']}>Fitur & Layanan</Link>
                    <Link href="/harga" className={stylesh['hove']}>Harga</Link>
                    <Link href="" className={`${stylesh['hove']} ${stylesh['active']}`}>Blog</Link>
                </div>
                <div className={stylesh['search']}>
                    <input type='text' placeholder='Search'></input>
                </div>
            </div>
        </nav>
    </section>

    <section className={stylesh['main']}>
        <div className={stylesh['header']}>
            <h1>BLOG</h1>
            <p><span className={stylesh['gradi']}>Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi layanan dan fasilitas kesehatan terkini yang kami sediakan untuk Anda</span></p>
        </div>
        <div className={stylesh['blog']}>
            <div className={stylesh['card1']}>
                    <Image src="/img/kopi.jpg" alt="Logo" width={400} height={100} />
                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Manfaat Kopi Untuk Kesehatan</h5>
                        <p className={stylesh['card-text']}>Kopi adalah salah satu minuman paling diminati banyak orang, dan memiliki banyak khasiat... </p>
                        <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                        </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Bahaya Makan-Makanan Junkfood</h5>
                        <p className={stylesh['card-text']}>Junkfood atau lebih sering dikenal sebagai makananan cepat saji, adalah makanan yang memilki cita rasa gurih...</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                   
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/allergic-rhinitis-symptom-of-odor-pollen-flowering-portrait-asian-young-woman-hand-in-sneeze-blowing-runny-nose-after-smell-smelly-from-bloom-flower-holding-away-pink-flora-on-white-background-free-photo.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Rhintis Penyebab dan Cara Mengobatinya</h5>
                        <p className={stylesh['card-text']}>Rhinitis  adalah kondisi peradangan pada selaput lendir hidung yang menyebabkan penyumbatan pada hidung dan tenggorokkan...</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                    
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/buang air.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Bahaya Menanhan Buang Air Kecil Pada Kesehatan</h5>
                        <p className={stylesh['card-text']}>Banyak orang memilki kebiasaan menahan buang air kecil, namun menahan buang air kecil dapat sangat berbahaya bagi tubuh...</p>
                    
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
              </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/th.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Kenali Kanker, Penyebab,Gejala, dan Cara Mencegah</h5>
                        <p className={stylesh['card-text']}>Kanker adalah penyakit yang disebabkan oleh sel-sel abnormal yang membelah tak terkendali....</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                    
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/pornografi.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Bahaya Pornografi</h5>
                        <p className={stylesh['card-text']}>Banyak orang menonton Pornografi terutama pada remaja yang sedang dalam masa pubertas, namun Pornografi dapat menyebabkan masalahs serius...</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                    
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/Stop Stunting.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Cara Mencegah Agar Anak Tidak Terkenak Stunting</h5>
                        <p className={stylesh['card-text']}>Indonesia adalah negara dengan anak stunting terbanyak ke-2 dikawasan asia tenggra dan ke-5 di dunia...</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                    
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/th (1).jpg" alt="Logo" width={400} height={100} />
                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Bahaya Begadang</h5>
                        <p className={stylesh['card-text']}>Banyak orang yang memilki hobi begadang tanpa mengetahui resikonya...</p>
              <Link href="" className={stylesh['baca']}>Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></Link>
                
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

            <div className={stylesh['button']}>
                <button className={stylesh['btn']}>Prev</button>
                <button className={stylesh['btn']}>1</button>
                <button className={stylesh['btn']}>2</button>
                <button className={stylesh['btn']}>....</button>
                <button className={stylesh['btn']}>Next</button>
            </div>
    </section>
    <Footer></Footer>
    </>
  )
}

export default blog