import { Suspense, useState } from "react";
import AllTolls from "../AllTools/AllTolls";
import Cart from "../Cart/Cart";
const toolPromise = async () => {
  const res = await fetch("/data.json").then((res) => res.json());
  return res;
};
const resolvePromise = toolPromise();
const PremiumTools = () => {
  const [active, setActive] = useState("products");
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-4 py-5">
          <h2 className="text-4xl font-bold">PremiumDigitalTool</h2>
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
              className="tab px-4 "
              aria-label="Products"
              defaultChecked
            />
            <input
              onClick={() => setActive("cart")}
              type="radio"
              name="my_tabs_1"
              className="tab px-4 rounded"
              aria-label="Cart"
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
          <AllTolls resolvePromise={resolvePromise} />
        </Suspense>
      )}
      {active === "cart" && <Cart />}
    </section>
  );
};

export default PremiumTools;
