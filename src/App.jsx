import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PremiumTool from "./components/PremiumTools/PremiumTools";
import Rating from "./components/Rating/Rating";
import GetStarted from "./components/GetStarted/GetStarted";
import Pricing from "./components/Pricing/Pricing";

const pricePromise = async () => {
  const res = fetch("/price.json").then((res) => res.json());
  return res;
};
const resolvePricePromise = pricePromise();
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart} />
      <Banner />
      <Rating />
      <PremiumTool cart={cart} setCart={setCart} />
      <GetStarted />

      <Suspense
        fallback={
          <span className="loading loading-ring loading-xl flex flex-col items-center justify-center"></span>
        }
      >
        <Pricing resolvePricePromise={resolvePricePromise} />
      </Suspense>
    </div>
  );
};

export default App;
