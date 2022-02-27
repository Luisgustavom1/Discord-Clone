import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

import CircleNotifications from "../CircleNotifications";

type ObjectIconType = {
  iconElement: React.FunctionComponent;
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
  const router = useRouter();
  const isActive = router.pathname.split("/").reverse()[0] === href;
  const Component = tag === "a" ? Link : "button";

  return (
    <Component href={href || ""}>
      <div
        className={clsx({
          "flex items-center justify-between cursor-pointer rounded p-12 hover:bg-gray-500 hover:bg-opacity-20":
            true,
          "bg-gray-500 bg-opacity-40": isActive,
        })}
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
      </div>
    </Component>
  );
}
