import { FC } from "react";

interface Props {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

const List: FC<Props> = ({ description, icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-textPrimary rounded-full flex flex-col justify-center items-center">
        {icon}
      </div>
      <p className="my-6 text-2xl text-center">{title}</p>
      <p className="text-base text-center font-normal">{description}</p>
    </div>
  );
};

export default List;
