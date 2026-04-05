const ShowCart = ({ cartItem }) => {
  const { tittle, price } = cartItem;
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold bg-white shadow">{tittle}</h2>
        <p className="font-semibold text-neutral-400">{price}</p>
      </div>
      <div>
        <button className="btn btn-error">Remove</button>
      </div>
    </div>
  );
};

export default ShowCart;
