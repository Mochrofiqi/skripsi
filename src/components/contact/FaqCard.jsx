import React from "react";

const FaqCard = (props) => {
    return (
        <div className="relative overflow-hidden w-full rounded-tl-[32px] rounded-tr-lg flex-col justify-start items-start inline-flex">
          <input
            type="checkbox"
            className="faq-toggle absolute inset-x-0 top-0 z-10 w-full h-full opacity-0 cursor-pointer peer"
          />
          <div className="peer-checked:bg-primary-100 transition-all duration-500 self-stretch min-h-[4rem] px-5 py-4 bg-primary-300 rounded-tl-[32px] rounded-br-[32px] peer-checked:rounded-br-none rounded-tr-lg rounded-bl-lg peer-checked:rounded-bl-none flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex text-white">
              <div className="grow shrink px-2 basis-0 text-lg font-semibold leading-[31.20px] mr-8">
                {props.question}
              </div>
            </div>
          </div>
          <div className="absolute text-white transition-transform duration-500 -rotate-90 top-5 right-5 peer-checked:rotate-0">
            <svg
              width="25"
              height="25"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1429 19.2857C15.1923 19.2857 19.2857 15.1923 19.2857 10.1429C19.2857 5.0934 15.1923 1 10.1429 1C5.0934 1 1 5.0934 1 10.1429C1 15.1923 5.0934 19.2857 10.1429 19.2857Z"
                stroke="currentColor"
                stroke-width="1.52381"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.67188 8.96118L10.1004 12.4675L13.529 8.96118"
                stroke="currentColor"
                stroke-width="1.52381"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="faq-container overflow-hidden transition-all duration-500 h-0 peer-checked:h-auto self-stretch bg-white rounded-bl-lg rounded-br-[32px] peer-checked:border peer-checked:border-primary-300 justify-start items-start gap-2.5 inline-flex">
            <div className="grid faq-content self-stretch px-7 py-4 text-base font-normal leading-normal grow shrink basis-0 text-neutral-900 ql-editor">
              {props.answer}
            </div>
          </div>
        </div>
    );
}

export default FaqCard;