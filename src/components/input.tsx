import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "button", ...props }, ref) => {
    return <input ref={ref} type={type} {...props} />;
  }
);

Input.displayName = "Input";
