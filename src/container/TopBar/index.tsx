import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface ItopBarProps {
  children: ReactNode;
  optionBg?: 1 | 2;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TopBar({
  optionBg = 1,
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

  const possibleBackgrounds = {
    1: "bg-black-600",
    2: "bg-gray-600",
  };

  return (
    <div
      {...rest}
      className={clsx({
        [`${styles["topBar-container-box-shadow"]} z-10 relative flex items-center h-48 px-8`]:
          true,
        [possibleBackgrounds[optionBg]]: optionBg,
        [possibleSizes[size]]: size,
        [className || ""]: className,
      })}
    >
      {children}
    </div>
  );
}
