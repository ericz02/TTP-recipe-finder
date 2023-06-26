const Content = () => {

  return (
    <div className="container mx-auto my-8">

        <h1 className="text-4xl font-bold text-center mb-4">Welcome to Recipe Finder</h1>
        <p className="text-xl text-center">
          Find and discover delicious recipes for every occasion.
        </p>

        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">Featured Recipes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured recipe cards */}
            
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-[30px]">Spicy Thai Basil Chicken Stir-Fry</h3>
              <img
                className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80 mb-[40px]"
                src="https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/07/Thai-basil-chicken-33.jpg"
                alt="Spicy Thai Image">
              </img>
              <p>
                This vibrant stir-fry combines tender chicken, colorful vegetables, Thai basil, and spicy chili sauce 
                for a flavorful and aromatic Thai-inspired dish. Serve over jasmine rice.
              </p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-[30px]">Creamy Garlic Parmesan Pasta</h3>
              <img
                className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80 mb-[40px]"
                src="https://midwestfoodieblog.com/wp-content/uploads/2019/03/FINAL-Parmesan-garlic-pasta-1-3.jpg"
                alt="Creamy Garlic Parmesan Pasta">
              </img>
              <p>
                Enjoy a comforting bowl of creamy garlic Parmesan pasta with al dente spaghetti coated in a rich 
                sauce made with garlic, butter, cream, and Parmesan cheese. Top with parsley and extra Parmesan
              </p>
            </div>

            <div className="bg-white rounded shadow p-4">
              <h3 className="text-lg font-bold mb-[30px]">Grilled Citrus Salmon with Mango Salsa</h3>
              <img 
                className="rounded w-full mb-4 shadow object-cover object-center h-56 sm:h-64 md:h-80 mb-[40px]"
                src="https://thecookingjar.com/wp-content/uploads/2018/05/2013-08-12-14.58.362-e1398056489112.jpg"
                alt="">
              </img>
              <p>
                Elevate your seafood experience with grilled citrus salmon marinated in a zesty glaze. Topped with tropical 
                mango salsa, this dish offers a burst of citrus and fruity flavors. Serve with asparagus or quinoa.
              </p>
            </div>
          </div>

        </div>

      </div>
  )
}

export default Content;