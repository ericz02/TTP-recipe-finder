import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRecipeModal = ({ onClose }) => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    imageSrc: "",
    description: "",
    ingredients: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    setNewRecipe((prevRecipe) => {
      const updatedIngredients = [...prevRecipe.ingredients];
      updatedIngredients[index] = value;
      return {
        ...prevRecipe,
        ingredients: updatedIngredients,
      };
    });
  };

  const handleAddIngredient = () => {
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
  };

  const handleRemoveIngredient = (index) => {
    setNewRecipe((prevRecipe) => {
      const updatedIngredients = [...prevRecipe.ingredients];
      updatedIngredients.splice(index, 1);
      return {
        ...prevRecipe,
        ingredients: updatedIngredients,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/recipes", newRecipe);
      console.log(response.data);

      onClose();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
  
    const handleClickOutsideModal = (e) => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && !modalContent.contains(e.target)) {
        onClose();
      }
    };
  
    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleClickOutsideModal);
  
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 relative w-full max-w-md max-h-full overflow-y-auto">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4">Add Recipe</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newRecipe.title}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imageSrc" className="block font-bold mb-1">
              Image URL:
            </label>
            <input
              type="text"
              id="imageSrc"
              name="imageSrc"
              value={newRecipe.imageSrc}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={newRecipe.description}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-24"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-1">Ingredients:</label>
            {newRecipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mr-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              + Add Ingredient
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeModal;
