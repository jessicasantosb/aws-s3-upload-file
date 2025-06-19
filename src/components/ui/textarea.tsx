import { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      rows={4}
      {...props}
      className={twMerge(
        "p-4 flex items-center gap-2 rounded border bg-transparent outline-2 outline-[#85A98F] focus-within:outline focus-within:border-none",
        className
      )}
    />
  );
};
Textarea.displayName = "Textarea";
