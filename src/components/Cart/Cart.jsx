import EmptyCart from "../EmptyCart/EmptyCart";
import ShowCart from "../ShowCart/ShowCart";
const Cart = ({ cart, setCart }) => {
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
      </div>
    </section>
  );
};

export default Cart;
