import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="relative h-[580px]">
                <div
                    className={`absolute h-full inset-0 flex items-center justify-center bg-white/50 transition-opacity duration-500 `}
                >
                    <div className="relative">
                        <Image
                            src="/images/red-spinner-ic.svg"
                            alt="Logo"
                            width={110}
                            height={80}
                            className="relative z-10 animate-spin"
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader