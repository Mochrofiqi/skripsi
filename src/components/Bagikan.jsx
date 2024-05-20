import { useState } from "react";
import Toast from "./Toast";

const Bagikan = () => {
  const [showToast, setShowToast] = useState(false);
  const handleBagikan = () => {
    setShowToast(true);
  };
  return (
    <>
      <Toast
        isShow={showToast}
        isHide={() => setShowToast(false)}
        message="Berita berhasil dibagikan"
      />
      <div className="flex w-full justify-end mt-2">
        <div
          onClick={handleBagikan}
          className="flex cursor-pointer hover:bg-primary-100 items-center bg-primary-200 px-6 py-2.5 gap-4 rounded-2xl"
        >
          <img src="/send 1.png" alt="Bagikan" />
          <p className="text-white font-bold text-lg">Bagikan Berita</p>
        </div>
      </div>
    </>
  );
};

export default Bagikan;