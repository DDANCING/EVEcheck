import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "src/index.cssflex src/index.cssh-9 src/index.cssw-full src/index.cssrounded-md src/index.cssborder src/index.cssborder-input src/index.cssbg-transparent src/index.csspx-3 src/index.csspy-1 src/index.csstext-sm src/index.cssshadow-sm src/index.csstransition-colors file:src/index.cssborder-0 file:src/index.cssbg-transparent file:src/index.csstext-sm file:src/index.cssfont-medium placeholder:src/index.csstext-muted-foreground focus-visible:src/index.cssoutline-none focus-visible:src/index.cssring-1 focus-visible:src/index.cssring-ring disabled:src/index.csscursor-not-allowed disabled:src/index.cssopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
