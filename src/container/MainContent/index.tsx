import { ReactNode } from "react";
import clsx from "clsx";

type genericSizes = "sm" | "lg";

interface IMainContentProps {
  children: ReactNode;
  className?: string;
}

interface IMainContentSectionsProps<T extends "row" | "col"> {
  children: ReactNode;
  className?: string;
  size: T extends "col" ? genericSizes | "md" : genericSizes;
}

function MainContent({ children, className }: IMainContentProps) {
  return (
    <main
      className={clsx({
        "w-screen flex flex-col": true,
        [className || ""]: !!className,
      })}
    >
      {children}
    </main>
  );
}

function MainContentRow({
  children,
  size,
  className,
}: IMainContentSectionsProps<"row">) {
  return (
    <section
      className={clsx({
        "flex items-start justify-between": true,
        "h-48": size === "sm",
        "flex-1": size === "lg",
        [className || ""]: !!className,
      })}
    >
      {children}
    </section>
  );
}

function MainContentCol({
  children,
  size,
  className,
}: IMainContentSectionsProps<"col">) {
  const possibleSizes = {
    sm: "w-240",
    md: "w-360",
    lg: "flex-1",
  };

  return (
    <section
      className={clsx({
        "h-full": true,
        [possibleSizes[size]]: true,
        [className || ""]: !!className,
      })}
    >
      {children}
    </section>
  );
}

MainContent.row = MainContentRow;
MainContent.col = MainContentCol;

export default MainContent;
