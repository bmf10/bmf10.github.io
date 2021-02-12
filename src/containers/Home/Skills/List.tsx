import { FC } from "react";

interface Props {
  readonly name: string;
  readonly percentage: number;
  readonly color?: "red" | "yellow" | "green" | "blue";
}

const getColor = (color?: string): Record<string, string> => {
  switch (color) {
    case "red":
      return { one: "bg-red-300", two: "bg-red-500", three: "bg-red-700" };
    case "yellow":
      return {
        one: "bg-yellow-300",
        two: "bg-yellow-500",
        three: "bg-yellow-700",
      };
    case "green":
      return {
        one: "bg-green-300",
        two: "bg-green-500",
        three: "bg-green-700",
      };
    case "blue":
      return {
        one: "bg-blue-300",
        two: "bg-blue-500",
        three: "bg-blue-700",
      };
    default:
      return {
        one: "bg-yellow-300",
        two: "bg-yellow-300",
        three: "bg-yellow-300",
      };
  }
};

const Pie: FC<Props> = ({ name, percentage, color }: Props) => {
  const { one, two, three } = getColor(color);
  return (
    <div className="relative">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-base inline-block text-primary ">{name}</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-primary">
            {`${percentage}%`}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 text-xs flex rounded bg-textPrimary">
        <div
          style={{ width: `${percentage / 3}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${one}`}
        ></div>
        <div
          style={{ width: `${percentage / 3}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${two}`}
        ></div>
        <div
          style={{ width: `${percentage / 3}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${three}`}
        ></div>
      </div>
    </div>
  );
};

export default Pie;
