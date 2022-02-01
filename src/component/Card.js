import React from "react";

export default function Card({ data ,color="purple-500"}) {
  return (
    <div
      key={data?.id + data.name}
      className="container mx-auto w-56  animate-fade 
transform transition duration-300 hover:scale-105
hover:shadow-lg"
    >
      <div className="group relative">
        <div
          className="w-full min-h-60 h-64  p-2 aspect-w-1 aspect-h-1 rounded-md 
overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none"
        >
          <img
            src={data?.downloadURL[0]}
            alt="Images"
            className="w-full h-full 

lg:w-full lg:h-full"
          />
        </div>
        <div className="py-2 px-2 flex justify-between bg-slate-50   ">
          <div>
            <div className={`bg-${color} items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block`}>
              {data.name}
            </div>
            <div className="mt-2 text-sm text-gray-500 rounded">
              {data?.size?.map((size) => (
                <span className={`inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-white bg-${color} rounded-full`}>
                  {size}
                </span>
              ))}
            </div>
          </div>
          <p className="text-md font-medium p-4  rounded-lg text-gray-900">
            ₹ {data.price}
          </p>
        </div>
      </div>
    </div>
  );
}
