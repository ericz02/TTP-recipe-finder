import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div
        className="bg-slate-400 rounded-lg p-6 relative w-full max-w-md max-h-full overflow-y-auto"
        onClick={handleModalClick}
      >
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
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
      <div className="fixed inset-0" onClick={onClose}></div>
    </div>
  );
};

export default RecipeModal;
