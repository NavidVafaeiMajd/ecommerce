"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: "h-8 text-sm",
        md: "h-9 text-base",
        lg: "h-11 text-lg px-4",
      },
      variant: {
        default: "",
        outline: "border border-input bg-transparent",
        filled:
          "bg-searchBg! py-[12px]! px-[20px]! text-[16px]! border-none! h-[44px]!",
      },
      state: {
        normal: "",
        error: "border-destructive focus-visible:ring-destructive/40",
        success: "border-green-500 focus-visible:ring-green-500/40",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      state: "normal",
    },
  }
);

function Input(
  {
    className,
    type = "text",
    size,
    variant,
    state,
    ...props
  }: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
) {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className={cn("relative w-full", className)}>
      <input
        type={isPassword && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          inputVariants({ size, variant, state }),
          isPassword ? "pr-10" : "",
          "max-w-full! w-full "
        )}
        {...props}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}

export { Input };
