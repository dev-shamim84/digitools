import { TbLivePhoto } from "react-icons/tb";
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center gao-4 my-10">
          <div className="col-span-6 space-y-3">
            <div className="badge badge-primary py-2">
              <span>New: AI-Powered Tools Available</span>
            </div>
            <h1 className="text-5xl font-bold">
              Supercharge YourDigital Workflow
            </h1>
            <p className="text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-linear-to-r from-purple-500 to-purple-900 text-white rounded-full font-bold">
                Explore Products
              </button>
              <button className="flex gap-2 items-center px-4 py-2 bg-white text-blue-500 hover:bg-linear-to-r hover:from-purple-500 hover:to-purple-900 hover:text-white rounded-full transition-all duration-500 ease-linear font-bold">
                <TbLivePhoto />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="col-span-6">
            <img className="max-w-full" src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
