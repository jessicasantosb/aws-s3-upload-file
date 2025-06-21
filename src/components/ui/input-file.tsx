import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const InputFile = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "file", className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={twMerge(
          "p-2",
          className
        )}
      />
    );
  }
);

InputFile.displayName = "InputFile";
