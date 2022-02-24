import { Controller } from "react-hook-form";

import InputUI from "src/components/UI/Input";
import { IInputPropsBase } from "src/types";

interface IInputForm extends IInputPropsBase {
  isRequired?: boolean;
  rules?: any;
}

export function InputForm({
  name,
  defaultValue,
  onChange,
  onBlur,
  isRequired = false,
  rules,
  ...rest
}: IInputForm) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      rules={{
        required: isRequired ? "Este campo é obrigatório" : false,
        ...rules,
      }}
      render={({ field, fieldState }) => (
        <InputUI
          name={name}
          onBlur={(e) => {
            field.onBlur();

            if (onBlur) {
              onBlur(e);
            }
          }}
          onChange={(e) => {
            field.onChange(e);

            if (onChange) {
              onChange(e);
            }
          }}
          value={field.value}
          error={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
}
