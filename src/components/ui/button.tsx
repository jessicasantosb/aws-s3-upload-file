import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", className, ...props }) => {
    return (
      <button
        type={type}
        {...props}
        className={twMerge(
          "w-full h-10 rounded-xl bg-[#85A98F] hover:opacity-85",
          className
        )}
      />
    );
  }
);

Button.displayName = "Button";
