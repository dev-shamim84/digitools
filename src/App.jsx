import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PremiumTool from "./components/PremiumTools/PremiumTools";
import Rating from "./components/Rating/Rating";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <PremiumTool />
    </div>
  );
};

export default App;
