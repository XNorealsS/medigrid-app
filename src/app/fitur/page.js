import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import styles from '../styles/fitur.module.css';


const fitur = () => {
    return (
      <>
       <nav className={styles['first-nav']}>
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
                  <Link href="/"><Image  src="/img/medigrid.jpg" alt="Logo" width={140} height={100} /></Link>
                </div>
                <div className={styles['navigation']}>
                    <Link href="/" className={styles['hove']}>Tentang Kami</Link>
                    <Link href="/fitur" className={`${styles['hove']} ${styles['active']}`}>Fitur & Layanan</Link>
                    <Link href="/harga" className={styles['hove']}>Harga</Link>
                    <Link href="/blog" className={styles['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>
      </>
    )
}
export default fitur