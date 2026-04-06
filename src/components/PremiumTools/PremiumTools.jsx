import { Suspense, useState } from "react";
import AllTolls from "../AllTools/AllTolls";
import Cart from "../Cart/Cart";
const toolPromise = async () => {
  const res = await fetch("/data.json").then((res) => res.json());
  return res;
};
const resolvePromise = toolPromise();
const PremiumTools = ({ cart, setCart }) => {
  const [active, setActive] = useState("products");
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-4 py-5">
          <h2 className="text-4xl font-extrabold">PremiumDigitalTool</h2>
          <p className="text-center text-neutral-500">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
          <div className="tabs tabs-box flex gap-4">
            <input
              onClick={() => setActive("products")}
              type="radio"
              name="my_tabs_1"
              className={`tab px-4 w-40 rounded font-bold ${
                active === "products"
                  ? "bg-linear-to-r from-purple-800 to-purple-600 text-white"
                  : ""
              }`}
              aria-label="Products"
              defaultChecked
            />
            <input
              onClick={() => setActive("cart")}
              type="radio"
              name="my_tabs_1"
              className={`tab px-4 rounded w-40 font-bold ${
                active === "cart"
                  ? "bg-linear-to-r from-purple-800 to-purple-600 text-white"
                  : ""
              }`}
              aria-label={`Cart (${cart.length})`}
            />
          </div>
        </div>
      </div>
      {active === "products" && (
        <Suspense
          fallback={
            <span className="loading loading-ring loading-xl flex flex-col justify-center items-center"></span>
          }
        >
          <AllTolls
            resolvePromise={resolvePromise}
            cart={cart}
            setCart={setCart}
          />
        </Suspense>
      )}
      {active === "cart" && <Cart cart={cart} setCart={setCart} />}
    </section>
  );
};
export default PremiumTools;
