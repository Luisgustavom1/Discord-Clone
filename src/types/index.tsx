import { InputHTMLAttributes } from "react";

export interface IInputPropsBase extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export type FormValues<keys extends string | number | symbol> = Record<
  keys,
  any
>;
