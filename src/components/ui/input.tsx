import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={twMerge("w-full h-10 p-2 rounded-xl text-black", className)}
      />
    );
  }
);

Input.displayName = "Input";
