import Link from "next/link";
import Image from "next/image";
import stylesx from "../styles/harga.module.css";
import Footer from "../components/footer";


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

    <Footer/>

    </>
    )
}

export default Harga;