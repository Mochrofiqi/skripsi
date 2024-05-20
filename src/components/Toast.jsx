const Toast = (props) => {
  return (
    <div
      className={`fixed inset-0 z-50 mx-auto m-auto w-full flex items-center justify-center bg-black bg-opacity-50 ${props.isShow ? "block" : "hidden"
        } modal`}
      id="modal-1"
    >
      <div className="w-[75%] h-[40%] bg-white rounded-2xl animate-slidedown">
        <div
          onClick={props.isHide}
          className="flex justify-end m-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 p-2 text-right rounded-full close-modal hover:bg-neutral-300 hover:text-white"
            fill="black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <img
            src="/down-arrow 1.svg"
            alt="Success"
            className="w-24 h-24"
          />
          <button onClick={props.isHide}
            className="m-auto flex items-center justify-center transition-all duration-300 bg-white border-2 lg:mt-4 py-2 px-16 rounded-3xl border-primary-200 hover:border-primary-200 hover:bg-primary-200 hover:transition-colors hover:duration-500 text-primary-200 hover:text-white">
            <h2 className="text-lg font-semibold">
              {props.message}
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
