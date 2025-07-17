"use client"

import { Select as BaseSelect, Separator as BaseSeparator } from "@base-ui-components/react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"

import { cn } from "../utils"

const Select = BaseSelect.Root

const SelectGroup = BaseSelect.Group

const SelectValue = BaseSelect.Value

const SelectTrigger = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.Trigger> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.Trigger>>;
  }
) => (<BaseSelect.Trigger
  ref={ref}
  className={cn(
    "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    className
  )}
  {...props}
>
  {children}
  <BaseSelect.Icon>
    <ChevronDown className="h-4 w-4 opacity-50" />
  </BaseSelect.Icon>
</BaseSelect.Trigger>)
SelectTrigger.displayName = "SelectTrigger"

const SelectScrollUpButton = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.ScrollUpArrow> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.ScrollUpArrow>>;
  }
) => (<BaseSelect.ScrollUpArrow
  ref={ref}
  className={cn(
    "flex cursor-default items-center justify-center py-1",
    className
  )}
  {...props}
>
  <ChevronUp className="h-4 w-4" />
</BaseSelect.ScrollUpArrow>)
SelectScrollUpButton.displayName = "SelectScrollUpButton"

const SelectScrollDownButton = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.ScrollDownArrow> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.ScrollDownArrow>>;
  }
) => (<BaseSelect.ScrollDownArrow
  ref={ref}
  className={cn(
    "flex cursor-default items-center justify-center py-1",
    className
  )}
  {...props}
>
  <ChevronDown className="h-4 w-4" />
</BaseSelect.ScrollDownArrow>)
SelectScrollDownButton.displayName = "SelectScrollDownButton"

const SelectContent = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.Popup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.Popup>>;
  }
) => (<BaseSelect.Portal>
  <BaseSelect.Popup
    ref={ref}
    className={cn(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[enter]:animate-in data-[leave]:animate-out data-[leave]:fade-out-0 data-[enter]:fade-in-0 data-[leave]:zoom-out-95 data-[enter]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    <SelectScrollUpButton />
    <BaseSelect.Positioner
      className={cn(
        "p-1",
      )}
    >
      {children}
    </BaseSelect.Positioner>
    <SelectScrollDownButton />
  </BaseSelect.Popup>
</BaseSelect.Portal>)
SelectContent.displayName = "SelectContent"

const SelectLabel = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.GroupLabel> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.GroupLabel>>;
  }
) => (<BaseSelect.GroupLabel
  ref={ref}
  className={cn("px-2 py-1.5 text-sm font-semibold", className)}
  {...props}
/>)
SelectLabel.displayName = "SelectLabel"

const SelectItem = (
  {
    ref,
    className,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSelect.Item> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSelect.Item>>;
  }
) => (<BaseSelect.Item
  ref={ref}
  className={cn(
    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className
  )}
  {...props}
>
  <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <BaseSelect.ItemIndicator>
      <Check className="h-4 w-4" />
    </BaseSelect.ItemIndicator>
  </span>
  <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
</BaseSelect.Item>)
SelectItem.displayName = "SelectItem"

const SelectSeparator = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseSeparator> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseSeparator>>;
  }
) => (<BaseSeparator
  ref={ref}
  className={cn("-mx-1 my-1 h-px bg-muted", className)}
  {...props}
/>)
SelectSeparator.displayName = "SelectSeparator"

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
