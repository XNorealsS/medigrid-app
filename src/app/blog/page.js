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
            <p><span className={stylesh['gradi']}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Quod illo nobis nihil doloribus quasi aspernatur omnis, mollitia ex autem! Ab, <span className={stylesh['dient']}>odit! Ipsam consequuntur nemo eaque, et illum atque aut neque.</span></p>
        </div>
        <div className={stylesh['blog']}>
            <div className={stylesh['card1']}>
                    <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />
                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className={stylesh['card-footer']}>
                        <small className={stylesh['text-muted']}>Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className={stylesh['card1']}>
                <Image src="/img/bakc.jpg" alt="Logo" width={400} height={100} />

                    <div className={stylesh['card-body']}>
                        <h6>
                            <span>indodev</span>
                            <span>November 13, 2025</span>
                        </h6>
                        <h5 className={stylesh['card-title']}>Card Title 1</h5>
                        <p className={stylesh['card-text']}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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