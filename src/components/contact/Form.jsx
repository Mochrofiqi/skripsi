import React, { useState } from "react";
import '../../styles/swiper.css';

const Form = () => {
    const categoryList = [
        {
            id: 1,
            name: "Layanan",
        },
        {
            id: 2,
            name: "Bisnis",
        },
        {
            id: 3,
            name: "Karir",
        }
    ];

    const [showInfo, setShowInfo] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [category, setCategory] = useState("");

    const handleShowCategory = () => {
        setShowCategory(!showCategory);
        if (!showCategory) {
            document.addEventListener('click', handleDocumentClick);
        } else {
            document.removeEventListener('click', handleDocumentClick);
        }
    };

    const handleDocumentClick = (event) => {
        if (event.target.id !== 'custom-dropdown') {
            setShowCategory(false);
            document.removeEventListener('click', handleDocumentClick);
        }
    };

    const handleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    const handleCategory = (e) => {
        setCategory(e.target.innerText);
        setShowCategory(!showCategory);
    };

    return (
        <div className="mt-4 overflow-hidden md:py-16 lg:pt-16 px-14 md:px-28 lg:px-28">
            <div
                id="form-question"
                className="flex flex-col-reverse items-center gap-8 md:items-end md:justify-between md:flex-row align-self-stretch"
            >
                <div
                    data-aos="fade-right"
                    data-aos-delay={250}
                    className="relative flex flex-col items-start w-full gap-4 m-auto md:w-7/12 lg:w-3/5"
                >
                    <div>
                        <h3 className="pb-4 text-3xl text-black md:text-4xl lg:text-4xl">
                            Punya Pertanyaan?
                        </h3>
                        <h4 className="text-xl font-medium md:text-3xl lg:text-3xl text-primary-100">
                            Lengkapi formulir pertanyaan di bawah ini
                        </h4>
                    </div>
                    <form id="contact-us-form" method="POST" className="w-full">
                        <div className="space-x-4 p-[10px] flex flex-col self-center items-start">
                            <div className="relative z-0 flex items-start self-stretch group">
                                <input
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    className="border-b-[1px] px-3 border-black w-full block py-2.5 mt-6 xs:mt-0 md:mt-6 2md:mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 border-0  font-roboto text-neutral-200 peer"
                                    placeholder=" "
                                    required=""
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="nama"
                                    className="peer-focus:font-roboto peer-focus:font-medium absolute left-1 text-semibase text-neutral-300 duration-300 transform w-[200px] xs:w-full md:w-[200px] 2md:w-full -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:max-w-[300px]"
                                >
                                    Masukkan Nama atau Nama Perusahaan
                                    <span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-x-4 p-[10px] flex flex-col self-center items-start">
                            <div className="relative z-0 flex items-start self-stretch group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="px-3 border-b-[1px] border-black block w-full py-2.5 bg-transparent appearance-none focus:outline-none focus:ring-0 border-0  font-roboto text-neutral-200 peer"
                                    placeholder=" "
                                    required=""
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="email"
                                    className=" peer-focus:font-roboto peer-focus:font-medium absolute left-1 text-semibase text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Masukkan Alamat Email<span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-x-4 p-[10px] flex flex-col self-center items-start">
                            <div className="relative flex items-start self-stretch group">
                                <input
                                    type="tel"
                                    id="telp"
                                    name="telp"
                                    className=" px-3 border-b-[1px] border-black w-full block py-2.5 bg-transparent appearance-none focus:outline-none focus:ring-0 border-0 font-roboto text-neutral-200 peer"
                                    onkeypress="return onlyNumberKey(event)"
                                    minLength={10}
                                    placeholder=" "
                                    required=""
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="telp"
                                    className="z-0 peer-focus:font-roboto peer-focus:font-medium absolute left-1 text-semibase text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Masukkan Nomor Telepon<span className="text-red-500">*</span>
                                </label>
                                <div
                                    id="myModal"
                                    className={`absolute z-[7] ${showInfo ? "" : "hidden"
                                        } transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 md:-right-12 lg:-right-12 md:-bottom-0 lg:-bottom-0`}
                                >
                                    <div className="modal-content w-[200px] md:w-[250px] lg:w-[250px] h-48 md:h-53 lg:h-56 text-start rounded-2xl bg-neutral-500 shadow-md"
                                    style={{
                                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1), 0px 0px 5px rgba(0, 0, 0, 0.1)"
                                    }}>
                                        <div className="flex flex-col items-center gap-2 px-4 py-8">
                                            <div className="h-7 w-7 md:h-10 lg:w-14 lg:h-14">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    style={{
                                                        fill: "rgb(16, 17, 19)",
                                                        transform: "",
                                                        msfilter: "",
                                                    }}
                                                >
                                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                                    <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
                                                </svg>
                                            </div>
                                            <p className="px-2 py-1 text-xs text-justify md:px-4 lg:px-4 md:py-2 lg:py-2 font-roboto text-neutral-200">
                                                Keamanan nomor Anda adalah prioritas kami. Kami tidak
                                                akan memberikannya kepada pihak lain tanpa izin Anda.
                                            </p>
                                        </div>
                                        <div
                                            onClick={handleShowInfo}
                                            className="absolute closeModal right-1 top-1 shrink-0 hover:cursor-pointer hover:bg-gray-400 hover:rounded-full"
                                        >
                                            <div className="w-10 h-10 md:h-10">
                                                <svg
                                                    onClick={handleShowInfo}
                                                    viewBox="0 0 50 50"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{ filter: "grayscale(0%)", transition: "filter 0.3s ease-in-out" }}
                                                >
                                                    <path
                                                        d="M17.8594 17.8572L32.1451 32.1429M32.1451 17.8572L17.8594 32.1429"
                                                        stroke="black"
                                                        strokeWidth="1.52381"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    onClick={handleShowInfo}
                                    className="absolute buttonSvg right-4 bottom-4 hover:cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{
                                            fill: "rgb(16, 17, 19)",
                                            transform: "",
                                            msfilter: "",
                                        }}
                                    >
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                        <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="space-x-4 p-[10px] relative z-[5] group">
                            <div className="relative border-b-[1px] border-black">
                                <div
                                    onClick={handleShowCategory}
                                    id="custom-dropdown"
                                    className="cursor-pointer flex pl-3 text-black text-sm bg-transparent py-2.5 rounded-sm font-roboto w-full"
                                >
                                    <p className="w-[180px] xsm:w-full">
                                        {category === "" ? "Silakan pilih kategori pertanyaan" : category}
                                    </p>
                                </div>
                                <svg
                                    className={`absolute right-[16px] top-0 -z-10 ${showCategory ? "rotate-180" : ""
                                        }`}
                                    id="arrow-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div
                                    id="custom-options"
                                    className={`${showCategory ? "" : "hidden"
                                        } absolute text-center w-64 top-7 rounded-2xl py-6 px-2 bg-neutral-500 mt-1 -right-5 xsm:right-0 shadow-md`}
                                    style={{
                                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1), 0px 0px 5px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        {categoryList.map((category) => (
                                            <div
                                                onClick={handleCategory}
                                                className=" w-3/4 px-6 py-2 text-sm cursor-pointer font-roboto text-info-200 hover:bg-info-200 hover:rounded-md hover:text-white"
                                            >
                                                {category.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    id="kategori"
                                    name="kategori"
                                    style={{ display: "none" }}
                                />
                                <label className="absolute left-1 text-semibase text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0]">
                                    Kategori Pertanyaan<span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="space-x-4 p-[10px] flex flex-col self-center items-start">
                            <div className="relative z-0 flex items-start self-stretch group">
                                <input
                                    type="text"
                                    id="pertanyaan"
                                    name="pertanyaan"
                                    className="px-3 border-b-[1px] border-black w-full block py-2.5 bg-transparent appearance-none focus:outline-none focus:ring-0 border-0  font-roboto text-neutral-200 peer"
                                    placeholder=" "
                                    required=""
                                    autoComplete="off"
                                />
                                <label
                                    htmlFor="pertanyaan"
                                    className="peer-focus:font-roboto peer-focus:font-medium absolute left-1 text-semibase text-neutral-300 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Tuliskan Pertanyaan Kamu
                                    <span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center self-stretch justify-center w-full px-4 py-2 mt-2 text-semibase font-medium transition-all duration-300 border rounded-2xl bg-primary-200 text-neutral-50 font-roboto hover:bg-primary-100"
                        >
                            Kirim
                        </button>
                    </form>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay={250}
                    className="flex items-center justify-center w-full h-full -z-10 md:w-5/12 md:h-1/2 lg:w-2/5 lg:h-full"
                >
                    <img
                        className="object-cover"
                        src="/logo_contact.svg"
                        alt="Customer Service Logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
