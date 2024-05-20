import NavBar from '../NavBar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ArtikelLainnya from '../blog/ArtikelLainnya';
import Komentar from './Komentar';
import Bagikan from '../Bagikan';

const Berkolaborasi = () => {

    return (
        <>
            <NavBar />
            <div className='flex relative'>
                <Link to={'/news'}>
                    <img src='/arrow.png' className='w-16 absolute top-0 left-0 mt-24 ml-24 transition duration-300 filter hover:brightness-75 hover:tint-primary-100'></img>
                </Link>
                <section id="container" className="w-full lg:py-2.5 flex-col items-center gap-12 flex ">
                    <div className="w-full pt-8 sm:pt-10 lg:pt-8 flex-col justify-center items-center gap-2.5 flex">
                        <div className="flex-col justify-start items-start gap-3.5 flex md:w-2/3 w-full px-[30px] md:px-0">
                            <div className="self-stretch  lg:py-6  flex-col justify-start items-start gap-2.5 flex text-neutral-100">
                                <h1 className="self-stretch text-[42px] break-words font-semibold leading-6 lg:leading-[62.40px]">
                                    Berkolaborasi dalam Inovasi, FitAja! dan Good Doctor menandatangani MoU pada EXPLORISE 2024 MDI Ventures Chapter I “Moving Beyond, through Innovation &amp; Collaboration within Digital Healthcare Ecosystem&quot;
                                </h1>
                                <div className="self-stretch text-base font-semibold leading-relaxed sm:text-xl font-roboto"> Kategori:
                                    Bisnis
                                </div>
                                <div className="hidden self-stretch text-xs min-[460px]:block sm:text-base  lg:text-lg font-normal leading-normal text-right font-roboto">
                                    08 Maret 2024
                                </div>
                                <div class="w-full pt-4">
                                    <div class="aspect-video">
                                        <div class="flex justify-center w-full h-full">
                                            <img class="object-contain rounded-2xl" src="https://demo.fitaja.id//storage/articles/9QxG86oN29T3JUxiEHdetOer1IeqvQmzPYYAKnxj.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <Bagikan />

                                <div className="lg:pt-[17px] justify-center items-center gap-2.5 flex w-full">
                                    <article className="text-xs font-normal leading-normal sm:text-sm lg:text-lg font-roboto ql-editor"
                                        style={{ wordWrap: 'break-word', width: 'inherit' }}>
                                        <p>
                                            Pada Kamis, 7 Maret 2024, Artotel Suites Mangkuluhur menjadi saksi sebuah pertemuan yang sangat bermakna dalam ranah digital healthcare di Indonesia. MDI Ventures mengundang para pelaku industri dan penggiat teknologi dari sektor kesehatan dalam sebuah event bertajuk EXPLORISE 2024 MDI Ventures Chapter I.
                                        </p>

                                        <br></br>
                                        <p>
                                            Acara ini bertujuan untuk mempercepat transformasi digital di Indonesia, khususnya di sektor kesehatan. Dalam sambutannya, Bapak Donald menekankan pentingnya sinergi bisnis antara startup teknologi dan perusahaan multi-sektor yang berada dalam lingkungan BUMN.
                                        </p>

                                        <br></br>
                                        <p>
                                            Acara ini menghadirkan sejumlah pakar industri dalam panel diskusi yang mengangkat tema "Moving Beyond, through Innovation & Collaboration within Digital Healthcare Ecosystem". Diskusi tersebut menghadirkan empat panelis terkemuka dari startup Digital Healthcare di lingkungan BUMN, di antaranya Bapak O.T Ponangsera, Chief Product Officer, Biofarma, Bapak Danang Rizki Ginanjar, CEO FitAja!, Bapak Oscar Ronald, Director SwipeRX, dan Bapak Danu Wicaksana, CEO Good Doctor. Diskusi dipandu oleh Bapak Anas Fauzi, General Manager of Synergy, MDI Ventures. Kegiatan ini juga dihadiri oleh para peserta dari lingkup BUMN yang bergerak di bidang Kesehatan. Sharing session dimulai dengan sambutan dari para narasumber termasuk Bapak Danang Rizki, CEO of FitAja!
                                        </p>

                                        <br></br>
                                        <p>
                                            Dalam panel diskusi, Bapak Danang Rizki menyampaikan tantangan besar yang dihadapi dalam sektor layanan kesehatan diantaranya adalah biaya layanan kesehatan yang tinggi, dan layanan kesehatan tradisional seringkali tidak efisien dan tidak nyaman. Hal ini menciptakan beban yang signifikan bagi individu, keluarga, dan bisnis.
                                        </p>

                                        <br></br>
                                        <p>
                                            Meskipun layanan Kesehatan berkembang dengan pesat, namun model asuransi tradisional kesulitan untuk mengimbanginya. Hal ini menjadi tantangan bagi perusahaan asuransi dalam menjangkau pelanggan baru.
                                        </p>

                                        <br></br>
                                        <p>
                                            Selain itu tantangan lainya adalah, meningkatnya permintaan pelanggan akan experience digital di bidang kesehatan menyebabkan kebutuhan atas aplikasi yang terpadu dan terintegrasi. Namun, sistem yang terfragmentasi dengan keahlian internal yang terbatas menciptakan ketergantungan yang besar pada vendor TI eksternal.
                                        </p>

                                        <br></br>
                                        <p>
                                            Atas tantangan tersebut, FitAja! secara khusus dirancang untuk memberdayakan perusahaan asuransi B2B (Business to Business), dengan menyediakan pengalaman perawatan kesehatan yang mulus bagi pasien dan peserta asuransi. FitAja!  juga memberdayakan perusahaan untuk mendukung kesejahteraan karyawan melalui rencana kesehatan yang dipersonalisasi, konsultasi kesehatan virtual, dan sumber daya kesehatan mental.
                                        </p>

                                        <br></br>
                                        <p>
                                            Dalam acara ini juga telah dilakukan penandatanganan dokumen MoU Pemanfaatan Layanan dan Pengembangan Usaha antara FitAja! dan Good Doctor. Kerja sama ini sebagai bukti nyata kolaborasi di ekosistem kesehatan digital di lingkup BUMN. Melalui inovasi dan kolaborasi, FitAja! membentuk ekosistem kesehatan digital terpadu, memberikan jawaban atas tantangan-tantangan kompleks dalam sektor kesehatan digital Indonesia.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Komentar/>
            <ArtikelLainnya />
            <Footer />
        </>
    )
}

export default Berkolaborasi;
