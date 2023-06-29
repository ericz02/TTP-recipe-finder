import React, { useState, useEffect } from "react";

const AddRecipeModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setRecipeTitle("");
    setRecipeDescription("");
    setRecipeIngredients("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title: recipeTitle,
      imageSrc: "https://example.com/placeholder-image.jpg",
      description: recipeDescription,
      ingredients: recipeIngredients.split("\n").map((ingredient) =>
        ingredient.trim()
      ),
    };
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    console.log("Updated recipes:", updatedRecipes);
    handleModalClose();
  };

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    const handleOutsideClick = (event) => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && !modalContent.contains(event.target)) {
        handleModalClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKeyPress);
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.classList.add("modal-open");
    } else {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  return (
    <div>
      {/* Render existing recipes */}
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <img src={recipe.imageSrc} alt={recipe.title} />
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Add Recipe button */}
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 ml-2 dark:border-blue-500 
        dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        onClick={handleModalOpen}
      >
        Add a Recipe
      </button>

      {/* Recipe Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-8 w-80 modal-content">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Add a Recipe</h2>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleModalClose}
              >
                X
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="recipeTitle" className="block font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="recipeTitle"
                  className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md w-full"
                  value={recipeTitle}
                  onChange={(event) => setRecipeTitle(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="recipeDescription" className="block font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="recipeDescription"
                  className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md w-full"
                  value={recipeDescription}
                  onChange={(event) => setRecipeDescription(event.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="recipeIngredients" className="block font-medium mb-2">
                  Ingredients
                </label>
                <textarea
                  id="recipeIngredients"
                  className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md w-full"
                  value={recipeIngredients}
                  onChange={(event) => setRecipeIngredients(event.target.value)}
                  placeholder="Enter ingredients here, separated by new lines"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-800 dark:hover:bg-blue-700 
                  rounded-lg px-4 py-2 font-medium shadow"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecipeModal;
