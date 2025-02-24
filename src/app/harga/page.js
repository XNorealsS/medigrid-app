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
                    <Link href="/fitur" className={stylesx['hove']}>Fitur & Layanan</Link>
                    <Link href="/harga" className={`${stylesx['hove']} ${stylesx['active']}`}>Harga</Link>
                    <Link href="/blog" className={stylesx['hove']}>Blog</Link>
                </div>
            </div>
        </nav>
    </section>
    <section className={stylesx['main']}>
        <div className={stylesx['head']}>
            <header>
                <div className={stylesx['header']}>
                    <h1>Harga</h1>
                    <h2><span className={stylesx['trans']}>Tranparasi Harga</span><span className={stylesx['apk']}> untuk Aplikasi</span><br/><span className={stylesx['klinik']}>Klinik Anda</span></h2>
                    <p>MediGrid menyediakan harga yang kompetitif dan memastikan tidak akan ada biaya tersembunyi bagi pengguna. Paket yang ditawarkan mencakup fitur lengkap yang dirancang untuk meningkatkan produktivitas dan kualitas layanan kesehatan dari klinik Anda.</p>
                </div>
            </header>
           <div className={stylesx['list-harga']}>
            <div className={stylesx['card1']}>
                <div className={stylesx['list']}>
                    <div className={stylesx['bulan']}>
                        <h3>Paket Basic</h3>
                        <p><strong>Rp <span>500.000</span></strong>/bln</p>
                    </div>

                    <button className={stylesx['btn']}>Berlangganan Sekarang</button>
                </div>
            </div>
                <div className={stylesx['card2']}>
                    <div className={stylesx['list']}>
                        <div className={stylesx['tahun']}>
                            <h3>Paket Standart</h3>
                            <p><strong>Rp <span>750.000</span></strong>/bln</p>
                        </div>
                         <button className={stylesx['btn']}>Berlangganan Sekarang</button>
                        </div>
                    </div>
                    <div className={stylesx['card3']}>
                    <div className={stylesx['list']}>
                        <div className={stylesx['tahun']}>
                            <h3>Paket Premium</h3>
                            <p><strong>Rp <span>1.000.000</span></strong>/bln</p>
                        </div>


                         <button className={stylesx['btn']}>Berlangganan Sekarang</button>
                        </div>
                    </div>
                </div>
                    <div className={stylesx['list-fitur']}>
                        <div className={stylesx['fitur-card']}>
                            <div className={stylesx['judul']}>
                                <h1>Fitur</h1>
                            </div>
                        <div className={stylesx['fitur-content']}>
                            <ul>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="#40c9b2" d="M10 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-2.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1m-2 7H8v2h4zm-7 3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3z"/></svg>Modul Registrasi Pasien</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 48 48"><g fill="#40c9b2" fill-rule="evenodd" clip-rule="evenodd"><path d="M14 24v8h8v-8zm6 6v-4h-4v4z"/><path d="M19 6a6 6 0 0 0-5.653 3.985H6v2.481l4 3.03V40H7a1 1 0 1 0 0 2h3v.015h28V42h3a1 1 0 1 0 0-2h-3V15.532l4.5-3.03V9.984H24.653A6 6 0 0 0 19 6m5.659 8A6 6 0 0 0 25 12v-.015h14.687L36.695 14zm-1.187 2A6 6 0 0 1 19 18a6 6 0 0 1-4.472-2H12v24h12V24h10v16h2V16zM13 12c0 .701.12 1.374.341 2h-2.005l-2.66-2.015H13zm7-1V9h-2v2h-2v2h2v2h2v-2h2v-2zm12 15v14h-6V26z"/></g></svg>Modul PoliKlinik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#40c9b2" d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"/><path fill="#40c9b2" fill-rule="evenodd" d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.75 6.75 0 0 1 4.414-6.335a6.19 6.19 0 0 1 1.398-6.603m7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364c.805-.389 1.921-1.076 3.11-2.264s1.875-2.305 2.263-3.11a8 8 0 0 0 .365-.89zm3.412 3.414q-.077.18-.173.38c-.455.944-1.237 2.202-2.555 3.52s-2.577 2.1-3.52 2.555q-.2.096-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628zM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615a6 6 0 0 1-.808-.681l-5.126-5.126a6 6 0 0 1-.681-.808" clip-rule="evenodd"/></svg>Modul Apotik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#40c9b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M16.667 14H7.333c-2.186 0-3.279 0-4.054.543c-.286.2-.536.45-.736.736C2 16.054 2 17.147 2 19.333c0 1.093 0 1.64.271 2.027q.151.217.369.369c.387.271.934.271 2.027.271h14.666c1.093 0 1.64 0 2.027-.271q.217-.152.369-.369c.271-.387.271-.934.271-2.027c0-2.186 0-3.279-.543-4.054c-.2-.286-.45-.536-.736-.736C19.946 14 18.853 14 16.667 14M20 14l-.407-3.663c-.282-2.538-.423-3.808-1.277-4.572C17.46 5 16.184 5 13.63 5h-3.26c-2.554 0-3.831 0-4.686.765c-.854.764-.995 2.034-1.277 4.572L4 14m7.5-12H14m2.5 0H14m0 0v3"/><path d="m9 17.5l.996.664a2 2 0 0 0 1.11.336h1.788a2 2 0 0 0 1.11-.336L15 17.5M8 8h2"/></g></svg>Modul Kasir</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#40c9b2" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0m7.5 6.48a3.38 3.38 0 0 1-1.75 2.05a5.64 5.64 0 0 0-3.27-3.75a2 2 0 0 1 .79-1.09c-.43-.28-1-.42-1.34.07c-.53.69 0 1.61.21 2v.14A3.07 3.07 0 0 1 9.9 4.46a5.2 5.2 0 0 0-2.76.69a3.44 3.44 0 0 1 .16-1.68a2.21 2.21 0 0 0 1.92-.8c.46-.52-.13-1.18-.59-1.58h.36a7.86 7.86 0 0 1 3.89 1a5.61 5.61 0 0 1 2.27 4.26c.24 0 .7-.55.91-.92q.258.51.44 1.05M9 16.84c-2.05-2.08.25-3.75-1-5.24c-.92-.85-2.29-.26-3.11-1.23a4.08 4.08 0 0 1 1.43-3.93c.52-.44 4-1 5.42.22a5.22 5.22 0 0 1 1.67 2.74a2.35 2.35 0 0 0 1.32-.29c.41 2.98-3.15 6.74-5.73 7.73M5.15 2.09a1.84 1.84 0 0 1 2.16.66c-.42.38-.94.63-1.5.72A3 3 0 0 1 6 2.61z"/></svg>Modul Administrator</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className={stylesx['fitur-card']}>
                        <div className={stylesx['judul']}>
                            <h1>Fitur</h1>
                        </div>
                            <div className={stylesx['fitur-content']}>
                               <ul>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="#40c9b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08m-5.801 0q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125zM6.75 12h.008v.008H6.75zm0 3h.008v.008H6.75zm0 3h.008v.008H6.75z"/></svg>Modul Andjungan</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#40c9b2" d="M6.5 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0-1a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M3 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0zm1 0v4.5a2.5 2.5 0 0 0 5 0V9zm5.626-2.857a3.2 3.2 0 0 1-.396.87c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.192.283.341.598.438.935a1.25 1.25 0 1 1 0 1.787m-.127 10.712A3.5 3.5 0 0 0 14 13.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488q-.321.482-.75.867m4.127-10.712a3.2 3.2 0 0 1-.396.87c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.192.283.341.598.438.935a1.25 1.25 0 1 1 0 1.787m-.127 10.712q.478.143 1 .145a3.5 3.5 0 0 0 3.5-3.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488q-.321.482-.75.867"/></svg>Modul Display Antrian</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="#40c9b2" d="M10 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-2.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1m-2 7H8v2h4zm-7 3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3z"/></svg>Modul Registrasi Pasien</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 48 48"><g fill="#40c9b2" fill-rule="evenodd" clip-rule="evenodd"><path d="M14 24v8h8v-8zm6 6v-4h-4v4z"/><path d="M19 6a6 6 0 0 0-5.653 3.985H6v2.481l4 3.03V40H7a1 1 0 1 0 0 2h3v.015h28V42h3a1 1 0 1 0 0-2h-3V15.532l4.5-3.03V9.984H24.653A6 6 0 0 0 19 6m5.659 8A6 6 0 0 0 25 12v-.015h14.687L36.695 14zm-1.187 2A6 6 0 0 1 19 18a6 6 0 0 1-4.472-2H12v24h12V24h10v16h2V16zM13 12c0 .701.12 1.374.341 2h-2.005l-2.66-2.015H13zm7-1V9h-2v2h-2v2h2v2h2v-2h2v-2zm12 15v14h-6V26z"/></g></svg>Modul PoliKlinik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#40c9b2" d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"/><path fill="#40c9b2" fill-rule="evenodd" d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.75 6.75 0 0 1 4.414-6.335a6.19 6.19 0 0 1 1.398-6.603m7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364c.805-.389 1.921-1.076 3.11-2.264s1.875-2.305 2.263-3.11a8 8 0 0 0 .365-.89zm3.412 3.414q-.077.18-.173.38c-.455.944-1.237 2.202-2.555 3.52s-2.577 2.1-3.52 2.555q-.2.096-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628zM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615a6 6 0 0 1-.808-.681l-5.126-5.126a6 6 0 0 1-.681-.808" clip-rule="evenodd"/></svg>Modul Apotik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#40c9b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M16.667 14H7.333c-2.186 0-3.279 0-4.054.543c-.286.2-.536.45-.736.736C2 16.054 2 17.147 2 19.333c0 1.093 0 1.64.271 2.027q.151.217.369.369c.387.271.934.271 2.027.271h14.666c1.093 0 1.64 0 2.027-.271q.217-.152.369-.369c.271-.387.271-.934.271-2.027c0-2.186 0-3.279-.543-4.054c-.2-.286-.45-.536-.736-.736C19.946 14 18.853 14 16.667 14M20 14l-.407-3.663c-.282-2.538-.423-3.808-1.277-4.572C17.46 5 16.184 5 13.63 5h-3.26c-2.554 0-3.831 0-4.686.765c-.854.764-.995 2.034-1.277 4.572L4 14m7.5-12H14m2.5 0H14m0 0v3"/><path d="m9 17.5l.996.664a2 2 0 0 0 1.11.336h1.788a2 2 0 0 0 1.11-.336L15 17.5M8 8h2"/></g></svg>Modul Kasir</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#40c9b2" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0m7.5 6.48a3.38 3.38 0 0 1-1.75 2.05a5.64 5.64 0 0 0-3.27-3.75a2 2 0 0 1 .79-1.09c-.43-.28-1-.42-1.34.07c-.53.69 0 1.61.21 2v.14A3.07 3.07 0 0 1 9.9 4.46a5.2 5.2 0 0 0-2.76.69a3.44 3.44 0 0 1 .16-1.68a2.21 2.21 0 0 0 1.92-.8c.46-.52-.13-1.18-.59-1.58h.36a7.86 7.86 0 0 1 3.89 1a5.61 5.61 0 0 1 2.27 4.26c.24 0 .7-.55.91-.92q.258.51.44 1.05M9 16.84c-2.05-2.08.25-3.75-1-5.24c-.92-.85-2.29-.26-3.11-1.23a4.08 4.08 0 0 1 1.43-3.93c.52-.44 4-1 5.42.22a5.22 5.22 0 0 1 1.67 2.74a2.35 2.35 0 0 0 1.32-.29c.41 2.98-3.15 6.74-5.73 7.73M5.15 2.09a1.84 1.84 0 0 1 2.16.66c-.42.38-.94.63-1.5.72A3 3 0 0 1 6 2.61z"/></svg>Modul Administrator</p></li>
                               </ul>
                            </div>
                    </div>
                        <div className={stylesx['fitur-card']}>
                            <div className={stylesx['judul']}>
                                <h1>Fitur</h1>
                            </div>
                            <div className={stylesx['fitur-content']}>
                                <ul>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="#40c9b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08m-5.801 0q-.099.316-.1.664c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75a2.3 2.3 0 0 0-.1-.664m-5.8 0A2.25 2.25 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0q-.563.035-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125zM6.75 12h.008v.008H6.75zm0 3h.008v.008H6.75zm0 3h.008v.008H6.75z"/></svg>Modul Andjungan</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#40c9b2" d="M6.5 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0-1a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M3 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0zm1 0v4.5a2.5 2.5 0 0 0 5 0V9zm5.626-2.857a3.2 3.2 0 0 1-.396.87c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.192.283.341.598.438.935a1.25 1.25 0 1 1 0 1.787m-.127 10.712A3.5 3.5 0 0 0 14 13.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488q-.321.482-.75.867m4.127-10.712a3.2 3.2 0 0 1-.396.87c.413.048.787.22 1.084.48q.091.006.186.007a2.25 2.25 0 1 0-1.312-4.078c.192.283.341.598.438.935a1.25 1.25 0 1 1 0 1.787m-.127 10.712q.478.143 1 .145a3.5 3.5 0 0 0 3.5-3.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488q-.321.482-.75.867"/></svg>Modul Display Antrian</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="#40c9b2" d="M10 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4M9 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-2.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1m-2 7H8v2h4zm-7 3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3z"/></svg>Modul Registrasi Pasien</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 48 48"><g fill="#40c9b2" fill-rule="evenodd" clip-rule="evenodd"><path d="M14 24v8h8v-8zm6 6v-4h-4v4z"/><path d="M19 6a6 6 0 0 0-5.653 3.985H6v2.481l4 3.03V40H7a1 1 0 1 0 0 2h3v.015h28V42h3a1 1 0 1 0 0-2h-3V15.532l4.5-3.03V9.984H24.653A6 6 0 0 0 19 6m5.659 8A6 6 0 0 0 25 12v-.015h14.687L36.695 14zm-1.187 2A6 6 0 0 1 19 18a6 6 0 0 1-4.472-2H12v24h12V24h10v16h2V16zM13 12c0 .701.12 1.374.341 2h-2.005l-2.66-2.015H13zm7-1V9h-2v2h-2v2h2v2h2v-2h2v-2zm12 15v14h-6V26z"/></g></svg>Modul PoliKlinik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#40c9b2" d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06"/><path fill="#40c9b2" fill-rule="evenodd" d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.75 6.75 0 0 1 4.414-6.335a6.19 6.19 0 0 1 1.398-6.603m7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364c.805-.389 1.921-1.076 3.11-2.264s1.875-2.305 2.263-3.11a8 8 0 0 0 .365-.89zm3.412 3.414q-.077.18-.173.38c-.455.944-1.237 2.202-2.555 3.52s-2.577 2.1-3.52 2.555q-.2.096-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628zM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615a6 6 0 0 1-.808-.681l-5.126-5.126a6 6 0 0 1-.681-.808" clip-rule="evenodd"/></svg>Modul Apotik</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#40c9b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M16.667 14H7.333c-2.186 0-3.279 0-4.054.543c-.286.2-.536.45-.736.736C2 16.054 2 17.147 2 19.333c0 1.093 0 1.64.271 2.027q.151.217.369.369c.387.271.934.271 2.027.271h14.666c1.093 0 1.64 0 2.027-.271q.217-.152.369-.369c.271-.387.271-.934.271-2.027c0-2.186 0-3.279-.543-4.054c-.2-.286-.45-.536-.736-.736C19.946 14 18.853 14 16.667 14M20 14l-.407-3.663c-.282-2.538-.423-3.808-1.277-4.572C17.46 5 16.184 5 13.63 5h-3.26c-2.554 0-3.831 0-4.686.765c-.854.764-.995 2.034-1.277 4.572L4 14m7.5-12H14m2.5 0H14m0 0v3"/><path d="m9 17.5l.996.664a2 2 0 0 0 1.11.336h1.788a2 2 0 0 0 1.11-.336L15 17.5M8 8h2"/></g></svg>Modul Kasir</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="#40c9b2" d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0m7.5 6.48a3.38 3.38 0 0 1-1.75 2.05a5.64 5.64 0 0 0-3.27-3.75a2 2 0 0 1 .79-1.09c-.43-.28-1-.42-1.34.07c-.53.69 0 1.61.21 2v.14A3.07 3.07 0 0 1 9.9 4.46a5.2 5.2 0 0 0-2.76.69a3.44 3.44 0 0 1 .16-1.68a2.21 2.21 0 0 0 1.92-.8c.46-.52-.13-1.18-.59-1.58h.36a7.86 7.86 0 0 1 3.89 1a5.61 5.61 0 0 1 2.27 4.26c.24 0 .7-.55.91-.92q.258.51.44 1.05M9 16.84c-2.05-2.08.25-3.75-1-5.24c-.92-.85-2.29-.26-3.11-1.23a4.08 4.08 0 0 1 1.43-3.93c.52-.44 4-1 5.42.22a5.22 5.22 0 0 1 1.67 2.74a2.35 2.35 0 0 0 1.32-.29c.41 2.98-3.15 6.74-5.73 7.73M5.15 2.09a1.84 1.84 0 0 1 2.16.66c-.42.38-.94.63-1.5.72A3 3 0 0 1 6 2.61z"/></svg>Modul Administrator</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24"><path fill="#40c9b2" d="M5 20v-2h1.6l1.975-6.575q.2-.65.738-1.037T10.5 10h3q.65 0 1.188.388t.737 1.037L17.4 18H19v2zm3.7-2h6.6l-1.8-6h-3zM11 8V3h2v5zm5.95 2.475L15.525 9.05l3.55-3.525l1.4 1.4zM18 15v-2h5v2zM7.05 10.475l-3.525-3.55l1.4-1.4l3.55 3.525zM1 15v-2h5v2zm11 3"/></svg>Modul IGD</p></li>
                                <li><p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 64 64"><path fill="#40c9b2" d="M63.117 63.529h-5.633v-9.514H6.899v9.514H1.215V27.663c0-1.551 1.222-2.811 2.778-2.811v-.002c1.552 0 2.906 1.262 2.906 2.813v19.54h50.585V33.357c0-1.552 1.266-2.812 2.819-2.812s2.813 1.26 2.813 2.812z"/><path fill="#40c9b2" d="M14.517 30.868a4.324 4.324 0 1 1 0 8.649a4.33 4.33 0 0 1-4.332-4.326a4.326 4.326 0 0 1 4.332-4.323m4.325 12.046a2.134 2.134 0 0 1-2.132 2.133h-6.148a2.13 2.13 0 0 1-2.13-2.133c0-1.173.952-2.126 2.13-2.126h6.148a2.13 2.13 0 0 1 2.132 2.126M51.964 32.55c1.9 0 3.435 1.489 3.454 3.379l.007 9.121H20.713V32.554l31.251-.003zm-20.57-1.979V10.83a3.855 3.855 0 0 0-3.849-3.851a3.834 3.834 0 0 0-3.83 3.828a.65.65 0 0 1-.648.65a.65.65 0 0 1-.648-.65a.853.853 0 0 0-1.706 0a2.36 2.36 0 0 0 2.355 2.358c1.3 0 2.355-1.056 2.355-2.358c0-1.168.952-2.12 2.123-2.12c1.178 0 2.139.96 2.139 2.143v19.741h1.71z"/><path fill="#40c9b2" d="M24.224 24.585h2.172s.427-1.851.427-4.805s-.427-4.803-.427-4.803h-5.551s-.497 1.495-.497 4.803c0 3.309.497 4.805.497 4.805h2.209c0 .005-.005.009-.005.016c.002.037.07 3.601-2.265 5.97h1.538c1.94-2.591 1.905-5.74 1.902-5.986M39.637.65v22.378h23.482V.65zm2.007 5.084a2.984 2.984 0 0 1 2.992-2.987h13.499a2.986 2.986 0 0 1 2.989 2.987v8.114h-1.812l-1.122-3.05a.473.473 0 0 0-.889.005l-.629 1.784l-1.482-6.209a.475.475 0 0 0-.932.055l-.992 8.829c-.402-.602-.801-1.205-.801-1.205a.48.48 0 0 0-.395-.209h-1.824c-.186-.511-1.119-3.05-1.119-3.05a.48.48 0 0 0-.448-.309c-.2 0-.376.128-.441.314l-.632 1.784l-1.482-6.209a.473.473 0 0 0-.931.055s-.769 6.864-.992 8.829l-.801-1.205a.47.47 0 0 0-.392-.209h-1.363V5.735h-.001zm16.491 15.428H44.636a2.99 2.99 0 0 1-2.992-2.992v-3.377h1.108c.233.348 1.379 2.074 1.379 2.074a.476.476 0 0 0 .866-.209s.508-4.53.836-7.428c.546 2.302 1.224 5.136 1.224 5.136a.47.47 0 0 0 .434.362a.47.47 0 0 0 .471-.314l.727-2.058l.785 2.128a.47.47 0 0 0 .441.309h1.9l1.38 2.074a.47.47 0 0 0 .504.197a.47.47 0 0 0 .36-.406l.838-7.431l1.224 5.138a.47.47 0 0 0 .434.362a.47.47 0 0 0 .471-.314s.388-1.091.727-2.058c.362.99.783 2.128.783 2.128a.47.47 0 0 0 .441.309h2.144v3.377a2.99 2.99 0 0 1-2.988 2.992z"/></svg>Modul Rawat Inap</p></li>
                                </ul>
                         </div>
                        </div>
                    </div>
           </div>
    </section>

    <Footer/>

    </>
    )
}

export default Harga;