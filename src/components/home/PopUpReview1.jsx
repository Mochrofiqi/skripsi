export default function PopUpReview1(props) {
    return (
        <>
            <div onClick={props.isHide} className={`fixed inset-0 z-50 items-center ${props.isShow ? '' : 'hidden'} justify-center bg-black bg-opacity-50 modal`}
                id="modal-1">
                <div className="fixed flex items-center justify-center w-full h-full">
                    <div
                        className="flex flex-col items-center w-11/12 max-w-lg max-h-[400px] mx-auto shadow-lg lg:w-2/3 lg:h-1/2 lg:max-w-[1200px] lg:max-h-[350px] xl:max-h-[400px] 2xl:max-h-[600px] rounded-2xl backdrop-blur-xl bg-white/50">
                        <div className="flex items-center justify-between w-full gap-1 mx-auto">
                            <div className="flex items-center justify-end w-[90%] mx-auto">
                                <img className="w-1/4 my-4 ml-4 rounded-full md:w-1/6 md:ml-8" src="/review.jpg"  alt="PERSON" />
                                <div className="flex items-center justify-end w-3/4 pl-8 my-auto text-xl font-medium text-center md:w-5/6 md:text-2xl name-modal">
                                    <h1>Christina Angel</h1>
                                    <p className="text-xl text-bold flex justify-end items-center ml-auto">
                                        Rating 4.7
                                        <div className="w-8 ml-1">
                                            <img src="/star.png" alt="Star" />
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div onClick={props.isHide} className="flex self-start justify-end w-[10%] mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 p-3 text-right rounded-full close-modal hover:cursor-pointer hover:bg-neutral-300 hover:text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <p className="w-11/12 pt-4 pb-8 mx-auto text-left break-words lg:pb-4 lg:text-lg">
                        Saya sudah menggunakan aplikasi FitAja! sejak tahun 2021. Selama menggunakan aplikasi FitAja! ada banyak manfaat yang saya rasakan. Fitur yang paling memudahkan bagi saya adalah fitur kartu digital dan juga fitur pengajuan klaim secara online. Selain itu, saya dapat melihat benefit asuransi Mandiri Inhealth saya pada aplikasi FitAja!. Alhamdulillah selama menggunakan aplikasi FitAja! saya belum mengalami pengalaman yang kurang menyenangkan. Sukses terus FitAja!.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}