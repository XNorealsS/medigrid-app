
import Image from "next/image";
import Link from "next/link";
import Footer from "./component/Footer";
import '/src/app/home.css'


export default function Home() {
  return(
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
                    <Link href="/" className="hove active">Tentang Kami</Link>
                    <Link href="/fitur" className="hove">Fitur</Link>
                    <Link href="/harga" className="hove">Harga</Link>
                    <Link href="" className="hove">Blog</Link>
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
                    <p className="beri"><span className="bulat"></span>Berita<span className="bulat"></span></p>
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



<Footer/>
    </>
  )
}

