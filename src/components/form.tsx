import { FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export function Form({ className, ...props }: FormProps) {
  return (
    <form
      className={twMerge(
        "flex flex-col gap-4 max-w-2xl mx-auto p-4 border rounded-lg",
        className
      )}
      {...props}
    />
  );
}
