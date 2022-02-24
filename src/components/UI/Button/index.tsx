import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  type = "button",
  className = "",
  ...rest
}: IButtonProps) {
  return (
    <div className="flex flex-col">
      <button
        className={clsx({
          "w-full h-44 bg-purple rounded text-white font-display font-semibold hover:brightness-90 duration-100":
            true,
          [className]: !!className,
        })}
        type={type}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
}
