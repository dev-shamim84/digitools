import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PremiumTool from "./components/PremiumTools/PremiumTools";
import Rating from "./components/Rating/Rating";
import GetStarted from "./components/GetStarted/GetStarted";
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Navbar cart={cart} />
      <Banner />
      <Rating />
      <PremiumTool cart={cart} setCart={setCart} />
      <GetStarted />
    </div>
  );
};

export default App;
