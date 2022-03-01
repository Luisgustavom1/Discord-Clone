import { FunctionComponent, InputHTMLAttributes } from "react";

export interface IInputPropsBase extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  Icon?: FunctionComponent;
  SecondIcon?: FunctionComponent;
}

export type FormValues<keys extends string | number | symbol> = Record<
  keys,
  any
>;
