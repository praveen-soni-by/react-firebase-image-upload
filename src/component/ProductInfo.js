import React from 'react'

export default function ProductInfo() {
    return (
        <div
            className="relative overflow-hidden md:flex w-1/3 bg-gradient-to-tr from-purple-300 to-blue-600 i justify-around items-center hidden">
            <div className="flex flex-col">
                <h1 className="text-white font-bold text-4xl font-sans px-4">Product Uploader</h1>
                <span className="text-sm py-5 text-center text-white justify-end ">Used to Upload Product Information Including images</span>

                <span className="text-sm py-5 text-center absolute  bottom-2 text-white justify-end ">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full ml-2">React js</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-purple-600 rounded-full ml-2">Firebase</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full ml-2">Tailwind</span>
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100  rounded-full ml-2">Created By - Praveen Soni</span>

                </span>

            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-10 -right-50 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-10 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-10 -right-10 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
    )
}
