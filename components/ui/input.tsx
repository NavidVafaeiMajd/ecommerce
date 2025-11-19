import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

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
        filled: "bg-searchBg! py-[12px]! px-[20px]! text-[16px]! border-none! h-[44px]! min-w-[267px]!",
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
)

function Input(
  { className, type, size, variant, state, ...props }:
  React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, variant, state }), className)}
      {...props}
    />
  );
}


export { Input }
