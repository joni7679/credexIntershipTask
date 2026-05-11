import { auditFeatures } from '@/app/data/auditFeatures'
import React from 'react'

const AuditFeatures = () => {
    return (
        <>
            <section>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"'>
                    {auditFeatures.map((feature, index) => {
                        const { title, description, icon } = feature;
                        const Icon = icon
                        return (

                            <div key={index}
                                className="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 p-4 sm:p-6">
                                <div>
                                    <Icon />
                                    <h3 className="text-slate-900 text-base font-semibold  mt-5">{title}</h3>
                                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default AuditFeatures