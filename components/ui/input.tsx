import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 text-grayPrimary w-full rounded-lg border bg-transparent px-3 py-1 text-[16px] shadow-sm border-gray-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:outline-none focus-visible:shadow-md disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-[14px] cursor-pointer focus-visible:cursor-auto md:hover:shadow-md transition-shadow focus-visible:placeholder:opacity-0 placeholder:transition-all placeholder:text-gray-400",
          className
        )}
        autoFocus={false}
        autoComplete="off"
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
