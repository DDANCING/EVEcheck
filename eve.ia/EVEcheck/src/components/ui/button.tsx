import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "src/index.cssinline-flex src/index.cssitems-center src/index.cssjustify-center src/index.csswhitespace-nowrap src/index.cssrounded-md src/index.csstext-sm src/index.cssfont-medium src/index.csstransition-colors focus-visible:src/index.cssoutline-none focus-visible:src/index.cssring-1 focus-visible:src/index.cssring-ring disabled:src/index.csspointer-events-none disabled:src/index.cssopacity-50",
  {
    variants: {
      variant: {
        default:
          "src/index.cssbg-primary src/index.csstext-primary-foreground src/index.cssshadow hover:src/index.cssbg-primary/90",
        destructive:
          "src/index.cssbg-destructive src/index.csstext-destructive-foreground src/index.cssshadow-sm hover:src/index.cssbg-destructive/90",
        outline:
          "src/index.cssborder src/index.cssborder-input src/index.cssbg-background src/index.cssshadow-sm hover:src/index.cssbg-accent hover:src/index.csstext-accent-foreground",
        secondary:
          "src/index.cssbg-secondary src/index.csstext-secondary-foreground src/index.cssshadow-sm hover:src/index.cssbg-secondary/80",
        ghost: "hover:src/index.cssbg-accent hover:src/index.csstext-accent-foreground",
        link: "src/index.csstext-primary src/index.cssunderline-offset-4 hover:src/index.cssunderline",
      },
      size: {
        default: "src/index.cssh-9 src/index.csspx-4 src/index.csspy-2",
        sm: "src/index.cssh-8 src/index.cssrounded-md src/index.csspx-3 src/index.csstext-xs",
        lg: "src/index.cssh-10 src/index.cssrounded-md src/index.csspx-8",
        icon: "src/index.cssh-9 src/index.cssw-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
