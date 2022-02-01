import React from 'react';

export default function Banner() {
  return <section className="bg-white">
  <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
    <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="w-full px-9 md:w-1/2">
          <img
          alt="Banner"
            className="object-center 
            w-full h-full rounded-lg max-h-48 sm:max-h-64 animate-fade"
            src="
            https://firebasestorage.googleapis.com/v0/b/devansh-collection.appspot.com/o/IMG20220126160449.png?alt=media&token=87351570-db42-412a-9c74-f0ad63e7ae97"
          />
       
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
          <div className="bg-purple-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white ">
            <svg
              className="w-3.5 h-3.5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>Featured</span>
          </div>
          <h1 className="text-4xl font-bold leading-none lg:text-3xl xl:text-4xl">
            <a href="#_">
              “I still have my feet on the ground, I just wear better
              shoes.”
            </a>
          </h1>
          <p className="pt-2 text-sm font-medium">by — Oprah Winfrey.</p>
        </div>
      </div>
    </div>
  </div>
</section>

}
