// app/blog/page.js
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";
import stylesh from "../styles/blog.module.css";

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
          <p>IND <span></span></p>
          <Link href="">FAQ</Link>
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
