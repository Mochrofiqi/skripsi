function Footer() {
  return (
    <>
      <section
        id="footer"
        className="flex flex-col items-start w-full bg-primary-200"
      >
        <footer className="w-full flex flex-col px-[30px] h-auto lg:mx-auto xl:px-28  lg:px-16 ">
          <section className="lg:grid lg:grid-cols-5 hidden">
            <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
              <div>
                <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
                  <a href="/about">Tentang</a>
                </h5>
              </div>
              <div className="text-lg text-left font-roboto text-neutral-500">
                <ul className="gap-[10px] ">
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/about">
                      Perusahaan
                    </a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/about">Perjalanan FitAja!</a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/about">Tim FitAja!</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="py-2 text-2xl font-bold text-white">Ikuti Kami di:</h5>
                <div className="flex items-start gap-4 p-1 w-96">
                  <a
                    href="https://www.instagram.com/fitaja.id/"
                    target="_blank"
                    className="hover:scale-110"
                  >
                    <img
                      src="https://demo.fitaja.id/assets/icons/instagram.svg"
                      alt="Instagram Logo"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/FitAja.id"
                    target="_blank"
                    className="hover:scale-110"
                  >
                    <img
                      src="https://demo.fitaja.id/assets/icons/facebook.svg"
                      alt="Facebook Logo"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/fitaja-digital-nusantara/"
                    target="_blank"
                    className="hover:scale-110"
                  >
                    <img
                      src="https://demo.fitaja.id/assets/icons/linkedin.svg"
                      alt="LinkedIn Logo"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@fitaja.id"
                    target="_blank"
                    className="hover:scale-110"
                  >
                    <img
                      src="https://demo.fitaja.id/assets/icons/tiktok.svg"
                      alt="Tiktok Logo"
                    />
                  </a>
                  <a
                    href="https://twitter.com/FitAja_id"
                    target="_blank"
                    className="hover:scale-110"
                  >
                    <img
                      src="https://demo.fitaja.id/assets/icons/twitter.svg"
                      alt="Twitter Logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">

              <div>
                <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
                  <a href="/fitur">Fitur </a>{" "}
                </h5>
              </div>
              <div className="text-lg text-left font-roboto text-neutral-500">
                <ul className="gap-[10px]  ">
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/fitur">Layanan</a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/fitur">Fitur asuransi</a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/fitur">Fitur Kesehatan</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
              <div>
                <h5 className="text-2xl font-bold text-neutral-500 hover:underline">
                  <a href="/news">Cerita</a>
                </h5>
              </div>
              <div className="text-lg text-left font-roboto text-neutral-500">
                <ul className="gap-[10px]  ">
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/news">
                      Berita FitAja!
                    </a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/news">
                      Galeri FitAja!
                    </a>
                  </li>
                  <li className="py-1 hover:underline hover:font-semibold">
                    <a href="/news">
                      Video FitAja!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex py-5 flex-col items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14 self-stretch">
              <div>
                <h5 class="text-2xl font-bold text-neutral-500 hover:underline">
                  <a href="/contact-us">Hubungi Kami</a>
                </h5>
              </div>
              <div class="font-roboto">
                <h5 class="text-lg font-semibold text-left text-neutral-500 ">
                  Customer Service
                </h5>
                <div class="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
                  <a href="https://wa.me/6289525306216" target="_blank">
                    <span>
                      Phone <span class="pl-1">:</span>{" "}
                      <span class="hover:underline hover:font-semibold">
                        089525306216
                      </span>
                    </span>
                  </a>
                  <a href="mailto:cs@fitaja.id" target="_blank">
                    <span>
                      Email <span class="pl-[9px]">:</span>{" "}
                      <span class="hover:underline hover:font-semibold">
                        cs@fitaja.id
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="font-roboto">
                <h5 class="text-lg font-semibold text-left text-neutral-500 ">
                  Bisnis
                </h5>
                <div class="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
                  <a href="mailto:partnership.bd@fitaja.id" target="_blank">
                    <span>
                      Email <span class="pl-[9px]">:</span>{" "}
                      <span class="hover:underline hover:font-semibold">
                        partnership.bd@fitaja.id
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="font-roboto">
                <h5 class="text-lg font-semibold text-left text-neutral-500 ">
                  Karir
                </h5>
                <div class="flex flex-col items-start self-stretch justify-center gap-1 py-2 text-sm text-white">
                  <a href="mailto:recruitment@fitaja.id" target="_blank">
                    <span>
                      Email <span class="pl-[9px]">:</span>{" "}
                      <span class="hover:underline hover:font-semibold">
                        recruitment@fitaja.id
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-5 items-start gap-[15px] lg:mx-[2px] xl:mx-8 2xl:mx-10 min-[1920px]:mx-14">
              <div>
                <h5 className="text-2xl font-bold text-neutral-500 text-center">
                  Download FitAja!
                </h5>
              </div>
              <div className="flex flex-col w-full gap-8 ">
                <div className="lg:w-[180px] xl:w-[200px] xl:h-[262px] py-1 flex-col justify-center items-center gap-3 flex">
                  <div className="lg:w-[180px] xl:w-[200px] xl:h-[200px] p-2.5 bg-neutral-500 rounded-[20px] justify-center items-center flex">
                    <img
                      className="lg:w-[160px] xl:w-[180px] xl:h-[180px]"
                      src="https://demo.fitaja.id/assets/img/qr-download-fitaja.png"
                      alt="QR Download Fitaja"
                    />
                  </div>
                  <a
                    href="https://myqrcode.mobi/2fe2e6f0"
                    target="_blank"
                    className="p-2 lg:w-full bg-neutral-500 rounded-lg justify-center items-center gap-2.5 flex text-primary-200 text-lg font-normal font-roboto leading-relaxed hover:font-semibold hover:transition-all"
                  >
                    Download Sekarang!
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
        <section className="hidden md:flex w-full py-2 justify-center items-center shrink-0">
          <a href="/kebijakan-privasi" >
            <div className="text-white text-lg font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
              Kebijakan Privasi
            </div>
          </a>
          <div className="w-[2px] h-4 rounded-lg ring-primary-400 bg-primary-400 mx-4 flex justify-center" />
          <a href="/syarat-ketentuan" >
            <div className="text-white text-lg font-semibold font-roboto leading-relaxed hover:underline hover:font-bold">
              Syarat &amp; Ketentuan
            </div>
          </a>
        </section>
        <section className="w-full py-2.5 bg-primary-100 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-xs leading-none text-neutral-500 font-roboto sm:text-sm md:text-xs">
            Hak Cipta © 2024 FitAja. All Rights Reserved.
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer;