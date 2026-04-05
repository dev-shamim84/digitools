import { use } from "react";
import PriceCard from "../PriceCard/PriceCard";

const Pricing = ({ resolvePricePromise }) => {
  const priceData = use(resolvePricePromise);
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-neutral-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-5 ">
          {priceData.map((priceItem) => (
            <PriceCard key={priceItem.id} priceItem={priceItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
