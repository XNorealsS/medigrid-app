// app/blog/page.js
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";
import stylesh from "../styles/blog.module.css";
import FaqTab from "../components/FaqTab";


// Optional: Menggunakan Metadata API Next.js 13
export const metadata = {
  title: "Blog - Nama Website",
  description:
    "Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi layanan dan fasilitas kesehatan terkini.",
  openGraph: {
    title: "Blog - Nama Website",
    description:
      "Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi layanan dan fasilitas kesehatan terkini.",
    images: ["/img/medigrid.jpg"],
    url: "https://yourwebsite.com/blog",
  },
};

export default async function Blog() {

  // Fetch data pada server (SSG/ISR)
  const res = await fetch("http://localhost:5000/api/news", {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  // Update URL gambar sesuai kebutuhan
  const news = data.map((item) => ({
    ...item,
    image_url: item.image_url
      ? item.image_url.includes("http")
        ? item.image_url
        : `http://localhost:5000${item.image_url}`
      : "/img/bakc.jpg",
  }));

  return (
    <>
      {/* SEO Meta Tags & Structured Data */}
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog - Nama Website",
            url: "https://yourwebsite.com/blog",
          })}
        </script>
      </Head>

      <nav className={stylesh["first-nav"]}>
        <div className={stylesh["bahasa-faq"]}>
          <p>IND
             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#dc1f26" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4"/><path fill="#eee" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36z"/></svg></span>
             </p>
          <Link href="">
          FAQ  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26"><path fill="currentColor" d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2s1.218-.9 1.218-2s-.418-2-1.218-2"/></svg></span>
          </Link>
        </div>
        <div className={stylesh["contact1"]}>
          <Link href="">Contact Us</Link>
        </div>
      </nav>

      <section className={stylesh["container"]}>
        <nav className={stylesh["second-nav"]}>
          <div className={stylesh["navbar"]}>
            <div className={stylesh["logo"]}>
              <Link href="/">
                <Image src="/img/medigrid.jpg" alt="Logo" width={140} height={100} />
              </Link>
            </div>
            <div className={stylesh["navigation"]}>
              <Link href="/" className={stylesh["hove"]}>Tentang Kami</Link>
              <Link href="/fitur" className={stylesh["hove"]}>Fitur & Layanan</Link>
              <Link href="/harga" className={stylesh["hove"]}>Harga</Link>
              <Link href="" className={`${stylesh["hove"]} ${stylesh["active"]}`}>Blog</Link>
            </div>
            <div className={stylesh["search"]}>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </nav>
      </section>

      <section className={stylesh["main"]}>
        <div className={stylesh["header"]}>
          <h1>BLOG</h1>
          <p>
            <span className={stylesh["gradi"]}>
              Dapatkan berita terbaru seputar kesehatan, tips medis, serta informasi
              layanan dan fasilitas kesehatan terkini
            </span>{" "}
            yang kami sediakan untuk Anda.
          </p>
        </div>

        {/* Tampilan Berita */}
        {news.length === 0 ? (
          <p>Memuat berita...</p>
        ) : (
          <div className={stylesh["blog-grid"]}>
            {news.map((item) => (
              <div key={item.id} className={stylesh["card1"]}>
                <div className={stylesh["card-image"]}>
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={400}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className={stylesh["card-body"]}>
                  <h6>
                    <span>{item.author || "Admin"}</span>
                    <span>
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </span>
                  </h6>
                  <h5 className={stylesh["card-title"]}>{item.title}</h5>
                  <p className={stylesh["card-text"]}>
                    {item.subtitle
                      ? item.subtitle
                      : item.content.substring(0, 100) + "..."}
                  </p>
                  <Link href={`/blog/${item.id}`} className={stylesh["baca"]}>
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}


      </section>

      <Footer />
    </>
  );
}
