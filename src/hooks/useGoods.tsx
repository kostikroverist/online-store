import { useState } from "react";
import {  getAllProducts } from "../service/service";
import { Product } from "../interface/interfaces";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
        const data: Product[] = await getAllProducts(); // Очікуємо масив
        setProducts(data); // Передаємо масив товарів
      } catch (err) {
        console.log(err);
      }
  };
  return {
    products,
    getProducts,
  };
};

export default useProducts;
