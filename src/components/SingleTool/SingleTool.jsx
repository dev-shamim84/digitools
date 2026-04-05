import { useState } from "react";
import { FaCheck } from "react-icons/fa";
const SingleTool = ({ tool }) => {
  const [add, setAdd] = useState(false);
  const { title, description, price, duration, badge, image, features } = tool;
  return (
    <div className="card bg-base-100 shadow-sm flex flex-col">
      <div className="card-body">
        <div className="flex justify-end ">
          <span
            className={`badge badge-s  ${
              badge === "Bestseller"
                ? "bg-amber-400/50 text-amber-600 font-semibold"
                : badge === "Popular"
                ? "bg-gray-200 text-purple-600"
                : "bg-gray-200 text-green-500"
            }`}
          >
            {badge}
          </span>
        </div>
        <div className="flex-1 space-y-3">
          <img src={image} alt="" />
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-neutral-400 font-semibold">{description}</p>
          <p className="font-bold">
            <span className="text-xl">${price}</span> /{" "}
            <span className="text-neutral-400">{duration}</span>
          </p>
          <div className="space-y-2">
            {features.map((item, index) => (
              <li
                className=" flex gap-1 items-center list-none font-semibold text-neutral-400"
                key={index}
              >
                <FaCheck className="text-green-500" /> {item}
              </li>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setAdd(true)}
            className="btn bg-linear-to-r from-purple-900 to-purple-500 w-full text-white rounded"
          >
            {add ? "Added To Cart" : "By Now"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleTool;
