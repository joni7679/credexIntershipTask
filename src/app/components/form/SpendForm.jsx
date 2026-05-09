import { aiTools } from '@/app/data/aiData'
import { Plus } from 'lucide-react'
import React from 'react'

const SpendForm = () => {
    return (
        <>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='mt-11 border border-gray-400 shadow-lg  max-w-lg rounded-2xl p-5'>
                    <h3 className='capitalize text-center mt-5'>add your tools name </h3>
                    <form className="px-4 mt-10 w-full">
                        <div className="w-full mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                <div className="relative">
                                    <label for="first-name"
                                        className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900">
                                        Ai tool name
                                    </label>
                                    <select name="" id="" className="block w-full px-4 py-3 text-sm text-slate-900 bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600">
                                        {
                                            aiTools.map((tool, index) => {
                                                return (
                                                    <option key={tool.id} value={tool.toolName}>
                                                        {tool.toolName}
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="relative">
                                    <label for="first-name"
                                        className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900">
                                        Current Plan
                                    </label>
                                    <select name="" id="" className="block w-full px-4 py-3 text-sm text-slate-900 bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600">
                                      
                                    </select>
                                </div>
                                <div className="relative">
                                    <label for="email"
                                        className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900">
                                        Monthly spend
                                    </label>
                                    <input type="number" id="number" name="number" required
                                        className="block w-full px-4 py-3 text-sm text-slate-900 bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                </div>
                                <div className="relative">
                                    <label for="phone"
                                        className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900">
                                        Active sets
                                    </label>
                                    <input type="number" id="sets" name="sets"
                                        className="block w-full px-4 py-3 text-sm text-slate-900 bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                </div>

                                <div className="relative w-full">
                                    <label for="state"
                                        className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900 capitalize">
                                        total team size
                                    </label>
                                    <input type="text" id="state" name="state" placeholder="New York" required
                                        className="block w-full px-4 py-3 text-sm text-slate-900 bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                                </div>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div className=' flex items-center justify-center gap-1.5 cursor-pointer'>
                                    <Plus className='text-blue-800 ' />
                                    <span className='text-blue-800 capitalize'>
                                        add another tool
                                    </span>
                                </div>
                                <button type="submit"
                                    className="mt-8 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    Run Audit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SpendForm