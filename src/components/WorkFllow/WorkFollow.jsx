const WorkFollow = () => {
  return (
    <section className="bg-linear-to-r from-purple-800 to-purple-600 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-5 space-y-3">
          <h2 className="text-4xl font-extrabold text-white ">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-center text-white ">
            Join thousands of professionals who are already using Digitools to
            work smarter Start <br /> your free trial today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-soft rounded-full">
              Explore Products
            </button>
            <button className="btn bg-transparent text-white rounded-full hover:bg-white hover:text-black">
              View Pricing
            </button>
          </div>
          <p className="text-center text-white ">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkFollow;
