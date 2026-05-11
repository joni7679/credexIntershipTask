import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-6 py-12">
                <div className="mb-6">
                    <span className="px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full shadow-sm">
                        ✨ NEW: GENERATIVE AI COST ANALYSIS
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-center text-black leading-tight max-w-4xl">
                    Stop Overpaying for AI <br />
                    <span className="text-blue-600">Tools</span>
                </h1>
                <p className="mt-6 text-center text-gray-600 text-lg max-w-2xl leading-relaxed">
                    Connect your accounts and let our AI engine identify redundant
                    subscriptions, unused seats, and hidden savings in your software stack.
                    Professional-grade auditing for modern finance teams.
                </p>
                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                    <Link href={`/audit`} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300">
                        Start Your Free Audit
                    </Link>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-black font-semibold px-8 py-4 rounded-xl shadow-sm transition duration-300">
                        View Demo
                    </button>
                </div>
                <div className="mt-14 w-full max-w-5xl">
                    <div className="bg-gradient-to-br from-[#051923] via-[#0b2d3d] to-[#03131b] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                            alt="Dashboard"
                            className="w-full h-[420px] object-cover opacity-90"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero