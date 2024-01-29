import Image from "next/image";
import { FC } from "react";
import { Slide } from "react-awesome-reveal";

interface Props {
  readonly data: {
    title: string;
    description: string;
    technologies: string[];
    link?: string | null;
    etc: string;
    image: string;
  };
}

const Card: FC<Props> = ({ data }) => {
  return (
    <div className="relative grid grid-cols-1 gap-8 items-center md:grid-cols-2 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#333437] [&:not(:last-child)]:pb-14 [&:not(:last-child)]:mb-14">
      <Slide triggerOnce>
        <div className="order-1 md:order-2">
          <Image
            src={data.image}
            alt={data.title}
            width={520}
            height={300}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-white text-xl md:text-2xl font-semibold leading-[43.20px] tracking-wide">
              {data.title}
            </h3>
            {data.link && (
              <Image
                src="/new/arrow-top-right.svg"
                alt="open link"
                width={32}
                height={32}
              />
            )}
          </div>
          <p className="text-white text-opacity-75 text-base font-medium leading-7 tracking-tight">
            {data.description}
          </p>
          <p className="text-[#34A1F1] text-base font-medium leading-7 tracking-tight">
            {data.technologies.map((v) => `${v}, `)}
          </p>
        </div>
      </Slide>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          className="absolute left-0 top-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default Card;
