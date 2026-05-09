"use client"
import { faqs } from '@/app/data/faqdata';
import React, { useState } from 'react'

const Faqsection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div className="px-4 md:px-8 mt-6">
                <div className="border border-slate-300 divide-y divide-slate-300 rounded-md max-w-7xl mx-auto dark:border-neutral-700 dark:divide-neutral-700">
                    {faqs.map((faq, index) => {
                      
                        return (
                            <>

                            </>

                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Faqsection