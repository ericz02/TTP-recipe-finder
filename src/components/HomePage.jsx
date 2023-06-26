import { Link } from "react-router-dom"

import recipes from "../Recipes"

const HomePage = () => {

  return (
    <div className="mx-auto my-8 min-h-screen">
      <div className="h-[900px]">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Welcome to Recipe Finder</h1>
        <p className="text-xl text-center">Find and discover delicious recipes for every occasion.</p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 flex justify-center text-gray-800">Featured Recipes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-[30px]">{recipe.title}</h3>
                <img
                  className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80 mb-[40px]"
                  src={recipe.imageSrc}
                  alt={recipe.title}
                />
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-800 mt-[50px]">
          Welcome to our website! Browse our featured recipes and get started on your culinary journey.
        </p>

        <div className="mt-[50px] flex justify-center">
          <Link to={"/recipes"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get Started
                </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;