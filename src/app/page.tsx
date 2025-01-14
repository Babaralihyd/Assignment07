import Link from "next/link";
import React from "react";


const Page = () => {
  return (
    <div className="min-h-screen bg-gray-500 from-red-80 via-purple-80 to-blue-200 flex flex-col items-center justify-center px-9">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-lg w-full text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-2xl text-red-500  font-normal mb-6">
          Master Data Fetching Techniques with Ease
        </h1>
        <p className= " font-medium text-gray-600 mb-8 leading-relaxed">
        Dive into the world of modern web development and learn about the different data fetching techniques for{" "}{" "}
          <span className="font-semibold text-red-600">Client Side</span> and{" "}
          <span className="font-semibold text-orange-500">Server Side</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          <Link
            href="/server"
            className="w-full md:w-auto bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 focus:ring focus:ring-blue-300 focus:outline-none transition duration-300"
          >
              Recipes <span className="font-semibold">(Server Side)</span>
          </Link>
        
     
          <Link
            href="/Client"
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 focus:ring focus:ring-purple-300 focus:outline-none transition duration-300"
          >
           Products  <span className="font-semibold">(Client Side)</span>
          </Link>
        </div>
        <Link
          href="about/"
          className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-black transition duration-200"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Page;
