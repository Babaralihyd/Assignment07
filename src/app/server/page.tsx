// src/app/about/page.tsx

import React from 'react';

interface TRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: string;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

// This is a server-side function to fetch the data directly within the component.
const fetchRecipes = async (): Promise<TRecipe[]> => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes || [];
};

const AboutPage = async () => {
  const recipes = await fetchRecipes();

  return (
    <div className='font-normal'>
      <h1 className='font-normal justify-center iterm-center  text-center mt-6 mb-4 text-[50px] text-red-600 bg-slate-500   rounded-[20px] shadow-2xl '>Flavors of the World</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow-lg">
            {/* Image Section */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="mt-5">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-sm text-gray-500">{recipe.cuisine}</p>
              <p className="mt-2">{recipe.servings} servings</p>
              <p className="text-sm">
                Rating: {recipe.rating} ({recipe.reviewCount} reviews)
              </p>
            </div>
            <button className="mt-4 bg-slate-600 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                    Add to Cart
                  </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
