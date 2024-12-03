import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "w-full flex items-center justify-center whitespace-nowrap rounded-xl hover:opacity-80",
  {
    variants: {
      variant: {
        default: "bg-[#85A98F]",
        outline: "border border-2 bg-white text-black hover:bg-black/10",
        error: "bg-red-500",
        success: "bg-green-500",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
