import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";

interface Props {
  readonly name: string;
  readonly percentage: number;
}

const Pie: FC<Props> = ({ name, percentage }: Props) => {
  return (
    <div className="flex flex-col items-center lg:mb-4">
      <div className="relative w-40 h-40 flex flex-col items-center justify-center">
        <PieChart
          className="absolute"
          data={[{ value: 1, key: 1, color: "#062639" }]}
          background="#C6D8C3"
          startAngle={270}
          lineWidth={5}
          reveal={percentage}
          animationDuration={1000}
          rounded={true}
          animate
        />
        <p className="text-base font-bold text-gray-700">{name}</p>
        <p className="text-base text-gray-700">{`${percentage}%`}</p>
      </div>
    </div>
  );
};

export default Pie;
