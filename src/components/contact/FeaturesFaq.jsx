import React, { useState } from 'react'
import FaqKesehatan from './FaqKesehatan';
import FaqAsuransi from './FaqAsuransi';
import Faq from './Faq';

function FeaturesFaq() {
    const [tab, setTab] = useState("umum");

    return (
        <>
            <div className="flex text-xl gap-2.5 overflow-hidden tab-content mx-28 mt-14">
                <button
                    className={`focus:outline-none ${tab === "umum"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("umum")}
                >
                    Umum
                </button>
                <button
                    className={`focus:outline-none ${tab === "asuransi"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("asuransi")}
                >
                   Asuransi
                </button>
                <button
                    className={`focus:outline-none ${tab === "kesehatan"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("kesehatan")}
                >
                    Kesehatan
                </button>
            </div>


            {tab === "umum" && (
                <>
                    <Faq/>
                </>
            )}
            {tab === "asuransi" && (
                <>
                   <FaqAsuransi/>
                </>
            )}
            {tab === "kesehatan" && (
                <>
                    <FaqKesehatan/>
                </>
            )}
        </>
    )
}

export default FeaturesFaq
