import React from 'react'

export default function TextField({label,type,value,onChange,id,...props}) {
    return (
        <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
            <label className="label" >
                {label}
            </label>
        </div>
        <div className="md:w-2/3">
            <input className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id={id} type={type}
  {...props}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    </div>
    )
}
