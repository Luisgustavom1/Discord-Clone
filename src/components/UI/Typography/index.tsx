/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ILinkTypograph {
  children: ReactNode;
  href: string;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg";
}

export function LinkTypograph({
  children,
  href,
  className,
  size = "sm",
}: ILinkTypograph) {
  return (
    <strong
      className={clsx({
        [`text-${size} font-medium text-blue cursor-pointer hover:underline`]:
          true,
        [className || ""]: className,
      })}
    >
      <Link href={href}>
        <a target="_blank">{children}</a>
      </Link>
    </strong>
  );
}
