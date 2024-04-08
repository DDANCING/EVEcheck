import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as SelectPrimitive from "@radix-ui/react-select"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "src/index.cssflex src/index.cssh-9 src/index.cssw-full src/index.cssitems-center src/index.cssjustify-between src/index.csswhitespace-nowrap src/index.cssrounded-md src/index.cssborder src/index.cssborder-input src/index.cssbg-transparent src/index.csspx-3 src/index.csspy-2 src/index.csstext-sm src/index.cssshadow-sm src/index.cssring-offset-background placeholder:src/index.csstext-muted-foreground focus:src/index.cssoutline-none focus:src/index.cssring-1 focus:src/index.cssring-ring disabled:src/index.csscursor-not-allowed disabled:src/index.cssopacity-50 [&>span]:src/index.cssline-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretSortIcon className="src/index.cssh-4 src/index.cssw-4 src/index.cssopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "src/index.cssflex src/index.csscursor-default src/index.cssitems-center src/index.cssjustify-center src/index.csspy-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "src/index.cssflex src/index.csscursor-default src/index.cssitems-center src/index.cssjustify-center src/index.csspy-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "src/index.cssrelative src/index.cssz-50 src/index.cssmax-h-96 src/index.cssmin-w-[8rem] src/index.cssoverflow-hidden src/index.cssrounded-md src/index.cssborder src/index.cssbg-popover src/index.csstext-popover-foreground src/index.cssshadow-md data-[state=open]:src/index.cssanimate-in data-[state=closed]:src/index.cssanimate-out data-[state=closed]:src/index.cssfade-out-0 data-[state=open]:src/index.cssfade-in-0 data-[state=closed]:src/index.csszoom-out-95 data-[state=open]:src/index.csszoom-in-95 data-[side=bottom]:src/index.cssslide-in-from-top-2 data-[side=left]:src/index.cssslide-in-from-right-2 data-[side=right]:src/index.cssslide-in-from-left-2 data-[side=top]:src/index.cssslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:src/index.csstranslate-y-1 data-[side=left]:src/index.css-translate-x-1 data-[side=right]:src/index.csstranslate-x-1 data-[side=top]:src/index.css-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "src/index.cssp-1",
          position === "popper" &&
            "src/index.cssh-[var(--radix-select-trigger-height)] src/index.cssw-full src/index.cssmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("src/index.csspx-2 src/index.csspy-1.5 src/index.csstext-sm src/index.cssfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "src/index.cssrelative src/index.cssflex src/index.cssw-full src/index.csscursor-default src/index.cssselect-none src/index.cssitems-center src/index.cssrounded-sm src/index.csspy-1.5 src/index.csspl-2 src/index.csspr-8 src/index.csstext-sm src/index.cssoutline-none focus:src/index.cssbg-accent focus:src/index.csstext-accent-foreground data-[disabled]:src/index.csspointer-events-none data-[disabled]:src/index.cssopacity-50",
      className
    )}
    {...props}
  >
    <span className="src/index.cssabsolute src/index.cssright-2 src/index.cssflex src/index.cssh-3.5 src/index.cssw-3.5 src/index.cssitems-center src/index.cssjustify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="src/index.cssh-4 src/index.cssw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("src/index.css-mx-1 src/index.cssmy-1 src/index.cssh-px src/index.cssbg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
