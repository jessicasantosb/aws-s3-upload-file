import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return <label className={twMerge("text-gray-400", className)} {...props} />;
}
