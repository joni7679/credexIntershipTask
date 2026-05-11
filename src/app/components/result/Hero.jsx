import Image from 'next/image'
import React from 'react'
const Hero = () => {
    return (
        <>
            <section className="py-6 px-4 md:px-8 min-h-screen">
                <div className="max-w-3xl mx-auto lg:max-w-7xl h-full">
                    <div className="grid items-center gap-x-12 gap-y-16 lg:grid-cols-2 h-full">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">you can save 2,480/ month</h2>
                            <span className='px-2 py-1 text-sm rounded-2xl bg-green-300 text-green-700'>500 saving</span>
                            <div className="mt-8 flex items-center flex-wrap gap-4 border border-gray-400">

                            </div>
                        </div>
                        <div className="w-full bg-blue-400 h-full">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero