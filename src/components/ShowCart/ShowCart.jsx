const ShowCart = ({ cartItem, cart, setCart }) => {
  const removeCart = () => {
    const remove = cart.filter((removeItem) => removeItem.id !== cartItem.id);
    setCart(remove);
  };
  const { title, price } = cartItem;
  return (
    <div className="flex justify-between items-center bg-white py-4 shadow rounded gap-4">
      <div>
        <h2 className="font-bold bg-white shadow">{title}</h2>
        <p className="font-semibold text-neutral-400">${price}</p>
      </div>
      <div>
        <button onClick={removeCart} className="btn btn-error text-white">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShowCart;
