import { database } from "../firebase/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export const getProducts = async (recordSize) => {
    if(!recordSize){
        return await fetchProducts(productQuery());
    }
  return await fetchProducts(productQueryWithLimit(recordSize));
};

const productQueryWithLimit =(limitValue)=>{
    return query(
        collection(database, "products"),
        orderBy("createdAt", "asc"),
        limit(limitValue)
      );
}


const productQuery =()=>{
    return query(
        collection(database, "products"),
        orderBy("createdAt", "asc")
      );
}

const fetchProducts= async(q)=>{
    const productList = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            productList.push(doc.data());
        });
        return productList;
    }
