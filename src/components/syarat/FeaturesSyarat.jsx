import React, { useState } from 'react'
import SyaratKetentuan from './SyaratKetentuan';
import SyaratKetentuanEnglish from './SyaratKetentuanEnglish';

function FeaturesSyarat() {
    const [tab, setTab] = useState("indo");

    return (
        <>
            <div className="flex text-xl gap-2.5 overflow-hidden tab-content mx-36 mt-14">
                <button
                    className={`focus:outline-none ${tab === "indo"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("indo")}
                >
                    Indonesia
                </button>
                <button
                    className={`focus:outline-none ${tab === "english"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("english")}
                >
                    English
                </button>
            </div>


            {tab === "indo" && (
                <>
                    <SyaratKetentuan/>
                </>
            )}
            {tab === "english" && (
                <>
                   <SyaratKetentuanEnglish/>
                </>
            )}
        </>
    )
}

export default FeaturesSyarat
