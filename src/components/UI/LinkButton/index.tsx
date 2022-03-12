import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

import CircleNotifications from "../CircleNotifications";

type ObjectIconType = {
  iconElement: React.ReactElement;
  size: string;
  position: "start" | "end";
};

type ILinkButton<T extends "a" | "button"> = JSX.IntrinsicElements[T] & {
  tag?: T;
  icon?: ObjectIconType[];
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
  className,
  ...rest
}: ILinkButton<T>) {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const Component = tag === "a" ? Link : "button";
  const iconStart = icon?.filter(({ position }) => position === "start")[0];
  const iconEnd = icon?.filter(({ position }) => position === "end")[0];
  useEffect(() => {
    setIsActive(router.asPath === href);
  }, [router.isReady, router.asPath, href]);
  return (
    <Component href={href || ""}>
      <div
        className={clsx({
          "flex items-center justify-between cursor-pointer select-none rounded h-44 px-12 hover:text-gray-100 hover:bg-gray-500 hover:bg-opacity-20":
            true,
          "text-gray-300": !isActive,
          "bg-gray-500 bg-opacity-40 text-white": isActive,
          [`${className}`]: !!className,
        })}
      >
        <span
          className={clsx({
            "flex items-center gap-12 font-medium": true,
          })}
        >
          {iconStart && (
            <div
              className={clsx({
                [`h-${iconStart.size} w-${iconStart.size}`]: iconStart.size,
              })}
            >
              {iconStart.iconElement}
            </div>
          )}
          {children}
        </span>
        {iconEnd && (
          <div
            className={clsx({
              [`h-${iconEnd.size} w-${iconEnd.size}`]: iconEnd.size,
            })}
          >
            {iconEnd.iconElement}
          </div>
        )}
        {notifications && (
          <CircleNotifications numberNotifications={notifications} />
        )}
      </div>
    </Component>
  );
}
