import { featuresData } from '@/app/data/featuresData'
import React from 'react'

export const Card = () => {
    return (
        <>
            {
                featuresData.map((val, index) => {
                    const { title, description, icon } = val
                    const Icon = icon
                    return (
                        <div key={index} className="b border border-slate-200  w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden bg-white  shadow-md">
                            <div className="p-4 sm:p-6 text-center">
                                    <Icon />
                                <h3 className="text-slate-900 text-base font-semibold ">{title}</h3>
                                <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
