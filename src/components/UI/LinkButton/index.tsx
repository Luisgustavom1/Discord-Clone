import { ReactNode, useEffect, useState } from "react";
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const Component = tag === "a" ? Link : "button";

  useEffect(() => {
    setIsActive(router.asPath === href);
  }, [router.isReady, router.asPath, href]);
  return (
    <Component href={href || ""}>
      <div
        className={clsx({
          "flex items-center justify-between cursor-pointer rounded p-12 hover:bg-gray-500 hover:bg-opacity-20":
            true,
          "bg-gray-500 bg-opacity-40": isActive,
        })}
      >
        <span
          className={clsx({
            "flex gap-12 font-medium": true,
            "text-gray-300": !isActive,
            "text-white": isActive,
          })}
        >
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
