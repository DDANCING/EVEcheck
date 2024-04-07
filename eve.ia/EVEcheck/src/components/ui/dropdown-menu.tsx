import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "src/index.cssflex src/index.csscursor-default src/index.cssselect-none src/index.cssitems-center src/index.cssrounded-sm src/index.csspx-2 src/index.csspy-1.5 src/index.csstext-sm src/index.cssoutline-none focus:src/index.cssbg-accent data-[state=open]:src/index.cssbg-accent",
      inset && "src/index.csspl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="src/index.cssml-auto src/index.cssh-4 src/index.cssw-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "src/index.cssz-50 src/index.cssmin-w-[8rem] src/index.cssoverflow-hidden src/index.cssrounded-md src/index.cssborder src/index.cssbg-popover src/index.cssp-1 src/index.csstext-popover-foreground src/index.cssshadow-lg data-[state=open]:src/index.cssanimate-in data-[state=closed]:src/index.cssanimate-out data-[state=closed]:src/index.cssfade-out-0 data-[state=open]:src/index.cssfade-in-0 data-[state=closed]:src/index.csszoom-out-95 data-[state=open]:src/index.csszoom-in-95 data-[side=bottom]:src/index.cssslide-in-from-top-2 data-[side=left]:src/index.cssslide-in-from-right-2 data-[side=right]:src/index.cssslide-in-from-left-2 data-[side=top]:src/index.cssslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "src/index.cssz-50 src/index.cssmin-w-[8rem] src/index.cssoverflow-hidden src/index.cssrounded-md src/index.cssborder src/index.cssbg-popover src/index.cssp-1 src/index.csstext-popover-foreground src/index.cssshadow-md",
        "data-[state=open]:src/index.cssanimate-in data-[state=closed]:src/index.cssanimate-out data-[state=closed]:src/index.cssfade-out-0 data-[state=open]:src/index.cssfade-in-0 data-[state=closed]:src/index.csszoom-out-95 data-[state=open]:src/index.csszoom-in-95 data-[side=bottom]:src/index.cssslide-in-from-top-2 data-[side=left]:src/index.cssslide-in-from-right-2 data-[side=right]:src/index.cssslide-in-from-left-2 data-[side=top]:src/index.cssslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "src/index.cssrelative src/index.cssflex src/index.csscursor-default src/index.cssselect-none src/index.cssitems-center src/index.cssrounded-sm src/index.csspx-2 src/index.csspy-1.5 src/index.csstext-sm src/index.cssoutline-none src/index.csstransition-colors focus:src/index.cssbg-accent focus:src/index.csstext-accent-foreground data-[disabled]:src/index.csspointer-events-none data-[disabled]:src/index.cssopacity-50",
      inset && "src/index.csspl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "src/index.cssrelative src/index.cssflex src/index.csscursor-default src/index.cssselect-none src/index.cssitems-center src/index.cssrounded-sm src/index.csspy-1.5 src/index.csspl-8 src/index.csspr-2 src/index.csstext-sm src/index.cssoutline-none src/index.csstransition-colors focus:src/index.cssbg-accent focus:src/index.csstext-accent-foreground data-[disabled]:src/index.csspointer-events-none data-[disabled]:src/index.cssopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="src/index.cssabsolute src/index.cssleft-2 src/index.cssflex src/index.cssh-3.5 src/index.cssw-3.5 src/index.cssitems-center src/index.cssjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="src/index.cssh-4 src/index.cssw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "src/index.cssrelative src/index.cssflex src/index.csscursor-default src/index.cssselect-none src/index.cssitems-center src/index.cssrounded-sm src/index.csspy-1.5 src/index.csspl-8 src/index.csspr-2 src/index.csstext-sm src/index.cssoutline-none src/index.csstransition-colors focus:src/index.cssbg-accent focus:src/index.csstext-accent-foreground data-[disabled]:src/index.csspointer-events-none data-[disabled]:src/index.cssopacity-50",
      className
    )}
    {...props}
  >
    <span className="src/index.cssabsolute src/index.cssleft-2 src/index.cssflex src/index.cssh-3.5 src/index.cssw-3.5 src/index.cssitems-center src/index.cssjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="src/index.cssh-4 src/index.cssw-4 src/index.cssfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "src/index.csspx-2 src/index.csspy-1.5 src/index.csstext-sm src/index.cssfont-semibold",
      inset && "src/index.csspl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("src/index.css-mx-1 src/index.cssmy-1 src/index.cssh-px src/index.cssbg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("src/index.cssml-auto src/index.csstext-xs src/index.csstracking-widest src/index.cssopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
