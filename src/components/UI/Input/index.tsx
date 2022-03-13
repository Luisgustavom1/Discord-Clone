import clsx from "clsx";
import { useFormContext } from "react-hook-form";

import { IInputPropsBase } from "src/types";

import styles from "./styles.module.css";

interface IInputUIProps extends IInputPropsBase {
  error?: string;
}

export default function InputUI({
  label,
  error,
  id,
  type = "text",
  className = "",
  Icon,
  SecondIcon,
  ...rest
}: IInputUIProps) {
  const { resetField, getValues } = useFormContext();
  const inputValue = getValues(rest.name);

  return (
    <div className="flex flex-col">
      <span className="flex">
        {label && (
          <label
            htmlFor={id}
            className={clsx({
              "font-semibold font-title text-xs text-gray-200 mb-8 uppercase":
                true,
              "text-red": !!error,
            })}
          >
            {label}
            {error && " -"}
          </label>
        )}
        {!!error && (
          <p className="text-xs ml-[1px] text-red italic font-medium">
            {error}
          </p>
        )}
      </span>
      <div
        className={clsx({
          "flex items-center bg-black-900 bg-opacity-10 border border-black-900 border-opacity-30 rounded h-40 px-8":
            true,
          [className]: !!className,
        })}
      >
        <input
          className={clsx({
            "w-full text-white bg-transparent text-base focus:outline-none hover:border-opacity-85":
              true,
            "focus:border-blue": !error,
            "border-opacity-100 border-red": !!error,
          })}
          id={id}
          type={type}
          {...rest}
        />
        {Icon && !inputValue && (
          <button
            type="submit"
            className={`${styles["animation-icon-primary-show"]} text-gray-200`}
          >
            <Icon />
          </button>
        )}
        {SecondIcon && !!inputValue && (
          <div
            className={`${styles["animation-icon-secondary-show"]} text-gray-200 w-20 h-20`}
            onClick={() => resetField(rest.name)}
            onKeyUp={() => ({})}
            role="button"
            tabIndex={0}
          >
            <SecondIcon />
          </div>
        )}
      </div>
    </div>
  );
}
