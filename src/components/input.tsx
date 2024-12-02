import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ type = "button", ...props }: InputProps) {
  return <input type={type} {...props} />;
}
