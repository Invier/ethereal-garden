"use client"

import { ToggleGroup as BaseToggleGroup } from "@base-ui-components/react"
import { Toggle as BaseToggle } from "@base-ui-components/react"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "../utils"

import { toggleVariants } from "./toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = (
  {
    ref,
    className,
    variant,
    size,
    children,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseToggleGroup> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseToggleGroup>>;
    variant?: VariantProps<typeof toggleVariants>["variant"];
    size?: VariantProps<typeof toggleVariants>["size"];
    children?: React.ReactNode;
    className?: string;
  }
) => (<BaseToggleGroup
  ref={ref}
  className={cn("flex items-center justify-center gap-1", className)}
  {...props}
>
  <ToggleGroupContext.Provider value={{ variant, size }}>
    {children}
  </ToggleGroupContext.Provider>
</BaseToggleGroup>)

ToggleGroup.displayName = "ToggleGroup"

const ToggleGroupItem = (
  {
    ref,
    className,
    children,
    variant,
    size,
    ...props
  }: React.ComponentPropsWithRef<typeof BaseToggle> & {
    ref?: React.RefObject<React.ElementRef<typeof BaseToggle>>;
    className?: string;
    children?: React.ReactNode;
    variant?: VariantProps<typeof toggleVariants>["variant"];
    size?: VariantProps<typeof toggleVariants>["size"];
  }
) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <BaseToggle
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </BaseToggle>
  )
}

ToggleGroupItem.displayName = "ToggleGroupItem"

export { ToggleGroup, ToggleGroupItem }
