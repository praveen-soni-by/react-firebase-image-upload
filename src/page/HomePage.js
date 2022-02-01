import React, { useState } from "react";
import Banner from "../component/Banner";
import Card from "../component/Card";
import {getProducts} from '../services/Api';

export default function Product() {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const products = await getProducts(8)
      setProducts(products);
    };
    loadData();
  }, []);


  return (
    <>
      <Banner />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-2 lg:max-w-6xl lg:px-2">
          <h1 className="text-2xl p-8 font-bold">Newly Arrived</h1>
          <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((prod) => (
              <Card data={prod}/>
            ))}
          </div>
          
        </div>
        
        <div className="container"> 

        <div class="container mx-auto">
    <div class="grid-cols-3 p-20 space-y-2  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2">
        <div class="w-full rounded">
            <img src="https://billaberry.com/wp-content/uploads/2018/12/IMG_0772-min.jpg"
                alt="image"/>
        </div>
        <div class="w-full col-span-2 row-span-2 rounded">
            <img src="https://media.istockphoto.com/photos/mens-loafer-shoe-picture-id537792171?b=1&k=20&m=537792171&s=170667a&w=0&h=Dj88cLwM2URxKYZNrDS2KRHQemIfuaS1S3isTd1Eahs="
                alt="image"/>
        </div>
        <div class="w-full rounded">
            <img src="https://media.gq.com/photos/609d865bae317df95ced1285/master/w_1280%2Cc_limit/Alden-snuff-suede-tassel-loafer.jpg"
                alt="image"/>
        </div>
       
    </div>
</div>
       
      </div>

      
      </div>
    </>
  );
}
