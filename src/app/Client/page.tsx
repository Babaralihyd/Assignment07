"use client";

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number }; 
}

const ClientPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const product = await response.json();
      console.log(product);
      setData(product || []); 
      setLoading(false);
    };

    fetchData(); 
  }, []); 
  return (
    <div>
      <div className="min-h-screen justify-center iterms-center text-center  bg-orange-500 rounded-3xl m-50">
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50 bg-gray-500">
            <h1>Please wait.........</h1>
          </div>
        ) : (
          <div>
            <div
              className="flex justify-center items-center font-normal text-[50px] my-14 bg-red-500 rounded-2xl "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1600"
            >
              <h1 className='font-medium shadow-2xl text-indigo-700'>IMRAN&apos; MARKET</h1>
            </div>

          
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
       {data.map((product) => (
     <div
      key={product.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover" 
      />
              <div className="p-4">
               <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
               <p className="text-sm text-gray-600 font-normal mt-5">{product.description}</p>
        
           
                <div className="flex flex-col items-center mt-5">
                 <div className="text-xl font-bold text-red-500 mb-4">
                      ${product.price?.toFixed(2) || 'N/A'}
                </div>
                       <button
                            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-red-600"
                       aria-label={`Add ${product.title} to cart`}
          >
                           Add to Cart
                       </button>
                              </div>

                        {/* Rating */}
                          <div className="text-sm text-red-500 mt-">
                       Rating: {product.rating?.rate || 'N/A'} ({product.rating?.count || 0} reviews)
                   </div>
               </div>
                </div>
                ))}
             </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPage;