import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface ItopBarProps {
  children: ReactNode;
  optionBg?: "black" | "gray";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TopBar({
  optionBg = "black",
  size = "md",
  children,
  className,
  ...rest
}: ItopBarProps) {
  const possibleSizes = {
    sm: "w-100",
    md: "w-240",
    lg: "flex-1",
  };

  return (
    <div
      {...rest}
      className={clsx({
        [`${styles["topBar-container-box-shadow"]} bg-${optionBg}-600 z-10 relative flex items-center h-48 px-8`]:
          true,
        [possibleSizes[size]]: size,
        [className || ""]: className,
      })}
    >
      {children}
    </div>
  );
}
