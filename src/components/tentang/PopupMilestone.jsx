import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/swiper.css";
import "../../index.css";

export default function PopupMilestone(props) {

  return (
    <div
      className={`fixed inset-0 z-50 mx-auto w-full flex items-center justify-center bg-black bg-opacity-50 ${props.isShow ? "block" : "hidden"
        } modal`}
      id="modal-1"
    >
      <div className="w-4/5 mt-16 h-5/6">
        <div className="flex absolute top-16 right-12 m-4 cursor-pointer flex-col items-center">
          <div onClick={props.isHide} className="absolute top-0 right-0 m-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-8 p-2 text-right rounded-full close-modal hover:bg-neutral-300 hover:text-white"
              fill="black" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="w-2/3 text-center items-center rounded-3xl bg-white p-8"></div>
        </div>

        <div className="flex flex-col rounded-3xl justify-center py-4 swiper-slide">
          <div className="flex justify-center mx-16 h-4/6">
            <img
              className="object-contain w- aspect-video rounded-3xl"
              src="/public/tim/milestone.jpg"
            />
          </div>
          <h3 className="mt-4 text-2xl font-medium break-words overflow-hidden text-center text-primary-100">
          Peluncuran Aplikasi FitAja! oleh KBUMN
          </h3>
          <p className="mt-3 mx-10 break-words overflow-hidden text-base text-center">
            Pada Jumat, 23 Juli 2021 telah dilakukan penandatangan MOU kerja sama pengembangan aplikasi FitAja! oleh 8 perusahaan BUMN yang bergerak di bidang ekosistem kesehatan, dan dilanjutkan dengan peluncuran aplikasi FitAja! dihadapan Menteri BUMN didampingi Wakil Menteri I & Wakil Menteri II KBUMN, serta Direksi Perusahaan di Ekosistem Kesehatan BUMN.
          </p>
        </div>
      </div>
    </div>
  );
}
