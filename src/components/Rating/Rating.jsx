const Rating = () => {
  return (
    <section className="bg-linear-to-l from-purple-500 to-purple-800 py-5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 items-center gap-4">
          <div className=" flex flex-col justify-center items-center space-y-2 p-5">
            <h2 className="text-white font-bold text-5xl">50K+</h2>
            <p className="text-white font-semibold">Active Users</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 p-5 border-l border-r border-white">
            <h2 className="text-white font-bold text-5xl">200K+</h2>
            <p className="text-white font-semibold">Premium Tools</p>
          </div>
          <div className=" flex flex-col justify-center items-center space-y-2 p-5">
            <h2 className="text-white font-bold text-5xl">4.9</h2>
            <p className="text-white font-semibold">Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
