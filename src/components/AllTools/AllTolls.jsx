import { use } from "react";
import SingleTool from "../SingleTool/SingleTool";

const AllTolls = ({ resolvePromise }) => {
  const data = use(resolvePromise);
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((tool) => (
            <SingleTool key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AllTolls;
