import userImg from "../../assets/user.png";
import rocketImg from "../../assets/rocket.png";
import packageImg from "../../assets/package.png";
const GetStarted = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-5">
          <h2 className="text-4xl font-extrabold">Get Started in 3 Steps</h2>
          <p className="text-center text-neutral-500">
            Start using premium digital tools in minutes, not hours..
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 shadow">
            <div className="flex justify-end">
              <span className=" flex justify-center items-center  bg-purple-600 text-white rounded-full h-10 w-10 ">
                01
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={userImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Create Account
                </h2>
                <p className="text-center text-neutral-500">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 shadow">
            <div className="flex justify-end">
              <span className=" flex justify-center items-center  bg-purple-600 text-white rounded-full h-10 w-10 ">
                02
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={rocketImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Start Creating
                </h2>
                <p className="text-center text-neutral-500">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 shadow">
            <div className="flex justify-end">
              <span className=" flex justify-center items-center  bg-purple-600 text-white rounded-full h-10 w-10 ">
                03
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={packageImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Choose Products
                </h2>
                <p className="text-center text-neutral-500">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
