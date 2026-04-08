import bannerImg from "../../assets/banner.png";
import reactAngle from "../../assets/Rectangle 3.png";
import watchImg from "../../assets/Play.png";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 items-center gap-4 my-10">
          <div className="col-span-12 lg:col-span-6 space-y-3 mx-auto md:mx-0">
            <div className="badge bg-gray-300 py-2">
              <img src={reactAngle} alt="reactAngle.png" />
              <span className="text-purple-500 text-[14px] md:text-xl font-semibold">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-snug">
              Supercharge Your <br />
              <span className="bg-linear-to-r from-purple-800 to-purple-500 bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>
            <p className="text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-linear-to-l from-purple-500 to-purple-900 text-white rounded-full font-bold">
                Explore Products
              </button>
              <button className="flex gap-2 items-center px-4 py-2 bg-white text-purple-600 hover:bg-linear-to-l hover:from-purple-500 hover:to-purple-900 hover:text-white rounded-full transition-all duration-500 ease-linear font-bold">
                <img src={watchImg} alt="watchImg.png" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 justify-end">
            <img
              className="w-full md:w-[400px]  "
              src={bannerImg}
              alt="bannerImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
