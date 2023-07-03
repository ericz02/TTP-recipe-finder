import React, { useState } from "react";
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
      // Make a POST request to add the new recipe to the API
      const response = await axios.post("http://localhost:3000/recipes", newRecipe);
      console.log(response.data); // The newly created recipe object returned by the API

      // Close the modal and perform any other necessary actions
      onClose();
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };


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
              className="w-full border border-gray-300 rounded px-3 py-2"
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
              className="w-full border border-gray-300 rounded px-3 py-2"
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
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="4"
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
                  className="w-full border border-gray-300 rounded-l px-3 py-2"
                  placeholder="Ingredient"
                  required
                />
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-r px-3 py-2 ml-1"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-green-500 text-white rounded px-3 py-2"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeModal;
