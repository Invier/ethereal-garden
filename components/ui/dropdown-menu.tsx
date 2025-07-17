"use client"

import { Menu, Separator } from "@base-ui-components/react"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const DropdownMenu = Menu.Root

const DropdownMenuTrigger = Menu.Trigger

const DropdownMenuGroup = Menu.Group

const DropdownMenuPortal = Menu.Portal

const DropdownMenuSub = Menu.SubmenuRoot

const DropdownMenuRadioGroup = Menu.RadioGroup

const DropdownMenuSubTrigger = (
  {
    ref,
    className,
    inset,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.SubmenuTrigger> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.SubmenuTrigger>>;
    inset?: boolean;
    children?: React.ReactNode;
  }
) => (<Menu.SubmenuTrigger
  ref={ref}
  className={cn(
    "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {children}
  <ChevronRight className="ml-auto" />
</Menu.SubmenuTrigger>)
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

const DropdownMenuSubContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.Popup>>;
  }
) => (<Menu.Popup
  ref={ref}
  className={cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    className
  )}
  {...props}
/>)
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"

const DropdownMenuContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.Popup>>;
  }
) => (<DropdownMenuPortal>
  <Menu.Popup
    ref={ref}
    className={cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
</DropdownMenuPortal>)
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = (
  {
    ref,
    className,
    inset,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.Item> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.Item>>;
    inset?: boolean;
  }
) => (<Menu.Item
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
/>)
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuCheckboxItem = (
  {
    ref,
    className,
    children,
    checked,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.CheckboxItem> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.CheckboxItem>>;
    children?: React.ReactNode;
    checked?: boolean;
  }
) => (<Menu.CheckboxItem
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  checked={checked}
  {...props}
>
  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <Menu.CheckboxItemIndicator>
      <Check className="h-4 w-4" />
    </Menu.CheckboxItemIndicator>
  </span>
  {children}
</Menu.CheckboxItem>)
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

const DropdownMenuRadioItem = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.RadioItem> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.RadioItem>>;
    children?: React.ReactNode;
  }
) => (<Menu.RadioItem
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...props}
>
  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <Menu.RadioItemIndicator>
      <Circle className="h-2 w-2 fill-current" />
    </Menu.RadioItemIndicator>
  </span>
  {children}
</Menu.RadioItem>)
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

const DropdownMenuLabel = (
  {
    ref,
    className,
    inset,
    ...props
  }: React.ComponentPropsWithRef<typeof Menu.GroupLabel> & {
    ref?: React.RefObject<React.ElementRef<typeof Menu.GroupLabel>>;
    inset?: boolean;
  }
) => (<Menu.GroupLabel
  ref={ref}
  className={cn(
    "px-2 py-1.5 text-sm font-semibold",
    inset && "pl-8",
    className
  )}
  {...props}
/>)
DropdownMenuLabel.displayName = "DropdownMenuLabel"

const DropdownMenuSeparator = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof Separator> & {
    ref?: React.RefObject<React.ElementRef<typeof Separator>>;
  }
) => (<Separator
  ref={ref}
  className={cn("-mx-1 my-1 h-px bg-muted", className)}
  {...props}
/>)
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  ref?: React.RefObject<HTMLSpanElement>;
}) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
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
