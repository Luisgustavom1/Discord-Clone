import { SVGProps, ReactNode, FunctionComponent } from "react";
// import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import CircleNotifications from "../CircleNotifications";

type ObjectIconType = {
  iconElement: FunctionComponent<SVGProps<SVGSVGElement>>;
  size: string;
  position: "start" | "end";
};

type ILinkButton<T extends "a" | "button"> = JSX.IntrinsicElements[T] & {
  tag?: T;
  icon?: ObjectIconType;
  notifications?: number;
  href?: string;
  children: ReactNode;
};

export default function LinkButton<T extends "a" | "button" = "button">({
  tag,
  icon,
  notifications,
  href,
  children,
}: ILinkButton<T>) {
  // const location = useLocation();
  // const isActive = location.pathname.split("/").reverse()[0] === href;
  const isActive = true;
  const Component = tag === "a" ? "a" : "button";

  return (
    <Component
      className={clsx({
        "flex items-center justify-between cursor-pointer rounded p-12 hover:bg-gray-500 hover:bg-opacity-20":
          true,
        "bg-gray-500 bg-opacity-40": isActive,
      })}
      href={href}
    >
      <span className="flex gap-12 text-white font-medium">
        {icon?.position === "start" && (
          <div
            className={clsx({
              [`h-[${icon.size}] w-[${icon.size}]`]: icon.size,
            })}
          >
            <icon.iconElement />
          </div>
        )}
        {children}
        {icon?.position === "end" && (
          <div
            className={clsx({
              [`h-${icon.size} w-${icon.size}`]: icon.size,
            })}
          >
            <icon.iconElement />
          </div>
        )}
      </span>

      {notifications && (
        <CircleNotifications numberNotifications={notifications} />
      )}
    </Component>
  );
}
