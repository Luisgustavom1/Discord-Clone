import { FormHTMLAttributes, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormValues } from "src/types";

interface IFormContextProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (data: FormValues<string>) => void;
}

export default function FormContext({
  children,
  onSubmit,
  ...rest
}: IFormContextProps) {
  const methods = useForm({
    reValidateMode: "onSubmit",
    mode: "onSubmit",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} action="" {...rest}>
        {children}
      </form>
    </FormProvider>
  );
}
