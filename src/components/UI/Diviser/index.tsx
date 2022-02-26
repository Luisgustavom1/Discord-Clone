import clsx from "clsx";

interface IDiviserProps {
  direction?: "vertical" | "horizontal";
  className?: string;
}

export default function Diviser({
  direction = "horizontal",
  className,
}: IDiviserProps) {
  const isHorizontal = direction === "horizontal";
  return (
    <div
      className={clsx({
        "bg-white opacity-5 rounded": true,
        "h-[2px] w-full": isHorizontal,
        "h-full w-[2px]": !isHorizontal,
        [className || ""]: !!className,
      })}
    />
  );
}
