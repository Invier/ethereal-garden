"use client"

import { ContextMenu as BaseContextMenu, Menu as BaseMenu, Separator as BaseSeparator } from "@base-ui-components/react"
import { Check, ChevronRight, Circle } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const ContextMenu = BaseContextMenu.Root

const ContextMenuTrigger = BaseContextMenu.Trigger

const ContextMenuGroup = BaseMenu.Group

const ContextMenuPortal = BaseMenu.Portal

const ContextMenuSub = BaseMenu.SubmenuRoot

const ContextMenuRadioGroup = BaseMenu.RadioGroup

const ContextMenuSubTrigger = (
  {
    ref,
    className,
    inset,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.SubmenuTrigger> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.SubmenuTrigger>>;
    inset?: boolean;
    children?: React.ReactNode;
  }
) => (<BaseMenu.SubmenuTrigger
  ref={ref}
  className={cn(
    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[open]:bg-accent data-[open]:text-accent-foreground",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {children}
  <ChevronRight className="ml-auto h-4 w-4" />
</BaseMenu.SubmenuTrigger>)
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"

const ContextMenuSubContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.Popup>>;
  }
) => (<BaseMenu.Popup
  ref={ref}
  className={cn(
    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    className
  )}
  {...props}
/>)
ContextMenuSubContent.displayName = "ContextMenuSubContent"

const ContextMenuContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.Popup>>;
  }
) => (<ContextMenuPortal>
  <BaseMenu.Popup
    ref={ref}
    className={cn(
      "z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
</ContextMenuPortal>)
ContextMenuContent.displayName = "ContextMenuContent"

const ContextMenuItem = (
  {
    ref,
    className,
    inset,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.Item> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.Item>>;
    inset?: boolean;
  }
) => (<BaseMenu.Item
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    inset && "pl-8",
    className
  )}
  {...props}
/>)
ContextMenuItem.displayName = "ContextMenuItem"

const ContextMenuCheckboxItem = (
  {
    ref,
    className,
    children,
    checked,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.CheckboxItem> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.CheckboxItem>>;
    children?: React.ReactNode;
    checked?: boolean;
  }
) => (<BaseMenu.CheckboxItem
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  checked={checked}
  {...props}
>
  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <BaseMenu.CheckboxItemIndicator>
      <Check className="h-4 w-4" />
    </BaseMenu.CheckboxItemIndicator>
  </span>
  {children}
</BaseMenu.CheckboxItem>)
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

const ContextMenuRadioItem = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.RadioItem> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.RadioItem>>;
    children?: React.ReactNode;
  }
) => (<BaseMenu.RadioItem
  ref={ref}
  className={cn(
    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...props}
>
  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <BaseMenu.RadioItemIndicator>
      <Circle className="h-4 w-4 fill-current" />
    </BaseMenu.RadioItemIndicator>
  </span>
  {children}
</BaseMenu.RadioItem>)
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"

const ContextMenuLabel = (
  {
    ref,
    className,
    inset,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseMenu.GroupLabel> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseMenu.GroupLabel>>;
    inset?: boolean;
  }
) => (<BaseMenu.GroupLabel
  ref={ref}
  className={cn(
    "px-2 py-1.5 text-sm font-semibold text-foreground",
    inset && "pl-8",
    className
  )}
  {...props}
/>)
ContextMenuLabel.displayName = "ContextMenuLabel"

const ContextMenuSeparator = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSeparator> & {
    ref: React.RefObject<React.ElementRef<typeof BaseSeparator>>;
  }
) => (<BaseSeparator
  ref={ref}
  className={cn("-mx-1 my-1 h-px bg-border", className)}
  {...props}
/>)
ContextMenuSeparator.displayName = "ContextMenuSeparator"

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
