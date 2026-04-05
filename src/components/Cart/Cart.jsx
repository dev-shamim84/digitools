import ShowCart from "../ShowCart/ShowCart";
const Cart = ({ cart }) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="font-bold">Your Cart </h2>

        <div>
          {cart.map((cartItem) => (
            <ShowCart key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
