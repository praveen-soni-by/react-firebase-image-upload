import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader";
import AdminRoutes from "../../routes/AdminRoutes";
import AppRoutes from "../../routes/AppRoutes";
import ProductUpload from "./ProductUpload";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  return (
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div class="flex flex-col w-full md:w-64 divide-y-2  divide-gray-100 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a
            href="#"
            class="text-xl font-semibold tracking-widest text-whiteuppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Devansh Collection
          </a>
          <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"></button>
        </div>
        <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ">
          <Link
            to="/admin/products"
            className={`block px-4 py-2 mt-2 text-sm font-semibold text-black focus:text-white    rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-whitefocus:text-whitehover:bg-purple-900 focus:bg-purple-900 focus:outline-none focus:shadow-outline
            ${pathname === "" ? "active" : ""}
            ${pathname === "/admin/products" ? "active" : ""}
            `}
            href="#"
          >
            <div className="flex">
              <svg
                class="h-6 w-6 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <line x1="9" y1="12" x2="9.01" y2="12" />
                <line x1="13" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="9.01" y2="16" />
                <line x1="13" y1="16" x2="15" y2="16" />
              </svg>
              <span className="text-md px-3">Products</span>
            </div>
          </Link>
          <Link
            to="/admin/upload"
            className={`block px-4 py-2 mt-2 text-sm font-semibold text-black focus:text-white    rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-whitefocus:text-whitehover:bg-purple-900 focus:bg-purple-900 focus:outline-none focus:shadow-outline
          ${pathname === "/admin/upload" ? "active" : ""}
          `}
            href="#"
          >
            <div className="flex">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="text-md px-3">Upload</span>
            </div>
          </Link>
        </nav>
      </div>
      <div class="bg-slate-100  flex w-full  ">
        <AdminRoutes />
      </div>
    </div>
  );
}
