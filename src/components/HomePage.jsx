import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="mx-auto my-8 min-h-screen">
      <div className="h-[850px]">

        <img
          className="w-full h-[700px] object-cover"
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
          alt="Homepage Background"
        />


        <p className="text-center text-gray-800 mt-[40px] text-[20px]">
          Welcome to our website! Get started to browse our featured recipes and get started on your culinary journey.
        </p>

        <div className="mt-[30px] flex justify-center">
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