import { CiShoppingCart } from "react-icons/ci";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <CiShoppingCart className="text-neutral-400" size={50} />
      <h2 className="text-neutral-400 font-bold">Your Cart Is Empty</h2>
    </div>
  );
};

export default EmptyCart;
