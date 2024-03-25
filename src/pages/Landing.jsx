const Landing = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold text-4xl">
            We Connect{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-900 inline-block text-transparent bg-clip-text">
              Brands
            </span>{" "}
          </h1>
          <h1 className="font-bold text-4xl">
            with{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-900 inline-block text-transparent bg-clip-text">
              Creativity
            </span>
            .
          </h1>
        </div>
        <p>Subscribe Now for Exclusive Early Access!</p>
        <div>
          <input
            className="border-solid border-pink-400 "
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get Early Access
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
