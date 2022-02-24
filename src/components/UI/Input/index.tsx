import clsx from "clsx";
import { IInputPropsBase } from "src/types";

interface IInputUIProps extends IInputPropsBase {
  error?: string;
}

export default function InputUI({
  label,
  error,
  id,
  type = "text",
  className = "",
  ...rest
}: IInputUIProps) {
  return (
    <div className="flex flex-col">
      <span className="flex">
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
        {!!error && (
          <p className="text-xs ml-[1px] text-red italic font-medium">
            {error}
          </p>
        )}
      </span>
      <input
        className={clsx({
          "w-full text-white p-[10px] bg-black-900 bg-opacity-10 border border-black-900 border-opacity-30 rounded text-base h-40 focus:outline-none hover:border-opacity-85":
            true,
          "focus:border-blue": !error,
          "border-opacity-100 border-red": !!error,
          [className]: !!className,
        })}
        id={id}
        type={type}
        {...rest}
      />
    </div>
  );
}
