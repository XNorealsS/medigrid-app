import Link from "next/link";
import Image from "next/image";
import Footer from "../component/Footer";

import '../style/harga.css'


const harga = () => {
    return (
        <>
        <nav className="first-nav">
            <div className="bahasa-faq">
                <p>IND <span></span></p>
                <Link href="">FAQ</Link>
            </div>
            <div className="contact1">
                <Link href="">Contact Us</Link>
            </div>
        </nav>
    <section className="container">
        <nav className="second-nav">
            <div className="navbar">
                <div className="logo">
                  <Link href="/"><Image  src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className="navigation">
                    <Link href="/" className="hove">Tentang Kami</Link>
                    <Link href="/fitur" className="hove">Fitur</Link>
                    <Link href="/harga" className="hove active">Harga</Link>
                    <Link href="" className="hove">Blog</Link>
                </div>
            </div>
        </nav>
    </section>
    <section className="main">
        <div className="head">
            <header>
                <div className="header">
                    <h1>Harga</h1>
                    <h2><span className="trans">Tranparasi Harga</span> untuk Aplikasi <br/><span className="klinik">Klinik Anda</span></h2>
                    <p>MediGrid menyediakan harga yang kompetitif dan memastikan tidak akan ada biaya tersembunyi bagi pengguna. Paket yang ditawarkan mencakup fitur lengkap yang dirancang untuk meningkatkan produktivitas dan kualitas layanan kesehatan dari klinik Anda.</p>
                </div>
            </header>
           <div className="list-harga">
            <div className="card1">
                <div className="list">
                    <div className="bulan">
                        <h3>Bulanan</h3>
                        <p><strong>Rp <span>500.000</span></strong>/bln</p>
                    </div>
                    <div className="garis1"></div>
                    <div className="bulan2">
                        <h3>Atau setara dengan</h3>
                        <p><strong>Rp <span>6.000.000</span></strong>/bln</p>
                    </div>
                    <button className="btn">Berlangganan Sekarang</button>
                </div>
            </div>
                <div className="card2">
                    <div className="list">
                        <div className="tahun">
                            <h3>Tahunan</h3>
                            <p><strong>Rp <span>250.000</span></strong>/bln</p>
                        </div>
                        <div className="garis2"></div>
                        <div className="tahun2">
                            <h3>Atau setara dengan</h3>
                            <p><strong>Rp <span>3.000.000</span></strong>/bln</p>
                        </div>
                         <button className="btn">Berlangganan Sekarang</button>
                        </div>
                    </div>
                </div>
                <div className="fitur">
                    <div className="judul">
                        <h1>Fitur</h1>
                    </div>
                    <div className="fitur-content">

                    </div>
                </div>
                <div className="fitur">
                    <div className="judul">
                        <h1>Fitur</h1>
                    </div>
                    <div className="fitur-content">

                    </div>
                </div>
                <div className="fitur">
                    <div className="judul">
                        <h1>Fitur</h1>
                    </div>
                    <div className="fitur-content">

                    </div>
                </div>
           </div>
    </section>
    <Footer></Footer>
    </>
    )
}

export default harga