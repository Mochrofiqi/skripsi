import React, { useState } from 'react'
import KebijakanPrivasi from './KebijakanPrivasi';
import KebijakanPrivasiEnglish from './KebijakanPrivasiEnglish';

function FeaturesKebijakan() {
    const [tab, setTab] = useState("indonesia");

    return (
        <>
            <div className="flex text-xl gap-2.5 overflow-hidden tab-content mx-28 mt-14">
                <button
                    className={`focus:outline-none ${tab === "indonesia"
                            ? "bg-primary-200 text-white"
                            : "bg-primary-400 text-white"
                        } font-semibold py-2 px-4 w-56 text-center rounded-xl`}
                    onClick={() => setTab("indonesia")}
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


            {tab === "indonesia" && (
                <>
                    <KebijakanPrivasi/>
                </>
            )}
            {tab === "english" && (
                <>
                <KebijakanPrivasiEnglish/>
                </>
            )}
        </>
    )
}

export default FeaturesKebijakan
