import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "src/index.csspeer src/index.cssh-4 src/index.cssw-4 src/index.cssshrink-0 src/index.cssrounded-sm src/index.cssborder src/index.cssborder-primary src/index.cssshadow focus-visible:src/index.cssoutline-none focus-visible:src/index.cssring-1 focus-visible:src/index.cssring-ring disabled:src/index.csscursor-not-allowed disabled:src/index.cssopacity-50 data-[state=checked]:src/index.cssbg-primary data-[state=checked]:src/index.csstext-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("src/index.cssflex src/index.cssitems-center src/index.cssjustify-center src/index.csstext-current")}
    >
      <CheckIcon className="src/index.cssh-4 src/index.cssw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
