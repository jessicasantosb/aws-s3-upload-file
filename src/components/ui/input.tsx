"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
      <div
        className={twMerge(
          "w-full h-10 p-2 flex items-center rounded-xl border outline-2 outline-[#85A98F] focus-within:outline bg-white text-black",
          className
        )}
      >
        <input
          ref={ref}
          type={showPassword ? type : "text"}
          {...props}
          className="flex-1 outline-none"
        />
        {type === "password" && (
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
            className="size-6 text-black cursor-pointer"
          />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
