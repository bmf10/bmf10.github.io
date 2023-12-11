import { ForwardRefRenderFunction, forwardRef, useMemo, useState } from "react";
import Portfilios from "./portfolios.json";
import Card from "./Card";

const Work: ForwardRefRenderFunction<HTMLElement, unknown> = (_props, ref) => {
  const [showAll, setShowAll] = useState(false);
  const portfolios = useMemo(
    () => (showAll ? Portfilios : Portfilios.slice(0, 4)),
    [showAll],
  );
  return (
    <section ref={ref} className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-white text-3xl lg:text-[64px] font-bold lg:leading-[76.80px]">
            Work
          </h2>
          <p className="text-white text-opacity-75 text-base font-medium leading-7 tracking-tight">
            {`Let's see a small part of what I've done!`}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-5 gap-4 md:grid-cols-2">
          <div>
            <p className="text-[#34A1F1] text-3xl lg:text-[56px] font-bold lg:leading-[67.20px]">
              10+
            </p>
            <h3 className="text-white text-opacity-75 text-base font-semibold leading-7 tracking-tight">
              Successful Projects
            </h3>
          </div>
          <div>
            <p className="text-[#34A1F1] text-3xl lg:text-[56px] font-bold lg:leading-[67.20px]">
              3+ years
            </p>
            <h3 className="text-white text-opacity-75 text-base font-semibold leading-7 tracking-tight">
              Work Experiences
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {portfolios.map((portfolio) => (
          <Card key={portfolio.title} data={portfolio} />
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="px-5 py-2 border-2 border-[#333437] rounded-full"
        >
          Load More...
        </button>
      )}
    </section>
  );
};

export default forwardRef(Work);
