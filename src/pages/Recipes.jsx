import React, { useState } from "react";
import recipes from "../Recipes";
import Modal from "../components/Modal";
import RecipeModal from "../components/RecipeModal";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Filter the recipes based on the search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change in the search bar
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle recipe click and open the modal
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="mx-auto my-8 min-h-screen">
      <div>
        {/* ... */}
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
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Recipes;
