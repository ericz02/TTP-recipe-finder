import React, { useEffect } from "react";

const RecipeModal = ({ recipe, onClose }) => {

  // when i click "esc" or X button, it closes
  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  // when i click anywhere when the modal is open, it closes
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm" onClick={handleModalClick}>
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

        <h2 className="text-xl font-bold mb-4">{recipe.title}</h2>
        <img
          className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80"
          src={recipe.imageSrc}
          alt={recipe.title}
        />
        <div className="mb-4">{recipe.description}</div>

        <h3 className="text-lg font-bold mt-4">Ingredients:</h3>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeModal;
