import clsx from "clsx";

interface IDiviserProps {
  direction?: "vertical" | "horizontal";
}

export default function Diviser({
  direction = "horizontal",
  ...rest
}: IDiviserProps) {
  const isHorizontal = direction === "horizontal";
  return (
    <div
      {...rest}
      className={clsx({
        "bg-white opacity-5 rounded": true,
        "h-[2px] w-full": isHorizontal,
        "h-full w-[2px]": !isHorizontal,
      })}
    />
  );
}
