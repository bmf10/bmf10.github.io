import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Image from "next/image";
import { forwardRef, useState } from "react";
import portfolios from "./portfolios.json";

const Portfolio = forwardRef<any>((_props, ref) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <section ref={ref} className="min-h-screen pt-20">
      <Title>Portfolio</Title>
      <Subtitle>Let&#39;s have look what I have done!</Subtitle>

      <div className="grid grid-cols-1 grid-rows-2 mt-4 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {portfolios.map((v, i) =>
          i === 0 ? (
            <div
              key={v.title}
              className="group relative rounded-2xl shadow hover:shadow-xl transition-shadow drop-shadow w-full lg:h-full lg:row-span-2 cursor-pointer overflow-hidden h-80"
            >
              <Image
                src={v.image}
                width={1244}
                height={720}
                className="w-full h-full rounded-2xl object-cover object-right group-hover:scale-110 transition-transform absolute top-0 left-0 z-0 duration-500"
                alt="portfolio"
              />
              <div className="absolute bottom-0 w-full h-1/2 group-hover:h-3/4 lg:h-1/4 lg:group-hover:h-1/2 after:content-[' '] after:absolute after:w-full after:h-full after:bg-cyan-800 after:top-0 after:opacity-70 group-hover:after:opacity-100 group-hover:after:bg-cyan-500 after:transition-all transition-all ease-in-out duration-500">
                <div className="p-3 relative">
                  <h3 className="relative z-10 text-white text-lg font-bold mb-2">
                    {v.title}
                  </h3>
                  <p className="relative z-10 text-white text-sm line-clamp-3 group-hover:line-clamp-none">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={v.title}
              className="group rounded-2xl shadow hover:shadow-xl transition-shadow drop-shadow w-full h-80 row-span-1 cursor-pointer overflow-hidden"
            >
              <Image
                src={v.image}
                width={1244}
                height={720}
                className="w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-transform absolute top-0 left-0 z-0 duration-500"
                alt="portfolio"
              />
              <div className="absolute bottom-0 w-full h-1/2 group-hover:h-3/4 after:content-[' '] after:absolute after:w-full after:h-full after:bg-cyan-800 after:top-0 after:opacity-70 group-hover:after:opacity-100 group-hover:after:bg-cyan-500 after:transition-all transition-all ease-in-out duration-500">
                <div className="p-3 relative">
                  <h3 className="relative z-10 text-white text-lg font-bold mb-2">
                    {v.title}
                  </h3>
                  <p className="relative z-10 text-white text-sm line-clamp-3 group-hover:line-clamp-none">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* <Button onClick={() => setModal(true)}>Open</Button>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <Title>Portfolio</Title>
        <Subtitle>Let&#39;s have look what I have done!</Subtitle>
      </Modal> */}
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
