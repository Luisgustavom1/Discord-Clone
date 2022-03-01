import clsx from "clsx";
import { ReactNode } from "react";
import CircleNotifications from "../CircleNotifications";

interface INavHeader {
  children: ReactNode;
  notifications: number;
  isActive: boolean;
}

export default function NavHeader({
  children,
  notifications,
  isActive,
}: INavHeader) {
  return (
    <button
      className={clsx({
        "flex items-center gap-8 text-base font-medium px-8 py-2 rounded hover:bg-gray-500 hover:bg-opacity-20 hover:text-gray-100":
          true,
        "text-gray-200 ": !isActive,
        "bg-gray-500 bg-opacity-30 text-white": isActive,
      })}
    >
      {children}
      {!!notifications && (
        <CircleNotifications numberNotifications={notifications} />
      )}
    </button>
  );
}
