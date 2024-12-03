import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-full hover:opacity-80",
  {
    variants: {
      variant: {
        default: "bg-[#85A98F]",
        outline: "border border-2 bg-white text-black hover:bg-black/10",
        error: "bg-red-500",
        success: "bg-green-500",
      },
      size: {
        sm: "h-7 px-2 text-xs",
        md: "h-9 px-4 text-md",
        lg: "h-12 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", variant, size, className, ...props }) => {
    return (
      <button
        type={type}
        {...props}
        className={twMerge(buttonVariants({ variant, size, className }))}
      />
    );
  }
);

Button.displayName = "Button";
