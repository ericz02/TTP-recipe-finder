import React, { useState } from "react";
import AddRecipeModal from "../components/AddRecipeModal";
import RecipeModal from "../components/RecipeModal";
import recipes from "../Recipes";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAddRecipeModalOpen, setIsAddRecipeModalOpen] = useState(false);
  const [recipeList, setRecipeList] = useState(recipes);

  const filteredRecipes = recipeList.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const handleAddRecipeModalOpen = () => {
    setIsAddRecipeModalOpen(true);
  };

  const handleAddRecipeModalClose = (newRecipe) => {
    if (newRecipe) {
      setRecipeList((prevRecipes) => [...prevRecipes, newRecipe]);
    }
    setIsAddRecipeModalOpen(false);
  };

  return (
    <div className="mx-auto my-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Welcome to Recipe Finder</h1>
      <p className="text-xl text-center">Find and discover delicious recipes for every occasion.</p>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleAddRecipeModalOpen}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-[20px] rounded"
          >
            Add Recipe
          </button>

          <div className="mr-4">
            <input
              type="text"
              placeholder="Search recipes"
              value={searchTerm}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-96"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 ml-5 text-gray-800">Featured Recipes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-4 cursor-pointer"
              onClick={() => handleRecipeClick(recipe)}
            >
              <h3 className="text-lg font-bold mb-4">{recipe.title}</h3>
              <img
                className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80"
                src={recipe.imageSrc}
                alt={recipe.title}
              />
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>

      {isAddRecipeModalOpen && (
        <AddRecipeModal onClose={handleAddRecipeModalClose} setRecipes={setRecipeList} initialRecipes={recipeList} />
      )}
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />}
    </div>
  );
};

export default Recipes;
