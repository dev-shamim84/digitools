import { toast } from "react-toastify";
import EmptyCart from "../EmptyCart/EmptyCart";
import ShowCart from "../ShowCart/ShowCart";
const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const handleProceed = () => {
    setCart([]);
    toast.success("check out proceed successfully");
  };
  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <h2 className="font-bold my-5">Your Cart </h2>

        {cart.length === 0 && <EmptyCart />}

        <div>
          {cart.map((cartItem) => (
            <ShowCart
              key={cartItem.id}
              cart={cart}
              setCart={setCart}
              cartItem={cartItem}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-400 font-semibold ">Total Price</p>
          <p className="font-bold text-xl">$ {totalPrice}</p>
        </div>
        <div className="mt-2">
          <button
            onClick={handleProceed}
            className="w-full px-4 py-2 bg-linear-to-r from-purple-800 to-purple-600 text-white font-bold "
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
