import React, { useState } from "react";
import Loader from "../../component/Loader";
import { getProducts } from "../../services/Api";
import {Product} from "../../interface/Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const products = await getProducts(8);
      setProducts(products);
      console.log(products);
    };
    loadData();
  }, []);

  if (products.length < 1) return <Loader />;
  return (
    <div class="flex flex-col w-full">
      <div class="overflow-x-auto ">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
         <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Buy/Sell Price
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sizes
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                {products.map((product:Product) => (
                  <tr>
                   
                    <td class="px-6 py-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-8 w-8 rounded-full"
                            src={product?.downloadURL[0]}
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {product.id}
                          </div>
                          <div class="text-sm text-gray-500">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-2 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {product.purchasePrice}/ {product.price}
                      </div>
                    </td>

                    <td class="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                      {product?.size?.map((size) => (
                        <span
                          className={`inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-white bg-purple-500 rounded`}
                        >
                          {size}
                        </span>
                      ))}
                    </td>
                    <td class="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
               <div className="flex">
                   <span title="edit"  data-tooltip-target="tooltip-default"><svg   class="h-6 w-6 m-2 text-purple-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                   </span> 
                   
                   <span title="delete">  <svg  class="h-6 w-6 m-2 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                   </span>     </div>    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="flex justify-center p-3">
              <nav aria-label="Page navigation example">
                <ul class="flex list-style-none">
                  <li class="page-item">
                    <a
                      class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
