import { FaCheck } from "react-icons/fa";

const PriceCard = ({ priceItem }) => {
  const { title, description, price, duration, buttonText, features, badge } =
    priceItem;
  return (
    <div
      className={`card bg-base-100 shadow-sm flex flex-col rounded-xl relative ${
        badge === "Most Popular"
          ? "bg-linear-to-r from-purple-800 to-purple-600 text-white"
          : ""
      }`}
    >
      <div className="card-body">
        <div className="flex justify-center">
          <span
            className={`badge badge-s absolute top-[-10px]  ${
              badge === "Most Popular"
                ? "bg-white text-amber-600 font-semibold"
                : ""
            }`}
          >
            {badge}
          </span>
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-neutral-400 font-semibold">{description}</p>
          <p className="font-bold">
            <span className="text-xl">${price}</span> /{" "}
            <span className="text-neutral-400">{duration}</span>
          </p>
          <div className="space-y-2">
            {features.map((item, index) => (
              <li
                className=" flex gap-1 items-center list-none font-semibold text-neutral-400 text-[15px]"
                key={index}
              >
                <FaCheck className="text-green-500" /> {item}
              </li>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <button
            className={`btn w-full text-white rounded ${
              badge === "Most Popular"
                ? "bg-white !text-purple-600"
                : "bg-gradient-to-r from-purple-900 to-purple-500"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
