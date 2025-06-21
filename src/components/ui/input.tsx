"use client";

import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconDefinition;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", icon, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
      <div
        className={twMerge(
          "w-full h-12 p-4 flex items-center gap-2 rounded-full border outline-2 outline-[#85A98F] focus-within:outline focus-within:border-none",
          className
        )}
      >
        {icon && (
          <FontAwesomeIcon icon={icon} className="size-4 text-white/40" />
        )}

        <input
          ref={ref}
          type={showPassword ? type : "text"}
          {...props}
          className="flex-1 bg-transparent outline-none"
        />

        {type === "password" && (
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => { setShowPassword(!showPassword); }}
            className="size-5  cursor-pointer"
          />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
