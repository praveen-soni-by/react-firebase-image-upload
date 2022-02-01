import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="w-full px-8 text-gray-700 bg-white sticky top-0 z-50">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-2xl font-black leading-none text-gray-900 select-none">
              Devansh Collection<span className="text-purple-600">.</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <Link
              to="/"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="products"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Women
            </Link>
            <Link
              to="products"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Men
            </Link>
            <Link
              to="upload"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
