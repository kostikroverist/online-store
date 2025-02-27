import React, { useEffect } from 'react'
import useProducts from '../../hooks/useGoods';

const Cards = () => {
    const { getProducts, products } = useProducts();
    useEffect(() => {
      getProducts();
    }, []);
    console.log(products)
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          🎻 Instruments List
        </h1>
        <ul className="divide-y divide-gray-200">
          {products.map((instrument) => (
            <li key={instrument.id} className="py-2 px-4 hover:bg-gray-100 rounded-md">
              {instrument.title}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Cards
