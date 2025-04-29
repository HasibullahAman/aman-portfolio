import * as React from "react";
import { cn } from "../../lib/utils";
import { Input as NextInput } from "@nextui-org/react";

// Define the props type for CustomInput
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-[48px] rounded-md border border-white/10 focus:border-accent
           font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`,
          className
        )}
        ref={ref}
        {...props} // Pass down all props to the input element
      />
    );
  }
);

Input.displayName = "CustomInput";

export { Input };
