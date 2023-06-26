import recipes from "../Recipes";

const Recipes = () => {

  return (
    <div className="mx-auto my-8 min-h-screens">
      <div>

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
      </div>
    </div>
  )
}

export default Recipes;